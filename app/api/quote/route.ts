// file: app/api/quote/route.ts
import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json(
    { error: 'Quote API is not configured yet' },
    { status: 503 }
  )
}
