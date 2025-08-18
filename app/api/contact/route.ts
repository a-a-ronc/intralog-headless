import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const form = await req.formData()
    const name = String(form.get('name') || '')
    const email = String(form.get('email') || '')
    const company = String(form.get('company') || '')
    const message = String(form.get('message') || '')

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: String(process.env.SMTP_SECURE || 'true') === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    })

    const info = await transporter.sendMail({
      from: process.env.CONTACT_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_TO || process.env.SMTP_USER,
      subject: `Website Contact — ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\n${message}`
    })

    return NextResponse.json({ ok: true, id: info.messageId })
  } catch (e: any) {
    console.error(e)
    return NextResponse.json({ ok: false, error: e?.message || 'Error' }, { status: 500 })
  }
}
