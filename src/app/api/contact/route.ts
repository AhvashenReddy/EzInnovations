import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, message, recaptchaToken, validateOnly } = await request.json()

    // Validate required fields (skip for validation-only requests)
    if (!validateOnly && (!name || !email || !message)) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Verify reCAPTCHA token
    if (!recaptchaToken) {
      return NextResponse.json(
        { error: 'reCAPTCHA verification required' },
        { status: 400 }
      )
    }

    // Verify reCAPTCHA with Google
    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY
    if (!recaptchaSecret) {
      return NextResponse.json(
        { error: 'reCAPTCHA configuration missing' },
        { status: 500 }
      )
    }

    const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${recaptchaSecret}&response=${recaptchaToken}`,
    })

    const recaptchaData = await recaptchaResponse.json()
    if (!recaptchaData.success) {
      return NextResponse.json(
        { error: 'reCAPTCHA verification failed' },
        { status: 400 }
      )
    }

    // If this is a validation-only request, return success
    if (validateOnly) {
      return NextResponse.json(
        { message: 'reCAPTCHA validation successful' },
        { status: 200 }
      )
    }

    // Create email transporter using the provided credentials
    const transporter = nodemailer.createTransport({
      host: 'smtp.office365.com',
      port: 587,
      secure: false,
      auth: {
        user: 'do-not-reply@ezinnovations.co.za',
        pass: '$houanSai',
      },
    })

    // Email content
    const subject = `New Contact Form Submission from ${name}`
    const htmlBody = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>New Contact Form Submission</title>
      </head>
      <body style="margin: 0; padding: 20px; font-family: Arial, sans-serif; background-color: #f8f9fa;">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto;">
          <tr>
            <td style="background-color: #ffffff; border-radius: 8px; padding: 40px; text-align: left;">
              
              <!-- Header -->
              <div style="text-align: center; margin-bottom: 30px;">
                <h1 style="color: #0d9488; font-size: 24px; font-weight: bold; margin: 0;">New Contact Form Submission</h1>
                <p style="color: #6c757d; font-size: 16px; margin: 10px 0 0 0;">Ez Innovations Website</p>
              </div>
              
              <!-- Contact Details -->
              <div style="background-color: #f8f9fa; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
                <h2 style="color: #495057; font-size: 18px; margin: 0 0 15px 0;">Contact Information</h2>
                <p style="color: #6c757d; font-size: 14px; margin: 5px 0;"><strong>Name:</strong> ${name}</p>
                <p style="color: #6c757d; font-size: 14px; margin: 5px 0;"><strong>Email:</strong> ${email}</p>
                <p style="color: #6c757d; font-size: 14px; margin: 5px 0;"><strong>Company:</strong> ${company || 'Not provided'}</p>
              </div>
              
              <!-- Message -->
              <div style="margin-bottom: 20px;">
                <h2 style="color: #495057; font-size: 18px; margin: 0 0 15px 0;">Message</h2>
                <div style="background-color: #ffffff; border: 1px solid #e9ecef; padding: 15px; border-radius: 6px;">
                  <p style="color: #495057; font-size: 14px; margin: 0; line-height: 1.5; white-space: pre-wrap;">${message}</p>
                </div>
              </div>
              
              <!-- Footer -->
              <div style="border-top: 1px solid #e9ecef; padding-top: 20px; text-align: center;">
                <p style="color: #6c757d; font-size: 12px; margin: 0;">
                  This message was sent from the Ez Innovations contact form on ${new Date().toLocaleString('en-ZA', { timeZone: 'Africa/Johannesburg' })}.
                </p>
              </div>
              
            </td>
          </tr>
        </table>
      </body>
      </html>
    `

    // Send email
    await transporter.sendMail({
      from: 'do-not-reply@ezinnovations.co.za',
      to: 'ahvashen6@gmail.com',
      subject: subject,
      html: htmlBody,
    })

    return NextResponse.json(
      { message: 'Contact form submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send contact form' },
      { status: 500 }
    )
  }
}
