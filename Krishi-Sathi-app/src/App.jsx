import React from 'react';

// Import lucide-react icons
import { Crop, Cloud, MessageSquare, Image, Info, Award, MessageSquareText, Lightbulb, MapPin, Mail, Phone } from 'lucide-react';

// Main App component
const App = () => {
  return (
    <>
      {/* Tailwind CSS CDN for styling */}
      <script src="https://cdn.tailwindcss.com"></script>
      {/* Inter font from Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-100 font-inter text-gray-800 flex flex-col relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        {/* Header Section */}
        <header className="relative bg-white/90 backdrop-blur-md shadow-lg py-6 px-6 md:px-12 flex justify-between items-center rounded-b-3xl border-b border-emerald-100">
          <div className="flex items-center space-x-4">
            <div className="p-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl shadow-lg">
              <Crop className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              AgroConnect Nepal
            </h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-emerald-600 font-medium transition-all duration-300 hover:scale-105 relative group">
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#about" className="text-gray-600 hover:text-emerald-600 font-medium transition-all duration-300 hover:scale-105 relative group">
              About Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="text-gray-600 hover:text-emerald-600 font-medium transition-all duration-300 hover:scale-105 relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>
          <button className="md:hidden p-3 rounded-xl text-gray-600 hover:bg-emerald-50 transition-all duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </header>

        {/* Hero Section */}
        <main className="flex-grow flex items-center justify-center p-6 md:p-12 relative z-10">
          <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-16 max-w-5xl text-center border border-emerald-100 relative overflow-hidden">
            {/* Hero background decoration */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-green-400"></div>
            
            <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-teal-700 to-green-700 leading-tight mb-6 animate-fade-in">
              GROW YOUR FARM, <br className="hidden md:block"/> 
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                GROW YOUR KNOWLEDGE.
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
              This platform empowers farmers with essential knowledge and innovative tools. Gain valuable insights, and achieve better harvests. Whether you seek modern techniques, market trends, or solutions to common farming challenges, we're here to help you cultivate success and grow.
            </p>
            <button className="group relative bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold py-4 px-10 rounded-full shadow-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl overflow-hidden">
              <span className="relative z-10">COMING SOON..</span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
          </div>
        </main>

        {/* Features Section */}
        <section id="features" className="relative py-20 px-6 md:px-12 bg-white/95 backdrop-blur-md rounded-t-3xl shadow-inner border-t border-emerald-100">
          <h3 className="text-3xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 mb-16">
            Our Core Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Feature Card 1: Personalized Updates */}
            <div className="group bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg flex flex-col items-center text-center transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 border border-green-100 hover:border-emerald-200">
              <div className="p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                <Cloud className="h-12 w-12 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Personalized Updates</h4>
              <p className="text-gray-600 leading-relaxed">Receive weekly tips, pest alerts, and weather forecasts tailored to your farm's needs.</p>
            </div>

            {/* Feature Card 2: AI Assistant */}
            <div className="group bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg flex flex-col items-center text-center transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 border border-green-100 hover:border-emerald-200">
              <div className="p-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                <MessageSquare className="h-12 w-12 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">AI Assistant (AgroBOT)</h4>
              <p className="text-gray-600 leading-relaxed">Get instant answers to your farming questions with our intelligent Nepali chatbot.</p>
            </div>

            {/* Feature Card 3: Plant Identification */}
            <div className="group bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg flex flex-col items-center text-center transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 border border-green-100 hover:border-emerald-200">
              <div className="p-4 bg-gradient-to-r from-teal-500 to-green-500 rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                <Image className="h-12 w-12 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Plant Identification</h4>
              <p className="text-gray-600 leading-relaxed">Upload images of plants or diseased crops for AI-powered identification and remedies.</p>
            </div>

            {/* Feature Card 4: Yield Prediction (Future) */}
            <div className="group bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg flex flex-col items-center text-center transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 border border-green-100 hover:border-emerald-200 opacity-75">
              <div className="p-4 bg-gradient-to-r from-gray-400 to-gray-500 rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="h-12 w-12 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Yield Prediction & Planning</h4>
              <p className="text-gray-600 leading-relaxed">Future feature: Optimize your harvest with data-driven yield predictions and smart planning tools.</p>
            </div>

            {/* Feature Card 5: Market Insights (Future) */}
            <div className="group bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg flex flex-col items-center text-center transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 border border-green-100 hover:border-emerald-200 opacity-75">
              <div className="p-4 bg-gradient-to-r from-gray-400 to-gray-500 rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                <Lightbulb className="h-12 w-12 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Market Insights</h4>
              <p className="text-gray-600 leading-relaxed">Future feature: Access real-time market prices and connect with buyers/sellers.</p>
            </div>

            {/* Feature Card 6: Community Forum (Future) */}
            <div className="group bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg flex flex-col items-center text-center transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 border border-green-100 hover:border-emerald-200 opacity-75">
              <div className="p-4 bg-gradient-to-r from-gray-400 to-gray-500 rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                <MessageSquareText className="h-12 w-12 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Community Forum</h4>
              <p className="text-gray-600 leading-relaxed">Future feature: Connect with other farmers and experts to share knowledge and get advice.</p>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-20 px-6 md:px-12 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-b-3xl shadow-inner border-t border-emerald-100">
          <h3 className="text-3xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 mb-12">
            About AgroConnect Nepal
          </h3>
          <div className="max-w-5xl mx-auto text-center text-gray-700 text-lg leading-relaxed">
            <p className="mb-6 text-xl">
              AgroConnect Nepal is dedicated to empowering Nepali farmers through technology. Our platform provides essential knowledge, innovative tools, and personalized support to help you improve agricultural practices, increase yields, and navigate the challenges of farming in Nepal.
            </p>
            <p className="text-xl">
              We believe in leveraging AI and accessible digital solutions to foster a more productive, sustainable, and prosperous agricultural sector across the country. Join us in cultivating success and growing together!
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 md:px-12 bg-white/95 backdrop-blur-md rounded-t-3xl shadow-inner border-t border-emerald-100">
          <h3 className="text-3xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 mb-12">
            Get in Touch
          </h3>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700 text-lg">
            <div className="group flex items-center space-x-4 bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <span className="font-medium">info@agroconnectnp.com</span>
            </div>
            <div className="group flex items-center space-x-4 bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <span className="font-medium">+977-98XXXXXXXX</span>
            </div>
            <div className="group flex items-center space-x-4 bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 md:col-span-2">
              <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <span className="font-medium">Kathmandu, Nepal</span>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="bg-gradient-to-r from-emerald-700 to-teal-700 text-white py-8 px-6 md:px-12 text-center rounded-t-3xl mt-auto shadow-lg">
          <p className="text-lg">&copy; {new Date().getFullYear()} AgroConnect Nepal. All rights reserved.</p>
        </footer>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </>
  );
};

export default App;
