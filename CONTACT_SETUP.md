# Contact Form Setup Guide

This guide will help you set up the contact form with email functionality and reCAPTCHA protection.

## Features Implemented

✅ **Email Service Integration**: Uses the provided EzInnovations email credentials
✅ **reCAPTCHA Protection**: Prevents spam submissions
✅ **Professional Email Template**: HTML-formatted emails sent to ahvashen6@gmail.com
✅ **Error Handling**: User-friendly error messages
✅ **Loading States**: Visual feedback during form submission
✅ **Form Validation**: Required field validation

## Setup Instructions

### 1. reCAPTCHA Configuration

1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Create a new site with the following settings:
   - **Label**: EzInnovations Contact Form
   - **reCAPTCHA type**: reCAPTCHA v2 ("I'm not a robot" Checkbox)
   - **Domains**: Add your domain (e.g., `ezinnovations.co.za`, `localhost` for development)
3. Copy the **Site Key** and **Secret Key**

### 2. Environment Variables

Create a `.env.local` file in the project root with the following variables:

```env
# reCAPTCHA Configuration
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key_here
RECAPTCHA_SECRET_KEY=your_secret_key_here
```

### 3. Email Configuration

The email service is already configured with the provided credentials:
- **SMTP Server**: smtp.office365.com
- **Port**: 587
- **From**: do-not-reply@ezinnovations.co.za
- **To**: ahvashen6@gmail.com

### 4. Testing

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Navigate to the contact section and test the form
3. Check that emails are received at ahvashen6@gmail.com

## Email Template

The contact form sends professional HTML emails with:
- Contact information (name, email, company)
- Message content
- Timestamp
- EzInnovations branding

## Security Features

- **reCAPTCHA Verification**: Prevents automated spam
- **Server-side Validation**: Validates all form data
- **Rate Limiting**: Built-in retry mechanism for email sending
- **Error Handling**: Secure error messages without exposing sensitive data

## Troubleshooting

### reCAPTCHA Issues
- Ensure the domain is correctly added in reCAPTCHA admin
- Check that environment variables are properly set
- Verify the site key matches the domain

### Email Issues
- Check SMTP credentials
- Verify network connectivity
- Check server logs for detailed error messages

### Form Not Submitting
- Ensure all required fields are filled
- Complete the reCAPTCHA verification
- Check browser console for JavaScript errors

## Dependencies Added

- `nodemailer`: Email sending functionality
- `@types/nodemailer`: TypeScript types
- `react-google-recaptcha`: reCAPTCHA integration

## API Endpoint

The contact form submits to `/api/contact` with the following payload:
```json
{
  "name": "string",
  "email": "string", 
  "company": "string",
  "message": "string",
  "recaptchaToken": "string"
}
```

## Production Deployment

1. Set up environment variables in your hosting platform
2. Ensure the domain is added to reCAPTCHA configuration
3. Test the contact form thoroughly before going live
4. Monitor email delivery and form submissions
