# Vaxen Finance

A comprehensive global treasury and cross-border payments platform built with modern web technologies.

## 🚀 Features

### Core Functionality
- **Multi-Currency Wallets** - Support for fiat and cryptocurrency
- **Currency Conversion** - Real-time exchange rates and conversions
- **Cross-Border Payments** - International wire transfers and crypto payments
- **Team Management** - Role-based access control and permissions
- **Comprehensive Reporting** - Analytics and financial insights
- **Admin Dashboard** - System management and monitoring

### User Experience
- **Dark/Light Mode** - Toggle between themes
- **Responsive Design** - Works on all devices
- **Real-time Updates** - Live notifications and status updates
- **Intuitive Interface** - Modern, futuristic design
- **Security Features** - Balance visibility toggle, secure authentication

## 🛠️ Tech Stack

### Frontend
- **Next.js 13.5.6** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **React Query** - Data fetching and caching
- **Zustand** - State management
- **Lucide React** - Icon library

### Backend
- **NestJS** - Node.js framework
- **Prisma** - Database ORM
- **PostgreSQL** - Primary database
- **Redis** - Caching and session storage
- **BullMQ** - Job queue management

### Infrastructure
- **AWS** - Cloud hosting and services
- **Docker** - Containerization
- **GitHub Actions** - CI/CD pipeline

## 📁 Project Structure

```
Vaxen-Finance/
├── apps/
│   ├── web/                 # Next.js frontend application
│   └── api/                 # NestJS backend API
├── packages/
│   ├── ui/                  # Shared UI components
│   ├── types/               # Shared TypeScript types
│   └── config/              # Shared configuration
├── docker-compose.yml       # Local development setup
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18.16.0 or higher
- Yarn package manager
- Docker and Docker Compose (for local development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/tobiaj3000/Vaxen-Finance.git
   cd Vaxen-Finance
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start the development environment**
   ```bash
   # Start all services with Docker Compose
   docker-compose up -d
   
   # Or start individual services
   yarn dev:web    # Frontend on http://localhost:3000
   yarn dev:api    # Backend on http://localhost:3001
   ```

## 🎨 Pages & Features

### Dashboard
- **Total Balance Overview** - Multi-currency balance display
- **Quick Actions** - Currency conversion, payments, reports
- **Recent Transactions** - Transaction history and status
- **Balance Visibility Toggle** - Privacy controls

### Wallets
- **Multi-Currency Support** - USD, EUR, GBP, BTC, ETH, USDC, USDT, SOL
- **Deposit/Withdrawal** - Multiple payment methods
- **Transaction History** - Comprehensive transaction tracking
- **Real-time Updates** - Live balance and status updates

### Convert
- **Real-time Exchange Rates** - Live market data
- **Multiple Currencies** - Fiat and cryptocurrency support
- **Advanced Options** - Slippage tolerance, conversion deadlines
- **Market Overview** - Price alerts and trends

### Payouts
- **Single & Batch Payments** - Individual and bulk transfers
- **Beneficiary Management** - Saved payment recipients
- **Multiple Methods** - Wire transfers, crypto, SEPA, ACH
- **Payment Tracking** - Real-time status updates

### Team Management
- **Role-based Access** - Owner, Admin, Manager, Viewer roles
- **Member Management** - Add, edit, remove team members
- **Permission Controls** - Granular access management
- **Activity Tracking** - Team member actions and history

### Reports & Analytics
- **Financial Insights** - Volume, transactions, success rates
- **Visual Charts** - Interactive data visualization
- **Export Capabilities** - CSV, PDF reports
- **Custom Date Ranges** - Flexible reporting periods

### Settings
- **Profile Management** - User account settings
- **Security Settings** - 2FA, password management
- **Notification Preferences** - Email, push, SMS settings
- **API Keys** - Developer access management

### Admin Dashboard
- **System Overview** - Platform health and metrics
- **User Management** - Account administration
- **Security Monitoring** - Threat detection and alerts
- **Compliance Tools** - KYC/AML management

### Help & Support
- **Comprehensive FAQs** - Categorized help articles
- **Contact Methods** - Live chat, email, phone support
- **Documentation** - User guides and API docs
- **System Status** - Real-time service status

### Notifications
- **Real-time Alerts** - Transaction, security, system notifications
- **Filtering & Search** - Advanced notification management
- **Bulk Actions** - Mark as read, delete, archive
- **Custom Preferences** - Personalized notification settings

## 🎨 Design System

### Theme Support
- **Dark Mode** - Futuristic dark theme (default)
- **Light Mode** - Clean, professional light theme
- **Theme Toggle** - Seamless switching between modes
- **Persistent Preferences** - Theme saved across sessions

### Visual Elements
- **Gradient Backgrounds** - Dynamic, modern gradients
- **Glass Morphism** - Transparent, blurred elements
- **Smooth Animations** - Hover effects and transitions
- **Responsive Layout** - Mobile-first design approach

## 🔧 Development

### Available Scripts

```bash
# Development
yarn dev              # Start all services
yarn dev:web          # Start frontend only
yarn dev:api          # Start backend only

# Building
yarn build            # Build all packages
yarn build:web        # Build frontend
yarn build:api        # Build backend

# Testing
yarn test             # Run all tests
yarn test:web         # Run frontend tests
yarn test:api         # Run backend tests

# Linting
yarn lint             # Lint all packages
yarn lint:fix         # Fix linting issues

# Database
yarn db:migrate        # Run database migrations
yarn db:seed          # Seed database with sample data
```

### Code Quality
- **ESLint** - Code linting and formatting
- **Prettier** - Code formatting
- **TypeScript** - Type checking
- **Husky** - Git hooks for quality checks

## 🚀 Deployment

### Production Build
```bash
yarn build
yarn start
```

### Docker Deployment
```bash
docker-compose -f docker-compose.prod.yml up -d
```

### AWS Deployment
- **ECS Fargate** - Container orchestration
- **RDS PostgreSQL** - Managed database
- **ElastiCache Redis** - Managed caching
- **S3 + CloudFront** - Static asset hosting
- **WAF** - Web application firewall

## 🔒 Security

### Authentication
- **JWT Tokens** - Secure authentication
- **Multi-Factor Authentication** - 2FA support
- **Role-Based Access Control** - Granular permissions
- **Session Management** - Secure session handling

### Data Protection
- **Encryption** - Data encryption at rest and in transit
- **Input Validation** - Comprehensive data validation
- **Rate Limiting** - API abuse prevention
- **Audit Logging** - Complete activity tracking

## 📊 Monitoring & Observability

### Health Monitoring
- **Health Endpoints** - Service health checks
- **Metrics Collection** - Performance monitoring
- **Error Tracking** - Sentry integration
- **Logging** - Structured logging with OpenTelemetry

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with modern web technologies
- Inspired by leading fintech platforms
- Designed for scalability and security
- Focused on user experience and performance

## 📞 Support

For support and questions:
- **Email**: support@vaxen.global
- **Documentation**: [docs.vaxen.global](https://docs.vaxen.global)
- **Issues**: [GitHub Issues](https://github.com/tobiaj3000/Vaxen-Finance/issues)

---

**Vaxen Finance** - Global Treasury & Cross-Border Payments Platform