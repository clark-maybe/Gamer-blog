// app/api/views/[...slug]/route.ts
import { createClient } from '@/lib/server'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function POST(req: Request, { params }: { params: Promise<{ slug: string[] }> }) {
  try {
    const resolvedParams = await params
    const slug = resolvedParams.slug.join('/')
    const supabase = await createClient()

    const { data, error } = await supabase.rpc('increment_view', {
      page_slug: slug,
    })

    if (error) {
      console.error('Supabase RPC error:', error.message)
      return NextResponse.json({ count: 1, error: error.message })
    }

    return NextResponse.json({ count: data })
  } catch (e) {
    console.error('API route error:', e instanceof Error ? e.message : 'Unknown error')
    return NextResponse.json({ count: 0, error: 'Internal server error' })
  }
}
