# Email Setup Guide for Contact Form

The contact form is configured to send emails to **damian.rosewarne@gmail.com**. Follow one of the options below to enable email functionality.

## Option 1: Resend (Recommended - Easiest Setup)

Resend is a modern email API designed for developers. It's fast, reliable, and easy to set up.

### Setup Steps:

1. **Install Resend:**
   ```bash
   npm install resend
   ```

2. **Get API Key:**
   - Sign up at [resend.com](https://resend.com)
   - Get your API key from the dashboard

3. **Add Environment Variable:**
   Create a `.env.local` file in the root directory:
   ```env
   RESEND_API_KEY=your_api_key_here
   ```

4. **Uncomment the Resend Code:**
   Open `app/api/contact/route.ts` and uncomment the Resend section (lines ~30-50)

5. **Update the 'from' email:**
   - Verify your domain in Resend dashboard
   - Update the `from` field to use your verified domain:
     ```typescript
     from: 'PropertyLoop <contact@yourdomain.com>'
     ```

### Pricing:
- **Free tier:** 3,000 emails/month
- **Pro:** $20/month for 50,000 emails

---

## Option 2: Nodemailer with Gmail

Use Gmail to send emails directly (good for development/testing).

### Setup Steps:

1. **Install Nodemailer:**
   ```bash
   npm install nodemailer
   npm install --save-dev @types/nodemailer
   ```

2. **Enable 2-Factor Authentication on Gmail:**
   - Go to Google Account settings
   - Security → 2-Step Verification → Enable

3. **Generate App Password:**
   - Google Account → Security → 2-Step Verification → App passwords
   - Select "Mail" and "Other (Custom name)"
   - Copy the 16-character password

4. **Add Environment Variables:**
   Create/update `.env.local`:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-16-char-app-password
   ```

5. **Uncomment the Nodemailer Code:**
   Open `app/api/contact/route.ts` and uncomment the Nodemailer section (lines ~52-75)

### Limitations:
- Gmail has a daily limit of ~500 emails
- Best for development/testing, not production at scale

---

## Option 3: SendGrid

Enterprise-grade email service with high deliverability.

### Setup Steps:

1. **Install SendGrid:**
   ```bash
   npm install @sendgrid/mail
   ```

2. **Get API Key:**
   - Sign up at [sendgrid.com](https://sendgrid.com)
   - Create an API key in Settings → API Keys

3. **Add Environment Variable:**
   ```env
   SENDGRID_API_KEY=your_api_key_here
   ```

4. **Add SendGrid Code to route.ts:**
   ```typescript
   const sgMail = require('@sendgrid/mail');
   sgMail.setApiKey(process.env.SENDGRID_API_KEY);

   await sgMail.send({
     to: 'damian.rosewarne@gmail.com',
     from: 'verified-sender@yourdomain.com', // Must be verified in SendGrid
     replyTo: email,
     subject: `PropertyLoop Contact Form: ${subject}`,
     html: `<!-- Your HTML template -->`
   });
   ```

### Pricing:
- **Free tier:** 100 emails/day
- **Essentials:** $19.95/month for 50,000 emails

---

## Testing Locally

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to `/contact` page

3. Fill out and submit the form

4. Check the console logs to see the form data (current default behavior)

5. Once email service is configured, check your inbox at damian.rosewarne@gmail.com

---

## Production Deployment (Azure Static Web Apps)

### Environment Variables:

1. In Azure Portal, go to your Static Web App
2. Navigate to Configuration → Application settings
3. Add your environment variable:
   - For Resend: `RESEND_API_KEY`
   - For Gmail: `EMAIL_USER` and `EMAIL_PASSWORD`
   - For SendGrid: `SENDGRID_API_KEY`

### Note:
The API route will work automatically in Azure Static Web Apps as it uses Next.js serverless functions.

---

## Troubleshooting

### Email not sending:
1. Check environment variables are set correctly
2. Verify API keys are valid
3. Check console logs for error messages
4. Ensure 'from' email is verified with your email service

### Gmail blocking sign-in:
1. Enable 2-Factor Authentication
2. Use App Password instead of regular password
3. Check "Less secure app access" is NOT needed with App Password

### Resend errors:
1. Verify your domain in Resend dashboard
2. Update the `from` field to use verified domain
3. Check API key has proper permissions

---

## Current Status

✅ Contact form UI is complete and fully functional  
✅ Form validation is working  
✅ API route is set up at `/api/contact`  
⏳ **Email service needs to be configured** (choose one option above)  

The form currently logs submissions to the console. Uncomment one of the email service options in `app/api/contact/route.ts` to enable actual email sending.

