# 🩸 Emergency Blood Find (EBFind)

A modern, responsive web application designed to connect blood donors with those in urgent need of blood transfusions. EBFind streamlines the process of finding compatible blood donors during emergencies, making it easier to save lives.

🌐 **Live Demo:** [https://ebfind.herokuapp.com](https://ebfind.herokuapp.com)

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 🎯 About

Emergency Blood Find (EBFind) is a comprehensive platform that bridges the gap between blood donors and recipients. In critical situations where time is of the essence, EBFind provides a fast, reliable, and user-friendly solution to locate compatible blood donors in your area.

### Why EBFind?

- ⚡ **Fast Response**: Quick donor matching for emergency situations
- 🎯 **Accurate Matching**: Advanced filtering by blood type, location, and availability
- 🔒 **Secure & Private**: User data protection and privacy compliance
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- 🌍 **Wide Coverage**: Connect with donors across multiple regions

---

## ✨ Features

### 🔍 Core Features

#### 1. **Donor Management**
- Comprehensive donor list with detailed profiles
- Advanced search and filtering options
- Blood type compatibility checker
- Donor availability status tracking
- Donation history and records

#### 2. **Emergency Blood Requests**
- Quick request submission form
- Real-time request notifications
- Priority-based request handling
- Request status tracking
- Automatic donor matching

#### 3. **Admin Dashboard**
- Complete administrative control panel
- User management and verification
- Request monitoring and management
- Donor database administration
- Analytics and reporting tools
- System configuration settings

#### 4. **User Authentication & Profiles**
- Secure user registration and login
- Profile management
- Donation history tracking
- Notification preferences
- Privacy settings

#### 5. **Search & Filter System**
- Search by blood type
- Filter by location/distance
- Filter by availability status
- Advanced search with multiple criteria
- Saved search preferences

#### 6. **Notifications**
- Real-time request alerts
- Email notifications
- SMS notifications (optional)
- In-app notification center
- Customizable notification preferences

#### 7. **Location Services**
- GPS-based location detection
- Distance calculation
- Map integration for donor locations
- Location-based search
- Regional statistics

#### 8. **Additional Features**
- Donation appointment scheduling
- Blood bank directory
- Educational resources about blood donation
- Community forum/discussions
- Donor recognition and rewards
- Multi-language support (coming soon)
- Dark mode theme
- Accessibility features

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js 16.1.1](https://nextjs.org/) - React framework for production
- **UI Library**: [React 19.2.3](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS framework
- **UI Components**: [Radix UI](https://www.radix-ui.com/) - Accessible component primitives
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful icon library
- **Carousel**: [Embla Carousel](https://www.embla-carousel.com/) - Carousel component
- **Type Safety**: [TypeScript 5](https://www.typescriptlang.org/)

### Development Tools
- **Linting**: ESLint with Next.js config
- **Package Manager**: npm
- **Version Control**: Git

### Future Integrations (Planned)
- Database: PostgreSQL / MongoDB
- Authentication: NextAuth.js / Auth0
- Maps: Google Maps API / Mapbox
- Notifications: Firebase Cloud Messaging
- Email: SendGrid / Resend
- Hosting: Vercel / AWS

---

## 📸 Screenshots

### Homepage
![Homepage](https://via.placeholder.com/800x400?text=EBFind+Homepage)

### Donor List
![Donor List](https://via.placeholder.com/800x400?text=Donor+List+Page)

### Emergency Request
![Emergency Request](https://via.placeholder.com/800x400?text=Emergency+Blood+Request)

### Admin Dashboard
![Admin Dashboard](https://via.placeholder.com/800x400?text=Admin+Dashboard)

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher) or **yarn** or **pnpm**
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ebfind.git
   cd ebfind
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and add your configuration:
   ```env
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   DATABASE_URL=your_database_url
   NEXTAUTH_SECRET=your_secret_key
   NEXTAUTH_URL=http://localhost:3000
   # Add other environment variables as needed
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

---

## 💻 Usage

### For Donors

1. **Register/Login**: Create an account or sign in
2. **Complete Profile**: Add your blood type, location, and contact information
3. **Set Availability**: Update your availability status
4. **Respond to Requests**: Browse and respond to emergency blood requests
5. **Track Donations**: View your donation history

### For Recipients

1. **Submit Request**: Fill out the emergency blood request form
2. **Provide Details**: Include blood type, location, urgency, and contact info
3. **Get Matched**: Receive notifications when compatible donors are found
4. **Connect**: Contact matched donors directly

### For Administrators

1. **Access Dashboard**: Login with admin credentials
2. **Manage Users**: Verify and manage donor/recipient accounts
3. **Monitor Requests**: Track and manage all blood requests
4. **View Analytics**: Access reports and statistics
5. **System Settings**: Configure application settings

---

## 📁 Project Structure

```
ebfind/
├── public/                 # Static assets
│   ├── images/            # Image files
│   └── icons/             # Icon files
├── src/
│   ├── app/               # Next.js app directory
│   │   ├── (auth)/        # Authentication routes
│   │   ├── (dashboard)/   # Dashboard routes
│   │   ├── admin/         # Admin routes
│   │   ├── donors/        # Donor pages
│   │   ├── requests/      # Request pages
│   │   ├── layout.tsx     # Root layout
│   │   ├── page.tsx       # Homepage
│   │   └── globals.css    # Global styles
│   ├── components/         # React components
│   │   ├── ui/            # Reusable UI components
│   │   ├── header/        # Header component
│   │   ├── donor/         # Donor-related components
│   │   ├── request/       # Request-related components
│   │   └── admin/         # Admin components
│   ├── lib/               # Utility functions
│   │   ├── utils.ts       # Helper functions
│   │   └── api.ts         # API utilities
│   └── types/             # TypeScript type definitions
├── .env.local             # Environment variables (not in git)
├── .gitignore             # Git ignore rules
├── components.json        # Component configuration
├── eslint.config.mjs      # ESLint configuration
├── next.config.ts         # Next.js configuration
├── package.json           # Dependencies and scripts
├── postcss.config.mjs     # PostCSS configuration
├── tailwind.config.ts     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

---

## 📚 API Documentation

### Endpoints (Planned)

#### Donor Endpoints
- `GET /api/donors` - Get all donors
- `GET /api/donors/:id` - Get donor by ID
- `POST /api/donors` - Create new donor
- `PUT /api/donors/:id` - Update donor
- `DELETE /api/donors/:id` - Delete donor

#### Request Endpoints
- `GET /api/requests` - Get all requests
- `GET /api/requests/:id` - Get request by ID
- `POST /api/requests` - Create new request
- `PUT /api/requests/:id` - Update request
- `DELETE /api/requests/:id` - Delete request

#### Admin Endpoints
- `GET /api/admin/stats` - Get statistics
- `GET /api/admin/users` - Get all users
- `PUT /api/admin/users/:id` - Update user status

*Full API documentation will be available in the `/docs` route once implemented.*

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### Contribution Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👥 Contact & Support

### Project Maintainer
- **Name**: Your Name
- **Email**: your.email@example.com
- **GitHub**: [@yourusername](https://github.com/yourusername)

### Support
- 📧 Email: support@ebfind.com
- 💬 Discord: [Join our community](https://discord.gg/ebfind)
- 🐛 Issues: [GitHub Issues](https://github.com/yourusername/ebfind/issues)

### Social Media
- 🌐 Website: [https://ebfind.herokuapp.com](https://ebfind.herokuapp.com)
- 📱 Twitter: [@EBFindApp](https://twitter.com/EBFindApp)
- 📘 Facebook: [EBFind](https://facebook.com/ebfind)

---

## 🙏 Acknowledgments

- Thanks to all blood donors who make this platform meaningful
- Open source community for amazing tools and libraries
- Medical professionals for their guidance and support

---

## 🔮 Roadmap

### Phase 1 (Current)
- [x] Project setup and initial structure
- [x] Basic UI components
- [ ] User authentication
- [ ] Donor registration
- [ ] Basic search functionality

### Phase 2 (Upcoming)
- [ ] Emergency request system
- [ ] Admin dashboard
- [ ] Notification system
- [ ] Location services integration

### Phase 3 (Future)
- [ ] Mobile app (React Native)
- [ ] AI-powered matching
- [ ] Multi-language support
- [ ] Advanced analytics
- [ ] Integration with blood banks

---

## ⚠️ Important Notes

- This application is for connecting donors and recipients. Always verify donor eligibility through proper medical channels.
- EBFind does not replace professional medical advice or emergency services.
- In case of a real emergency, call your local emergency number immediately.

---

**Made with ❤️ to save lives**

*Last updated: December 2024*
