'use client'

import { useState, useEffect } from 'react'

const P = 14
const W = 18
const H = 22

const C: Record<string, string> = {
  h: '#1a1a2e',
  H: '#2d2b55',
  L: '#423e78',
  s: '#fad5a6',
  S: '#e4b888',
  D: '#d4a070',
  e: '#1a1a2e',
  w: '#ffffff',
  i: '#5577cc',
  m: '#e08870',
  p: '#4f46e5',
  P: '#3730a3',
  Q: '#6366f1',
  g: '#4b5563',
  G: '#818cf8',
  b: '#374151',
}

type Px = [number, number, number, number, string]

const HAIR: Px[] = [
  [5, 0, 8, 1, 'H'],
  [4, 1, 10, 1, 'L'],
  [3, 2, 12, 1, 'L'],
  [3, 3, 12, 1, 'H'],
  [3, 4, 3, 1, 'h'],
  [7, 4, 2, 1, 'H'],
  [10, 4, 1, 1, 'h'],
  [12, 4, 3, 1, 'h'],
  [6, 4, 1, 1, 'L'],
  [9, 4, 1, 1, 'L'],
  [11, 4, 1, 1, 'L'],
  [3, 5, 1, 5, 'h'],
  [14, 5, 1, 5, 'h'],
  [2, 4, 1, 3, 'h'],
  [15, 4, 1, 3, 'h'],
]

const HEADPHONE: Px[] = [
  [1, 5, 1, 5, 'g'],
  [16, 5, 1, 5, 'g'],
  [0, 6, 1, 4, 'g'],
  [17, 6, 1, 4, 'g'],
  [0, 7, 1, 2, 'G'],
  [17, 7, 1, 2, 'G'],
  [1, 6, 1, 3, 'G'],
  [16, 6, 1, 3, 'G'],
  [2, 4, 1, 1, 'b'],
  [15, 4, 1, 1, 'b'],
]

const FACE: Px[] = [
  [4, 5, 10, 1, 's'],
  [4, 6, 10, 1, 's'],
  [4, 7, 10, 1, 's'],
  [4, 8, 10, 1, 's'],
  [4, 9, 10, 1, 's'],
  [5, 10, 8, 1, 's'],
  [5, 11, 8, 1, 'S'],
  [6, 12, 6, 1, 'D'],
]

const EYES_OPEN: Px[] = [
  [5, 7, 1, 1, 'w'],
  [6, 7, 1, 1, 'i'],
  [7, 7, 1, 1, 'i'],
  [5, 8, 1, 1, 'i'],
  [6, 8, 1, 1, 'i'],
  [7, 8, 1, 1, 'e'],
  [10, 7, 1, 1, 'i'],
  [11, 7, 1, 1, 'i'],
  [12, 7, 1, 1, 'w'],
  [10, 8, 1, 1, 'e'],
  [11, 8, 1, 1, 'i'],
  [12, 8, 1, 1, 'i'],
]

const EYES_CLOSED: Px[] = [
  [5, 8, 3, 1, 'e'],
  [10, 8, 3, 1, 'e'],
]

const MOUTH: Px[] = [
  [8, 10, 2, 1, 'm'],
]

const BLUSH: Px[] = [
  [4, 9, 1, 1, 'S'],
  [13, 9, 1, 1, 'S'],
]

const NECK: Px[] = [
  [7, 13, 4, 1, 'S'],
]

const BODY: Px[] = [
  [5, 14, 8, 1, 'p'],
  [4, 15, 10, 1, 'p'],
  [3, 16, 12, 1, 'p'],
  [3, 17, 12, 1, 'p'],
  [3, 18, 12, 1, 'p'],
  [4, 19, 10, 1, 'p'],
  [4, 20, 4, 1, 'p'],
  [10, 20, 4, 1, 'p'],
  [5, 21, 3, 1, 'P'],
  [10, 21, 3, 1, 'P'],
  [5, 16, 2, 2, 'P'],
  [11, 16, 2, 2, 'P'],
  [2, 16, 1, 4, 'p'],
  [15, 16, 1, 4, 'p'],
  [1, 17, 1, 3, 'P'],
  [16, 17, 1, 3, 'P'],
  [1, 20, 1, 1, 's'],
  [16, 20, 1, 1, 's'],
  [2, 20, 1, 1, 's'],
  [15, 20, 1, 1, 's'],
]

const HOODIE_DETAIL: Px[] = [
  [8, 15, 2, 1, 'Q'],
  [7, 16, 1, 3, 'Q'],
  [10, 16, 1, 3, 'Q'],
  [8, 15, 1, 1, 'Q'],
  [9, 15, 1, 1, 'Q'],
]

function renderPixels(pixels: Px[]) {
  return pixels.map(([x, y, w, h, c], i) => (
    <rect key={`${x}-${y}-${i}`} x={x * P} y={y * P} width={w * P} height={h * P} fill={C[c]} />
  ))
}

export default function PixelAvatar({ className = '' }: { className?: string }) {
  const [blinking, setBlinking] = useState(false)

  useEffect(() => {
    const blink = () => {
      setBlinking(true)
      setTimeout(() => setBlinking(false), 120)
    }
    const interval = setInterval(() => {
      blink()
      if (Math.random() > 0.6) setTimeout(blink, 250)
    }, 3500 + Math.random() * 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <svg
      viewBox={`0 0 ${W * P} ${H * P}`}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ imageRendering: 'pixelated' }}
    >
      {renderPixels(BODY)}
      {renderPixels(HOODIE_DETAIL)}
      {renderPixels(NECK)}
      {renderPixels(FACE)}
      {renderPixels(BLUSH)}
      {renderPixels(HAIR)}
      {renderPixels(HEADPHONE)}
      {renderPixels(blinking ? EYES_CLOSED : EYES_OPEN)}
      {renderPixels(MOUTH)}
    </svg>
  )
}
