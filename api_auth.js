// 🔐 CASHOO Auth API - Vercel Serverless
const jwt = require('jsonwebtoken');

// Utilisateurs simulés - EN PRODUCTION, utilise une vraie DB
const USERS_DB = [
  { id: 1, email: 'demo@cashoo.app', password: 'demo123', name: 'Demo User', type: 'standard' },
  { id: 2, email: 'bio@cashoo.app', password: 'bio123', name: 'Bio User', type: 'biometric' }
];

const JWT_SECRET = process.env.JWT_SECRET || 'cashoo_ultra_secret_2024';

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    const { email, password, loginType = 'standard' } = req.body;

    try {
      console.log('🔑 Login attempt:', { email, loginType });

      // Simulation délai réaliste
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Trouver utilisateur
      const user = USERS_DB.find(u => u.email === email && u.password === password);
      
      if (!user) {
        return res.status(401).json({
          success: false,
          error: 'Email ou mot de passe incorrect'
        });
      }

      // Générer token JWT
      const token = jwt.sign(
        { 
          userId: user.id, 
          email: user.email,
          type: user.type 
        },
        JWT_SECRET,
        { expiresIn: '24h' }
      );

      // Réponse succès
      res.status(200).json({
        success: true,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          type: user.type,
          avatar: user.type === 'biometric' ? '🔐' : '👤'
        },
        token,
        loginType
      });

    } catch (error) {
      console.error('Auth error:', error);
      res.status(500).json({
        success: false,
        error: 'Erreur serveur'
      });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}