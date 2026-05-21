'use client'

import { motion, Variants } from 'framer-motion'

interface TimelineStep {
  title: string
  description: string
  icon?: string
  status?: 'success' | 'error' | 'warning' | 'info'
}

interface TimelineProps {
  steps: TimelineStep[]
  title?: string
}

const statusColors: Record<string, { dot: string; border: string }> = {
  success: { dot: 'bg-emerald-500', border: 'border-emerald-500/30' },
  error: { dot: 'bg-red-500', border: 'border-red-500/30' },
  warning: { dot: 'bg-amber-500', border: 'border-amber-500/30' },
  info: { dot: 'bg-blue-500', border: 'border-blue-500/30' },
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

export default function Timeline({ steps, title }: TimelineProps) {
  return (
    <div className="my-8">
      {title && (
        <h4 className="mb-4 text-base font-bold text-gray-800 dark:text-gray-200">{title}</h4>
      )}
      <motion.div
        className="relative ml-4 border-l-2 border-gray-300 pl-6 dark:border-gray-600"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {steps.map((step, i) => {
          const colors = statusColors[step.status || 'info']
          return (
            <motion.div
              key={i}
              className="relative mb-6 last:mb-0"
              variants={itemVariants}
            >
              <div
                className={`absolute -left-[31px] flex h-5 w-5 items-center justify-center rounded-full ${colors.dot} text-xs font-bold text-white ring-4 ring-white dark:ring-gray-950`}
              >
                {step.icon || i + 1}
              </div>
              <div className={`rounded-lg border ${colors.border} bg-gray-50 px-4 py-3 dark:bg-gray-900`}>
                <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                  {step.title}
                </div>
                <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  {step.description}
                </div>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}
