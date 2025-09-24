// 🔐 CASHOO Biometric API - Vercel Serverless
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'cashoo_ultra_secret_2024';

// Utilisateurs biométriques simulés
const BIO_USERS_DB = [
  { 
    id: 100, 
    biometricId: 'fp_alex_chen_2024', 
    name: 'Alex Chen', 
    email: 'alex@cashoo.app',
    type: 'biometric',
    securityLevel: 'military-grade'
  },
  { 
    id: 101, 
    biometricId: 'fp_sarah_kim_2024', 
    name: 'Sarah Kim', 
    email: 'sarah@cashoo.app',
    type: 'biometric',
    securityLevel: 'military-grade'
  }
];

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    const { action, biometricData, stage } = req.body;

    try {
      console.log('🔐 Biometric request:', { action, stage });

      if (action === 'scan') {
        // Simulation des étapes de scan biométrique
        const stages = [
          { stage: 'initializing', message: 'Initializing scanner...', progress: 15 },
          { stage: 'scanning', message: 'Scanning fingerprint...', progress: 45 },
          { stage: 'analyzing', message: 'Analyzing patterns...', progress: 75 },
          { stage: 'verifying', message: 'Verifying identity...', progress: 95 },
          { stage: 'complete', message: 'Authentication successful!', progress: 100 }
        ];

        // Simulation temps réaliste pour chaque étape
        const delays = { initializing: 800, scanning: 1200, analyzing: 1000, verifying: 800, complete: 500 };
        await new Promise(resolve => setTimeout(resolve, delays[stage] || 800));

        const currentStage = stages.find(s => s.stage === stage) || stages[0];

        if (stage === 'complete') {
          // Authentification réussie - générer token
          const user = BIO_USERS_DB[0]; // Premier utilisateur par défaut

          const token = jwt.sign(
            { 
              userId: user.id, 
              email: user.email,
              type: user.type,
              securityLevel: user.securityLevel
            },
            JWT_SECRET,
            { expiresIn: '24h' }
          );

          return res.status(200).json({
            success: true,
            stage: 'complete',
            progress: 100,
            message: 'Authentication successful!',
            user: {
              id: user.id,
              name: user.name,
              email: user.email,
              type: user.type,
              avatar: '🔐',
              securityLevel: user.securityLevel
            },
            token,
            biometricAuth: true
          });
        } else {
          // Étapes intermédiaires
          return res.status(200).json({
            success: true,
            stage: currentStage.stage,
            progress: currentStage.progress,
            message: currentStage.message,
            nextStage: stages[stages.findIndex(s => s.stage === stage) + 1]?.stage || 'complete'
          });
        }
      }

      // Action non reconnue
      res.status(400).json({
        success: false,
        error: 'Action biométrique non reconnue'
      });

    } catch (error) {
      console.error('Biometric error:', error);
      res.status(500).json({
        success: false,
        error: 'Erreur d\'authentification biométrique'
      });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}