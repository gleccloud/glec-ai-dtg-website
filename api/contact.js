// Vercel Serverless Function for Contact Form
export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, company, message, language = 'en' } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ 
        error: 'Required fields missing',
        fields: ['name', 'email', 'message']
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Log contact form submission (in production, send to database or email service)
    console.log('Contact Form Submission:', {
      name,
      email,
      company,
      message,
      language,
      timestamp: new Date().toISOString(),
      ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress
    });

    // In production, integrate with email service like SendGrid, Mailgun, etc.
    // Example:
    // await sendEmail({
    //   to: process.env.CONTACT_EMAIL,
    //   subject: `New Contact from ${name}`,
    //   body: message,
    //   replyTo: email
    // });

    // Success response based on language
    const responses = {
      en: 'Thank you for your message. We will contact you soon.',
      ko: '메시지를 보내주셔서 감사합니다. 곧 연락드리겠습니다.',
      zh: '感谢您的留言。我们会尽快与您联系。'
    };

    return res.status(200).json({
      success: true,
      message: responses[language] || responses.en,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({
      error: 'Internal server error',
      message: 'Failed to process contact form'
    });
  }
}