// file: app/api/image/route.ts
import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json(
    { error: 'Image API is not configured yet' },
    { status: 503 }
  )
}
