"use client"
import * as React from "react"
import { Database, Terminal as TerminalIcon, Table } from 'lucide-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

// BEST themes for perfect readability in both modes
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'        // Dark mode (gorgeous)
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'           // Light mode (super clean & readable)

function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(' ')
}

const codeSnippets = {
  typescript: {
    file: "user-service.ts",
    language: "typescript",
    code: `interface User {
  id: number
  name: string
  email: string
  role: "admin" | "editor"
};

export async function CreateUser(data: User) {
  return await prisma.user.create({
    data: {
      ...data,
      createdAt: new Date()
    }
  })
};`
  },
  csharp: {
    file: "UserController.cs",
    language: "csharp",
    code: `[HttpPost]
public async Task<IActionResult> CreateUser(model UserViewModel)
{
    var user = new User {
        Name = model.Name,
        Email = model.Email,
        Role = UserRole.Aditor,
        CreatedAt = DateTime.UtcNow
    };

    _context.Users.Add(user);
    await _context.SaveChangesAsync();
    return Ok(user);
};`
  },
  sql: {
    file: "schema.sql",
    language: "sql",
    code: `CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE,
  role VARCHAR(50) DEFAULT 'editor',
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_users_email ON users(email);`
  }
}

function CodeWindow({ activeTab, setActiveTab }: { activeTab: keyof typeof codeSnippets; setActiveTab: any }) {
  const snippet = codeSnippets[activeTab]
  const isDark = document?.documentElement?.classList?.contains('dark')
  const style = isDark ? vscDarkPlus : tomorrow

  return (
    <div className="overflow-hidden rounded-sm border border-zinc-300/70 bg-white/95 dark:border-white/15 dark:bg-[#202124]">
      <div className="flex items-center justify-between border-b border-zinc-300/60 bg-zinc-50/90 px-5 p-1 dark:border-white/10 dark:bg-white/5">
        <div className="flex items-center gap-3">
          <div className="flex gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
          </div>
          <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">{snippet.file}</span>
        </div>

        {/* Tabs far right */}
        <div className="flex gap-1.5 rounded-sm bg-zinc-200/70 px-2 py-1.5 dark:bg-white/10">
          {Object.keys(codeSnippets).map((lang) => (
            <button
              key={lang}
              onClick={() => setActiveTab(lang)}
              className={cn(
                "px-2 py-1 text-xs font-semibold rounded-sm cursor-pointer transition-all",
                activeTab === lang
                  ? "bg-white text-black shadow-sm dark:bg-white dark:text-black"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200"
              )}
            >
              {lang === 'typescript' ? 'TS' : lang === 'csharp' ? 'C#' : 'SQL'}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-hidden">
          <SyntaxHighlighter
            language={snippet.language}
            style={style}
            showLineNumbers
            wrapLongLines={false}
            lineNumberStyle={{
              color: isDark ? '#555' : '#999',
              paddingRight: '40px',
              userSelect: 'none',
              fontSize: '12.5px',
              opacity: 0.6
            }}
            customStyle={{
              margin: 0,
              padding: '28px 0 28px 24px',
              background: 'transparent',
              fontSize: '14.2px',
              lineHeight: '1.7',
              fontFamily: 'ui-monospace, "JetBrains Mono", Menlo, monospace'
            }}
          >
            {snippet.code.trim()}
          </SyntaxHighlighter>
        </div>
    </div>
  )
}

// Database & Terminal remain exactly as you liked them (only minor polish)
function DatabasePreview() {
  const rows = [
    { id: "001", name: "Alex D.", role: "admin", active: true },
    { id: "002", name: "Sarah M.", role: "editor", active: true },
    { id: "003", name: "James R.", role: "viewer", active: false },
  ]

  return (
    <div className="overflow-hidden rounded-sm border border-zinc-300/70 bg-white/95 dark:border-white/15 dark:bg-[#202124]">
      <div className="flex items-center justify-between border-b border-zinc-300/60 bg-zinc-50/90 px-5 py-3 dark:border-white/10 dark:bg-white/5">
        <div className="flex items-center gap-3">
          <Table className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
          <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">users_table</span>
        </div>
      </div>
      <div className="p-3">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-zinc-300/60 dark:border-white/15 text-zinc-600 dark:text-zinc-400">
            <tr>
              <th className="pb-3 font-medium">id</th>
              <th className="pb-3 pl-10 font-medium">name</th>
              <th className="pb-3 pl-10 font-medium">role</th>
              <th className="pb-3 pl-10 font-medium">status</th>
            </tr>
          </thead>
          <tbody className="pt-3">
            {rows.map((row: {
    id: string;
    name: string;
    role: string;
    active: boolean;
},index: number) => (
              <tr key={row.id} className={`border-t ${index === 0 && "bg-green/5"}`}>
                <td className="py-2 font-mono text-zinc-600 dark:text-zinc-400">{row.id}</td>
                <td className="py-2 pl-10 font-medium text-zinc-900 dark:text-white">{row.name}</td>
                <td className="py-2 pl-10 text-zinc-700 dark:text-zinc-300">{row.role}</td>
                
                <td className="py-2 pl-10">
                  <div className={cn("h-2 w-2 rounded-full", row.active ? "bg-green-600 dark:bg-green-500" : "bg-zinc-400 dark:bg-zinc-600")} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function TerminalWindow() {
  return (
    <div className="overflow-hidden rounded-sm border border-zinc-300/70 bg-white/95 dark:border-white/15 dark:bg-[#202124] text-start">
      <div className="border-b border-zinc-300/60 bg-zinc-50/90 px-5 py-3 dark:border-white/10 dark:bg-white/5">
        <div className="flex items-center gap-3">
          <TerminalIcon className="h-4 w-4 text-green-600 dark:text-green-400" />
          <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Terminal</span>
        </div>
      </div>
      <div className="p-6 font-mono text-sm leading-relaxed text-zinc-800 dark:text-zinc-200">
        <div className="space-y-2">
          <div><span className="text-green-600 dark:text-green-400">➜</span> <span className="text-zinc-600 dark:text-zinc-500">~</span> npx prisma generate</div>
          <div className="ml-8 text-xs text-zinc-500">Generated Prisma Client</div>

          <div><span className="text-green-600 dark:text-green-400">➜</span> <span className="text-zinc-600 dark:text-zinc-500">~</span> npx prisma migrate dev</div>
          <div className="ml-8 text-xs text-green-600 dark:text-green-400">Applied 1 migration</div>

          <div className="mt-2"><span className="text-green-600 dark:text-green-400">➜</span> <span className="text-zinc-600 dark:text-zinc-500">~</span> <span className="animate-pulse">_</span></div>
        </div>
      </div>
    </div>
  )
}

const SoftwareDev = () => {
  const [activeTab, setActiveTab] = React.useState<keyof typeof codeSnippets>("typescript")

  return (
    <section className="w-full py-16 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <CodeWindow activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
          <div className="flex flex-col gap-4 lg:col-span-4">
            <DatabasePreview />
            <TerminalWindow />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SoftwareDev