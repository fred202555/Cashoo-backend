// 📊 CASHOO Dashboard API - Vercel Serverless

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    try {
      console.log('📊 Dashboard data requested');

      // Simulation délai réaliste
      await new Promise(resolve => setTimeout(resolve, 800));

      // Données dashboard ultra-réalistes
      const dashboardData = {
        success: true,
        user: {
          name: 'Alex Chen',
          avatar: '👤',
          memberSince: '2023'
        },
        financials: {
          currentBalance: 4285.67,
          availableMoney: 1851.23,
          dailyBudget: 62.18,
          monthlyIncome: 5400.00,
          monthlyExpenses: 3548.44
        },
        progress90Days: {
          percentage: 76,
          trend: 'positive',
          message: '+12% vs mois précédent'
        },
        categories: [
          { name: 'Housing', amount: 1200, percentage: 35, emoji: '🏠', color: '#FF6B6B' },
          { name: 'Food', amount: 650, percentage: 18, emoji: '🍽️', color: '#4ECDC4' },
          { name: 'Transport', amount: 420, percentage: 12, emoji: '🚗', color: '#45B7D1' },
          { name: 'Entertainment', amount: 380, percentage: 11, emoji: '🎯', color: '#96CEB4' },
          { name: 'Shopping', amount: 320, percentage: 9, emoji: '🛍️', color: '#FFEAA7' },
          { name: 'Bills & Utilities', amount: 280, percentage: 8, emoji: '⚡', color: '#DDA0DD' },
          { name: 'Healthcare', amount: 180, percentage: 5, emoji: '🏥', color: '#98D8C8' },
          { name: 'Other', amount: 118, percentage: 2, emoji: '📋', color: '#F7DC6F' }
        ],
        recentTransactions: [
          { id: 1, description: 'Grocery Store', amount: -89.32, category: 'Food', date: 'Today', emoji: '🛒' },
          { id: 2, description: 'Salary Deposit', amount: 2700.00, category: 'Income', date: 'Today', emoji: '💰' },
          { id: 3, description: 'Netflix Subscription', amount: -15.99, category: 'Entertainment', date: 'Yesterday', emoji: '🎬' },
          { id: 4, description: 'Gas Station', amount: -52.45, category: 'Transport', date: '2 days ago', emoji: '⛽' },
          { id: 5, description: 'Amazon Purchase', amount: -127.89, category: 'Shopping', date: '3 days ago', emoji: '📦' }
        ],
        insights: [
          {
            type: 'success',
            title: 'Great Job!',
            message: 'You\'ve reduced restaurant spending by 23% this month',
            emoji: '🎉',
            color: 'green'
          },
          {
            type: 'warning',
            title: 'Watch Out',
            message: 'Transportation costs increased 18% vs last month',
            emoji: '⚠️',
            color: 'orange'
          },
          {
            type: 'tip',
            title: 'Pro Tip',
            message: 'Consider setting up automatic transfers to boost your savings',
            emoji: '💡',
            color: 'blue'
          }
        ],
        goals: [
          {
            id: 1,
            name: 'Emergency Fund',
            current: 2100,
            target: 5000,
            percentage: 42,
            emoji: '🏥',
            color: '#FF6B6B'
          },
          {
            id: 2,
            name: 'Vacation Fund',
            current: 850,
            target: 3000,
            percentage: 28,
            emoji: '✈️',
            color: '#4ECDC4'
          },
          {
            id: 3,
            name: 'New Car',
            current: 1200,
            target: 8000,
            percentage: 15,
            emoji: '🚗',
            color: '#45B7D1'
          }
        ],
        analytics: {
          monthlyTrends: [
            { month: 'Jan', income: 5200, expenses: 3800, savings: 1400 },
            { month: 'Feb', income: 5400, expenses: 3600, savings: 1800 },
            { month: 'Mar', income: 5400, expenses: 3548, savings: 1852 }
          ],
          predictions: {
            nextMonthSavings: 1950,
            confidenceLevel: 87,
            recommendation: 'On track to exceed savings goal by 12%'
          }
        },
        timestamp: new Date().toISOString()
      };

      res.status(200).json(dashboardData);

    } catch (error) {
      console.error('Dashboard error:', error);
      res.status(500).json({
        success: false,
        error: 'Erreur lors de la récupération des données'
      });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}