// Vercel Serverless Function for Newsletter Subscription
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
    const { email, language = 'en', interests = [] } = req.body;

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return res.status(400).json({ error: 'Valid email required' });
    }

    // Log subscription (in production, save to database or email service)
    console.log('Newsletter Subscription:', {
      email,
      language,
      interests,
      timestamp: new Date().toISOString(),
      ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress
    });

    // In production, integrate with email marketing service
    // Example integrations:
    // - Mailchimp
    // - SendGrid Marketing Campaigns
    // - ConvertKit
    // - Klaviyo

    // Success response based on language
    const responses = {
      en: 'Successfully subscribed to newsletter!',
      ko: '뉴스레터 구독이 완료되었습니다!',
      zh: '成功订阅新闻通讯！'
    };

    return res.status(200).json({
      success: true,
      message: responses[language] || responses.en,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return res.status(500).json({
      error: 'Internal server error',
      message: 'Failed to process subscription'
    });
  }
}