# Krishi-Sathi Dummy Website

A dummy website built to test mobile responsiveness and webview functionality for the **कृषि साथी** (Krishi-Sathi) Android application.

## 🎯 Purpose

This project serves as a testing environment to verify:
- **Mobile Responsiveness**: How the website renders on different mobile devices
- **WebView Integration**: How the Android app handles website URL rendering using `webview_flutter`
- **Cross-Platform Compatibility**: Ensuring seamless web content display within the mobile application

## 🛠️ Technologies Used

- **React 18** - Frontend framework
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for styling
- **JavaScript (JSX)** - Component development
- **ESLint** - Code linting and quality assurance

## 🚀 Features

- **Responsive Design**: Optimized for mobile and desktop viewing
- **Modern UI**: Clean and intuitive interface using Tailwind CSS
- **Fast Development**: Hot Module Replacement (HMR) for efficient development
- **Cross-Browser Compatibility**: Tested across different browsers and devices

## 📱 Mobile App Integration

This dummy website is specifically designed to test the **कृषि साथी** Android application's webview capabilities. It helps developers:

- Verify webview_flutter rendering performance
- Test URL handling and navigation
- Ensure proper mobile responsiveness within the app
- Debug any webview-related issues

## 🏗️ Project Structure

```
Krishi-Sathi-app/
├── public/              # Static assets
├── src/                 # Source code
│   ├── assets/         # Images and other assets
│   ├── App.jsx         # Main application component
│   ├── App.css         # Application styles
│   ├── index.css       # Global styles
│   └── main.jsx        # Application entry point
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── eslint.config.js    # ESLint configuration
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/roshanCodesStuff/demo-deployment-Agroconnect.git
   cd Krishi-Sathi-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 📱 Testing with Mobile App

To test this website with the **कृषि साथी** Android app:

1. Deploy this website to a hosting service (Vercel, Netlify, etc.)
2. Use the deployed URL in your Android app's webview
3. Test various scenarios:
   - Page loading and rendering
   - Navigation and interactions
   - Mobile responsiveness
   - Performance metrics

## 🔧 Development

### Adding New Features

1. Create new components in the `src/` directory
2. Use Tailwind CSS classes for styling
3. Ensure mobile-first responsive design
4. Test on various screen sizes

### Styling Guidelines

- Use Tailwind CSS utility classes
- Follow mobile-first responsive design principles
- Maintain consistent spacing and typography
- Ensure accessibility standards

## 📦 Deployment

This project can be deployed to various platforms:

- **Vercel**: `vercel --prod`
- **Netlify**: `netlify deploy --prod`
- **GitHub Pages**: Configure in repository settings
- **Firebase Hosting**: `firebase deploy`

## 🤝 Contributing

This is a testing project for the Krishi-Sathi mobile application. For contributions:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly on mobile devices
5. Submit a pull request

## 📄 License

This project is part of the AgroConnect ecosystem (**कृषि साथी**) and is used for testing purposes.

## 🔗 Related Projects

- **कृषि साथी Android App**: The main mobile application that uses this dummy website for testing
- **WebView Flutter Integration**: Testing webview_flutter functionality

## 📞 Contact

For questions about this dummy website or the Krishi-Sathi project, please refer to the main project repository.
or, Email: [gr8medosha@gmail.com](mailto:gr8medosha@gmail.com)

---

**Note**: This is a dummy website created specifically for testing the Krishi-Sathi mobile application's webview capabilities. It is not intended for production use.