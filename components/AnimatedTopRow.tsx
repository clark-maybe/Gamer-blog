// components/AnimatedTopRow.tsx
'use client'
import React, { useEffect, useRef, useState } from 'react'
import { motion, MotionProps, Variants } from 'framer-motion'
import type { SVGProps } from 'react'

type AnimatedTopRowProps = {
  duration?: number
  stagger?: number
  strokeWidth?: number
} & MotionProps &
  Omit<SVGProps<SVGSVGElement>, keyof MotionProps>

export function AnimatedTopRow({
  duration = 2.5,
  stagger = 0.08,
  strokeWidth = 2,
  ...props
}: AnimatedTopRowProps) {
  const textRef = useRef<SVGTextElement>(null)
  const [totalLength, setTotalLength] = useState(2400)

  useEffect(() => {
    if (textRef.current) {
      const len = textRef.current.getComputedTextLength()
      setTotalLength(len * 3.5)
    }
  }, [])

  const strokeVariants: Variants = {
    hidden: { strokeDashoffset: totalLength },
    visible: {
      strokeDashoffset: 0,
      transition: { duration, ease: 'easeInOut' },
    },
  }

  const fillVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: duration * 1.2, duration: 0.6 } },
  }

  const textProps = {
    x: '8',
    y: '86',
    fontSize: '104',
    fontWeight: '900' as const,
    fontFamily: "'Arial Black', 'Impact', 'Helvetica Neue', sans-serif",
    letterSpacing: '1',
  }

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 110"
      preserveAspectRatio="xMinYMid meet"
      initial="hidden"
      animate="visible"
      {...props}
    >
      <motion.text
        ref={textRef}
        {...textProps}
        fill="currentColor"
        variants={fillVariants}
      >
        CLARK&apos;S
      </motion.text>

      <motion.text
        {...textProps}
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={totalLength}
        variants={strokeVariants}
      >
        CLARK&apos;S
      </motion.text>
    </motion.svg>
  )
}
