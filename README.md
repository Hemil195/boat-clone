# BOAT Clone E-commerce Project

A full-stack e-commerce platform inspired by BOAT, built with React, TypeScript, and Node.js, featuring a modern and responsive user interface.

## 🚀 Features

### Frontend
- Modern and responsive UI using Tailwind CSS
- Type-safe development with TypeScript
- Component-based architecture using shadcn-ui
- Form handling with React Hook Form
- Data visualization with Recharts
- Toast notifications with Sonner
- Theme support with next-themes
- Routing with React Router DOM
- State management with React Query

### Backend
- RESTful API architecture
- MongoDB database integration
- JWT authentication
- Secure password hashing
- Middleware for request validation
- Error handling middleware
- File upload support
- API rate limiting

## 🛠️ Tech Stack

### Frontend
- **Framework:** React 18
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **UI Components:** shadcn-ui
- **Form Handling:** React Hook Form + Zod
- **Data Fetching:** TanStack Query
- **Routing:** React Router DOM
- **Icons:** Lucide React
- **Date Handling:** date-fns
- **Charts:** Recharts
- **Notifications:** Sonner

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB
- **Authentication:** JWT
- **Validation:** Express Validator
- **File Upload:** Multer
- **Security:** bcrypt, helmet
- **Logging:** Morgan

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd boat-clone
```

2. Install frontend dependencies:
```bash
npm install
```

3. Install backend dependencies:
```bash
cd backend
npm install
```

4. Set up environment variables:
   - Create `.env` file in the root directory
   - Create `.env` file in the backend directory

5. Start the development servers:

Frontend:
```bash
npm run dev
```

Backend:
```bash
cd backend
npm run dev
```

## 🏗️ Project Structure

```
├── src/                    # Frontend source code
│   ├── components/        # Reusable UI components
│   ├── pages/            # Page components
│   ├── data/             # Static data and constants
│   ├── lib/              # Utility functions and configurations
│   └── hooks/            # Custom React hooks
│
├── backend/              # Backend source code
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   ├── middleware/      # Custom middleware
│   └── server.js        # Main server file
│
├── public/              # Static assets
└── dist/               # Production build
```

## 🚀 Available Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

### Backend
- `npm run dev` - Start development server
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🔧 Configuration

### Frontend
- `vite.config.ts` - Vite configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `eslint.config.js` - ESLint configuration

### Backend
- `server.js` - Main server configuration
- `.env` - Environment variables
- `package.json` - Dependencies and scripts

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
