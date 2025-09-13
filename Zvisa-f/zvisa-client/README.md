# Visa Navigator - Modern Visa Application System

## Project Overview
Visa Navigator is a comprehensive web application that revolutionizes the visa application process. It provides a seamless platform for users to check visa requirements, submit applications, and track their status in real-time. Built with modern web technologies, it offers a secure, user-friendly interface accessible across all devices.


## 🔗 Live Links
- [Live Website](https://zvisa-fb196.web.app/)
- [Client Repository](https://github.com/omarFaruk99/Zvisa/tree/main/zvisa-client)
- [Server Repository](https://github.com/omarFaruk99/Zvisa/tree/main/zvisa-server)

## 🌟 Key Features

1. **Dynamic Interface**
   - Responsive design (mobile, tablet, desktop)
   - Interactive navbar with authentication states
   - Dark/light theme toggle

2. **User Authentication**
   - Firebase authentication system
   - Google login integration
   - Protected routes for secure access

3. **Visa Management**
   - Comprehensive visa details management
   - Advanced filtering and sorting
   - Real-time application tracking
   - Application cancellation options

4. **Enhanced UX Features**
   - Lottie animations
   - Dynamic typing effects
   - Interactive tooltips
   - Toast notifications
   - Advanced search functionality

## 🛠️ Technologies Used

### Frontend
- React.js with Vite
- React Router DOM
- Tailwind CSS with DaisyUI
- Firebase (Auth & Hosting)
- Lottie React
- React Simple Typewriter
- React Icons
- React Tooltip

### Backend
- Node.js
- Express.js
- MongoDB
- Cors middleware

### Deployment
- Frontend: Firebase Hosting
- Backend: Vercel

## 📦 Dependencies

```json
{
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "firebase": "^11.0.0",
    "mongodb": "^6.3.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.8.1",
    "react-tooltip": "^5.8.3",
    "sweetalert2": "^11.7.3"
  }
}
```

## 🚀 Local Development Setup

1. **Clone Repositories**
   ```bash
   git clone https://github.com/omarFaruk99/Zvisa/tree/main/zvisa-client
   git clone https://github.com/omarFaruk99/Zvisa/tree/main/zvisa-server
   ```

2. **Frontend Setup**
   ```bash
   cd b10-a10-client-side-omarFaruk99
   npm install
   ```

3. **Environment Variables**
   Create `.env.local` in client directory:
   ```env
   VITE_apiKey=your_firebase_api_key
   VITE_authDomain=your_auth_domain
   VITE_projectId=your_project_id
   VITE_storageBucket=your_storage_bucket
   VITE_messagingSenderId=your_sender_id
   VITE_appId=your_app_id
   ```

4. **Backend Setup**
   ```bash
   cd ../b10-a10-server-side-omarFaruk99
   npm install
   ```

5. **Start Development Servers**
   ```bash
   # Frontend (in client directory)
   npm run dev

   # Backend (in server directory)
   npm run dev
   ```

## 🔐 Security Features
- Secured API endpoints
- Protected routes
- Environment variable protection
- MongoDB authentication
- Firebase secure authentication

## 📝 License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.