'use client'

interface CodeSide {
  title: string
  language: string
  code: string
}

interface CodeComparisonProps {
  left: CodeSide
  right: CodeSide
  description?: string
}

export default function CodeComparison({ left, right, description }: CodeComparisonProps) {
  return (
    <div className="my-6">
      <div className="grid grid-cols-1 gap-0 overflow-hidden rounded-xl border-2 border-[#52288C] md:grid-cols-2"
        style={{ filter: 'drop-shadow(0 2px 8px rgba(139, 92, 246, 0.15))' }}
      >
        <div className="border-b border-[#52288C] md:border-b-0 md:border-r">
          <div className="flex items-center gap-2 border-b border-[#52288C]/40 bg-amber-500/10 px-4 py-2 dark:bg-amber-500/5">
            <span className="text-sm font-bold text-amber-600 dark:text-amber-400">{left.title}</span>
          </div>
          <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
            <code className={`language-${left.language}`}>{left.code}</code>
          </pre>
        </div>
        <div>
          <div className="flex items-center gap-2 border-b border-[#52288C]/40 bg-violet-500/10 px-4 py-2 dark:bg-violet-500/5">
            <span className="text-sm font-bold text-violet-600 dark:text-violet-400">{right.title}</span>
          </div>
          <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
            <code className={`language-${right.language}`}>{right.code}</code>
          </pre>
        </div>
      </div>
      {description && (
        <p className="mt-2 text-center text-sm text-gray-500 dark:text-gray-400">{description}</p>
      )}
    </div>
  )
}
