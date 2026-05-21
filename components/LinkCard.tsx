'use client'

interface LinkCardProps {
  href: string
  title: string
  description?: string
  icon?: string
}

export default function LinkCard({ href, title, description, icon }: LinkCardProps) {
  const domain = (() => {
    try {
      return new URL(href).hostname
    } catch {
      return href
    }
  })()

  const faviconUrl = icon || `https://www.google.com/s2/favicons?domain=${domain}&sz=32`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="my-4 flex items-center gap-4 rounded-xl border-2 border-gray-200 p-4 no-underline transition-all hover:border-violet-400 hover:shadow-md dark:border-gray-700 dark:hover:border-violet-500"
    >
      <img
        src={faviconUrl}
        alt=""
        width={32}
        height={32}
        className="h-8 w-8 shrink-0 rounded"
        loading="lazy"
      />
      <div className="min-w-0 flex-1">
        <div className="truncate text-sm font-semibold text-gray-900 dark:text-gray-100">
          {title}
        </div>
        {description && (
          <div className="mt-0.5 truncate text-xs text-gray-500 dark:text-gray-400">
            {description}
          </div>
        )}
        <div className="mt-0.5 truncate text-xs text-gray-400 dark:text-gray-500">
          {domain}
        </div>
      </div>
      <svg className="h-4 w-4 shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    </a>
  )
}
