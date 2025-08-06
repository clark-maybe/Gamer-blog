// components/ViewCounter.tsx
'use client'

import { useEffect, useState } from 'react'

export function ViewCounter({ slug }: { slug: string }) {
  const [viewCount, setViewCount] = useState<number | null>(null)

  useEffect(() => {
    const fetchViewCount = async () => {
      try {
        const response = await fetch(`/api/views/${slug}`, {
          method: 'POST',
        })
        const data = await response.json()
        if (typeof data.count === 'number') {
          setViewCount(data.count)
        } else {
          console.warn('Received unexpected data from views API:', data)
          setViewCount(0)
        }
      } catch (error) {
        console.error('Failed to fetch view count:', error)
        setViewCount(0)
      }
    }

    fetchViewCount()
  }, [slug])

  return <span>{viewCount !== null ? `${viewCount.toLocaleString()} views` : '... views'}</span>
}
