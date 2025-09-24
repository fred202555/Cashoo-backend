// ✅ CASHOO Health Check API - Vercel Serverless

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    const healthData = {
      status: 'OK',
      service: 'CASHOO Backend v1',
      environment: 'Vercel Serverless',
      version: '1.0.0',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      endpoints: {
        auth: '/api/auth - POST - Authentification standard',
        biometric: '/api/biometric - POST - Authentification biométrique',
        dashboard: '/api/dashboard - GET - Données dashboard',
        health: '/api/health - GET - Status serveur'
      },
      features: [
        '🔐 Authentification double (standard + biométrique)',
        '📊 Dashboard temps réel avec analytics',
        '💰 Données financières simulées réalistes',
        '🎯 Objectifs et insights IA',
        '📱 API optimisée Vercel serverless'
      ],
      performance: {
        region: process.env.VERCEL_REGION || 'unknown',
        memory: `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)}MB`,
        nodeVersion: process.version
      }
    };

    res.status(200).json(healthData);
  } else {
    res.status(405).json({ 
      error: 'Method not allowed',
      allowed: ['GET', 'OPTIONS']
    });
  }
}