import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export const runtime = 'nodejs'

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (char) => {
    const map: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    }
    return map[char] || char
  })

export async function POST(request: Request) {
  let payload: {
    name?: string
    email?: string
    phone?: string
    company?: string
    question?: string
    locale?: string
  } | null = null
  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON payload.' }, { status: 400 })
  }

  const name = String(payload?.name || '').trim()
  const email = String(payload?.email || '').trim()
  const phone = String(payload?.phone || '').trim()
  const company = String(payload?.company || '').trim()
  const question = String(payload?.question || '').trim()
  const locale = String(payload?.locale || 'ru').toLowerCase()

  if (!name || !phone || !question) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
  }

  const host = process.env.SMTP_HOST
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
  const port = Number(process.env.SMTP_PORT || 587)
  const secure = process.env.SMTP_SECURE === 'true' || port === 465
  const recipient = process.env.CONTACT_RECIPIENT || 'prix@prixclub.ru'
  const from = process.env.SMTP_FROM || user

  if (!host || !user || !pass || !from) {
    return NextResponse.json({ error: 'Email delivery is not configured.' }, { status: 500 })
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
  })

  const subject =
    locale === 'en' ? 'Consultation request from PRIX Club' : 'Заявка на консультацию с сайта PRIX Club'
  const safeName = escapeHtml(name)
  const safePhone = escapeHtml(phone)
  const safeQuestion = escapeHtml(question)
  const textParts = [
    `Имя: ${name}`,
    email ? `Email: ${email}` : null,
    `Телефон: ${phone}`,
    company ? `Компания: ${company}` : null,
    `Вопрос: ${question}`,
  ].filter(Boolean)
  const textBody = textParts.join('\n') + '\n'
  const htmlBody = `
    <h2>Новая заявка на консультацию</h2>
    <p><strong>Имя:</strong> ${safeName}</p>
    ${email ? `<p><strong>Email:</strong> ${escapeHtml(email)}</p>` : ''}
    <p><strong>Телефон:</strong> ${safePhone}</p>
    ${company ? `<p><strong>Компания:</strong> ${escapeHtml(company)}</p>` : ''}
    <p><strong>Вопрос:</strong><br/>${safeQuestion.replace(/\n/g, '<br/>')}</p>
  `

  try {
    await transporter.sendMail({
      from,
      to: recipient,
      subject,
      text: textBody,
      html: htmlBody,
    })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
