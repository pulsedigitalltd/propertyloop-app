import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, company, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // Prepare email content
    const emailContent = {
      to: 'damian.rosewarne@gmail.com',
      from: email,
      subject: `PropertyLoop Contact Form: ${subject}`,
      body: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        Company: ${company || 'Not provided'}
        Subject: ${subject}
        
        Message:
        ${message}
        
        ---
        This message was sent from the PropertyLoop contact form.
      `
    };

    // Send email using Resend (recommended)
    // Install: npm install resend
    // Uncomment and configure when ready:
    
    
/*     const { Resend } = require('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'PropertyLoop <onboarding@resend.dev>',
      to: 'damian.rosewarne@gmail.com',
      replyTo: email,
      subject: `PropertyLoop Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>This message was sent from the PropertyLoop contact form.</em></p>
      `
    });
     */

    // Alternative: Use Nodemailer with Gmail
    // Uncomment and configure when ready:
    
    /*
    const nodemailer = require('nodemailer');
    
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD // Use App Password for Gmail
      }
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'damian.rosewarne@gmail.com',
      replyTo: email,
      subject: `PropertyLoop Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>This message was sent from the PropertyLoop contact form.</em></p>
      `
    });
    */

    // For now, just log the submission (remove this in production)
    console.log('Contact form submission:', emailContent);

    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}

