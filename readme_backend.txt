# 🚀 CASHOO Backend v1 - Vercel Serverless

Backend ultra-rapide pour l'application CASHOO avec authentification biométrique et dashboard financier.

## 🌟 Fonctionnalités

- 🔐 **Double Authentification**: Standard + Biométrique
- 📊 **Dashboard Temps Réel**: Analytics financières complètes  
- 💰 **Données Réalistes**: Transactions, catégories, objectifs
- 🎯 **Insights IA**: Conseils personnalisés et prédictions
- ⚡ **Performance**: Déploiement Vercel serverless optimisé

## 🛠️ APIs Disponibles

### Authentification Standard
```bash
POST /api/auth
Content-Type: application/json

{
  "email": "demo@cashoo.app",
  "password": "demo123",
  "loginType": "standard"
}
```

### Authentification Biométrique
```bash
POST /api/biometric
Content-Type: application/json

{
  "action": "scan",
  "stage": "initializing"
}
```

### Dashboard Données
```bash
GET /api/dashboard
```

### Health Check
```bash
GET /api/health
```

## 🔧 Déploiement Vercel

1. **Fork ce repository**
2. **Connecter à Vercel**: [vercel.com](https://vercel.com)
3. **Import depuis GitHub**
4. **Deploy automatique!**

Votre API sera disponible sur: `https://votre-projet.vercel.app`

## 📱 Frontend Compatible

Ce backend fonctionne parfaitement avec le frontend CASHOO React:
- Dashboard multi-vues
- Authentification biométrique animée
- Design glassmorphism premium
- Responsive mobile/desktop

## 🔐 Variables d'Environnement

Optionnelles pour la v1 (valeurs par défaut incluses):

```env
JWT_SECRET=cashoo_ultra_secret_2024
NODE_ENV=production
```

## 📊 Données Simulées

### Utilisateurs Test
- **Standard**: `demo@cashoo.app` / `demo123`
- **Biométrique**: Scanner simulé (5 étapes)

### Dashboard Inclut
- Solde actuel: $4,285.67
- Argent disponible: $1,851.23  
- 8 catégories de dépenses avec émojis
- 5 transactions récentes
- 3 objectifs financiers
- Analytics avec prédictions IA

## ⚡ Performance

- **Cold Start**: ~200ms
- **Response Time**: ~100ms
- **Memory Usage**: ~30MB
- **Global CDN**: Oui (Vercel Edge)

## 🚀 Prochaines Versions

- [ ] Base de données réelle (Supabase/PlanetScale)
- [ ] Intégrations bancaires (Plaid/Yodlee)
- [ ] Authentification OAuth
- [ ] Push notifications
- [ ] Analytics avancées

## 📞 Support

- **GitHub Issues**: Pour bugs et features
- **Documentation**: README complet
- **Démo Live**: Lien Vercel après déploiement

---

**CASHOO v1** - L'avenir de la fintech personnelle 🚀