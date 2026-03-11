import NextImage from "next/image";
import Link from "next/link";
import type { MDXComponents } from "mdx/types";

/**
 * These components are passed to <MDXRemote components={mdxComponents} />.
 *
 * KEY RULES for your MDX file:
 * 1. Raw HTML elements (img, div, table…) keep their own className — we don't override them here.
 * 2. We only style markdown-generated elements (h2, p, ul, blockquote, code, pre…).
 * 3. Image is explicitly passed so `import Image from "next/image"` inside MDX resolves.
 * 4. The prose wrapper on the page uses `prose-img:my-0 prose-headings:mt-0`
 *    so prose doesn't fight the Tailwind classes already on your MDX elements.
 */
export const mdxComponents: MDXComponents = {
  // ── Pass Next.js Image so MDX `import Image from "next/image"` works ─────────
  // next-mdx-remote/rsc cannot resolve bare node_modules imports inside MDX content.
  // Passing it here means your MDX can do: <Image src="..." alt="..." width={} height={} />
  Image: ({
    src,
    alt,
    width,
    height,
    className,
    ...props
  }: React.ComponentProps<typeof NextImage>) => (
    <NextImage
      src={src}
      alt={alt ?? ""}
      width={width ?? 1200}
      height={height ?? 630}
      className={className ?? "rounded-xl shadow-md w-full object-cover"}
      {...props}
    />
  ),

  // ── img — preserve className already on the tag from your MDX ─────────────────
  // prose normally forces its own margin/border on img. We pass through className so
  // your MDX's h-[420px], h-52, h-64, rounded-xl etc. all apply correctly.
  img: ({
    src,
    alt,
    className,
    width,
    height,
    style,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => {
    if (!src) return null;
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src as string}
        alt={alt ?? ""}
        // If the MDX tag already has a className, use it as-is.
        // Otherwise fall back to a sensible default.
        className={className ?? "rounded-xl shadow-md w-full object-cover my-6"}
        width={width}
        height={height}
        style={style}
        loading="lazy"
        {...props}
      />
    );
  },

  // ── Markdown headings ─────────────────────────────────────────────────────────
  // Only applied to ## headings generated from markdown syntax, NOT to JSX <h2> in MDX.
  h1: ({ children }) => (
    <h1 className="text-3xl md:text-4xl font-extrabold mt-12 mb-4 leading-tight text-zinc-900 dark:text-white">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl font-bold mt-10 mb-4 leading-snug text-zinc-900 dark:text-white">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl font-semibold mt-8 mb-3 text-zinc-800 dark:text-zinc-100">
      {children}
    </h3>
  ),

  // ── Paragraphs ────────────────────────────────────────────────────────────────
  p: ({ children }) => (
    <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-base mb-5">
      {children}
    </p>
  ),

  // ── Lists ─────────────────────────────────────────────────────────────────────
  ul: ({ children }) => (
    <ul className="list-disc list-outside pl-6 mb-5 space-y-1.5 text-zinc-600 dark:text-zinc-300">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-outside pl-6 mb-5 space-y-1.5 text-zinc-600 dark:text-zinc-300">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,

  // ── Blockquote ────────────────────────────────────────────────────────────────
  blockquote: ({ children }) => (
    <blockquote className="not-prose border-l-4 border-emerald-400 pl-5 py-2 my-6 bg-emerald-50 dark:bg-emerald-900/10 rounded-r-xl text-zinc-700 dark:text-zinc-300 italic">
      {children}
    </blockquote>
  ),

  // ── Code blocks ───────────────────────────────────────────────────────────────
  pre: ({ children }) => (
    <pre className="not-prose bg-gray-100 dark:bg-zinc-800/50 rounded-sm p-6 overflow-x-auto my-6 text-sm leading-relaxed text-black dark:text-white">
      {children}
    </pre>
  ),
  code: ({
    children,
    className,
  }: {
    children?: React.ReactNode;
    className?: string;
  }) => {
    if (className) {
      // Inside a <pre> block — just pass through with language class
      return <code className={`${className} text-sm`}>{children}</code>;
    }
    // Inline code
    return (
      <code className="bg-zinc-100 dark:bg-zinc-800 text-emerald-600 dark:text-emerald-400 rounded px-1.5 py-0.5 text-sm font-mono">
        {children}
      </code>
    );
  },

  // ── Table ─────────────────────────────────────────────────────────────────────
  table: ({ children }) => (
    <div className="not-prose overflow-x-auto my-8 rounded-xl border border-zinc-200 dark:border-zinc-800">
      <table className="w-full text-sm text-left">{children}</table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-zinc-50 dark:bg-zinc-800/50 text-zinc-500 dark:text-zinc-400 text-xs uppercase tracking-wide">
      {children}
    </thead>
  ),
  tbody: ({ children }) => (
    <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
      {children}
    </tbody>
  ),
  tr: ({ children }) => (
    <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/30 transition-colors">
      {children}
    </tr>
  ),
  th: ({ children }) => (
    <th className="px-4 py-3 font-semibold text-zinc-700 dark:text-zinc-300">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">{children}</td>
  ),

  // ── HR ────────────────────────────────────────────────────────────────────────
  hr: () => <hr className="border-zinc-200 dark:border-zinc-800 my-10" />,

  // ── Links ─────────────────────────────────────────────────────────────────────
  a: ({ href, children }) => {
    if (!href) return <span>{children}</span>;
    const isInternal = href.startsWith("/") || href.startsWith("#");
    if (isInternal) {
      return (
        <Link
          href={href}
          className="text-emerald-600 dark:text-emerald-400 underline underline-offset-2 hover:text-emerald-700"
        >
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-emerald-600 dark:text-emerald-400 underline underline-offset-2 hover:text-emerald-700"
      >
        {children}
      </a>
    );
  },

  // ── Inline formatting ─────────────────────────────────────────────────────────
  strong: ({ children }) => (
    <strong className="font-semibold text-zinc-900 dark:text-white">
      {children}
    </strong>
  ),
  em: ({ children }) => (
    <em className="italic text-zinc-700 dark:text-zinc-300">{children}</em>
  ),
};