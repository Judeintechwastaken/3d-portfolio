import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const url = process.env.N8N_WEBHOOK_URL
  if (!url) return NextResponse.json({ error: 'Not configured' }, { status: 500 })
  let body: { name?: string; email?: string; message?: string }
  try { body = await req.json() } catch { return NextResponse.json({ error: 'Bad request' }, { status: 400 }) }
  const { name, email, message } = body
  if (!name || !email || !message || message.length > 2000) return NextResponse.json({ error: 'Invalid' }, { status: 400 })
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, message, source: 'portfolio-site', submittedAt: new Date().toISOString() })
  })
  return NextResponse.json({ ok: res.ok }, { status: res.ok ? 200 : 502 })
}