import { client } from "@/lib/sanity";
import Link from "next/link";
import Image from "next/image";

// GROQ query to get all posts
const query = `
  *[_type == "post"] | order(publishedAt desc) {
    title,
    slug,
    mainImage{
      asset->{url}
    },
    publishedAt,
  }
`;

export default async function BlogArchivePage() {
  const posts = await client.fetch(query);

  return (
    <section className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-10">Blog Archive</h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link
            key={post.slug.current}
            href={`/blog/${post.slug.current}`}
            className="block border rounded-xl shadow hover:shadow-lg overflow-hidden transition"
          >
            {/* Post Image */}
            {post.mainImage?.asset?.url && (
              <Image
                src={post.mainImage.asset.url}
                alt={post.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
            )}

            {/* Post Content */}
            <div className="p-4">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-500 text-sm mt-2">
                {new Date(post.publishedAt).toLocaleDateString()}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
