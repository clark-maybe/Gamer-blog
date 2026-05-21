'use client'

import { useEffect, useRef, useState } from 'react'

interface MermaidProps {
  chart: string
  caption?: string
}

export default function Mermaid({ chart, caption }: MermaidProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const render = async () => {
      try {
        const mermaid = (await import('mermaid')).default
        mermaid.initialize({
          startOnLoad: false,
          theme: 'dark',
          themeVariables: {
            primaryColor: '#4f46e5',
            primaryTextColor: '#e2e8f0',
            primaryBorderColor: '#6366f1',
            lineColor: '#818cf8',
            secondaryColor: '#3730a3',
            tertiaryColor: '#1e1b4b',
            fontFamily: 'inherit',
          },
        })
        if (containerRef.current) {
          containerRef.current.innerHTML = ''
          const id = `mermaid-${Date.now()}`
          const { svg } = await mermaid.render(id, chart)
          containerRef.current.innerHTML = svg
        }
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Mermaid render failed')
      }
    }
    render()
  }, [chart])

  if (error) {
    return (
      <div className="my-6 rounded-lg border border-red-300 bg-red-50 p-4 text-sm text-red-600 dark:border-red-800 dark:bg-red-950 dark:text-red-400">
        图表渲染失败: {error}
      </div>
    )
  }

  return (
    <div className="my-6">
      <div
        ref={containerRef}
        className="flex justify-center overflow-x-auto rounded-xl border-2 border-[#52288C] bg-gray-950 p-4"
        style={{ filter: 'drop-shadow(0 2px 8px rgba(139, 92, 246, 0.15))' }}
      />
      {caption && (
        <p className="mt-2 text-center text-sm text-gray-500 dark:text-gray-400">{caption}</p>
      )}
    </div>
  )
}
