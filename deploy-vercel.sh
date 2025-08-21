#!/bin/bash

# Vercel Deployment Script for GLEC AI DTG Website
# Usage: ./deploy-vercel.sh YOUR_VERCEL_TOKEN

if [ -z "$1" ]; then
    echo "❌ Error: Vercel token is required"
    echo "Usage: ./deploy-vercel.sh YOUR_VERCEL_TOKEN"
    echo ""
    echo "To get your token:"
    echo "1. Go to https://vercel.com/account/tokens"
    echo "2. Create a new token"
    echo "3. Run: ./deploy-vercel.sh YOUR_TOKEN_HERE"
    exit 1
fi

VERCEL_TOKEN=$1

echo "🚀 Starting Vercel deployment..."
echo "📦 Project: GLEC AI DTG Website"
echo "📂 Directory: $(pwd)"
echo ""

# Deploy to production
npx vercel --prod --yes --token "$VERCEL_TOKEN" \
    --name "ai-dtg-production" \
    --build-env NODE_ENV=production \
    --regions icn1,sin1,hnd1

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Deployment successful!"
    echo ""
    echo "🌐 Your website is now live!"
    echo "Check the URLs above for:"
    echo "   - Production URL"
    echo "   - Preview URL"
    echo ""
    echo "📱 Multi-language URLs:"
    echo "   - English: [your-url]/"
    echo "   - Korean: [your-url]/ko"
    echo "   - Chinese: [your-url]/zh"
else
    echo ""
    echo "❌ Deployment failed. Please check your token and try again."
fi