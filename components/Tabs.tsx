'use client'

import { useState, ReactNode } from 'react'

interface Tab {
  label: string
  content: ReactNode
}

interface TabsProps {
  tabs: Tab[]
  defaultIndex?: number
}

export default function Tabs({ tabs, defaultIndex = 0 }: TabsProps) {
  const [active, setActive] = useState(defaultIndex)

  return (
    <div className="my-6 overflow-hidden rounded-xl border-2 border-[#52288C]"
      style={{ filter: 'drop-shadow(0 2px 8px rgba(139, 92, 246, 0.15))' }}
    >
      <div className="flex border-b border-[#52288C]/40">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`px-4 py-2.5 text-sm font-semibold transition-colors ${
              active === i
                ? 'bg-violet-500/15 text-violet-400'
                : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4">{tabs[active]?.content}</div>
    </div>
  )
}
