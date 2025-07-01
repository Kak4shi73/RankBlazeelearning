import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import SignupModal from './components/SignupModal';
import Home from './pages/Home';
import CoursePage from './pages/CoursePage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  const handleGetStarted = () => {
    setIsSignupModalOpen(true);
  };

  const handleViewCourses = () => {
    setCurrentPage('courses');
  };

  const handleSwitchToLogin = () => {
    setIsSignupModalOpen(false);
    setIsLoginModalOpen(true);
  };

  const handleSwitchToSignup = () => {
    setIsLoginModalOpen(false);
    setIsSignupModalOpen(true);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onGetStarted={handleGetStarted} onViewCourses={handleViewCourses} />;
      case 'courses':
        return <CoursePage />;
      case 'about':
        return (
          <div className="min-h-screen bg-gray-50 py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">About RankBlaze</h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  We're building something amazing. Check back soon for more information about our mission and team.
                </p>
              </div>
            </div>
          </div>
        );
      case 'contact':
        return (
          <div className="min-h-screen bg-gray-50 py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Get in touch with our team. We'd love to hear from you!
                </p>
              </div>
            </div>
          </div>
        );
      default:
        return <Home onGetStarted={handleGetStarted} onViewCourses={handleViewCourses} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header
        onLoginClick={() => setIsLoginModalOpen(true)}
        onSignupClick={() => setIsSignupModalOpen(true)}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
      
      <main>
        {renderCurrentPage()}
      </main>
      
      <Footer />

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onSwitchMode={handleSwitchToSignup}
      />

      <SignupModal
        isOpen={isSignupModalOpen}
        onClose={() => setIsSignupModalOpen(false)}
        onSwitchMode={handleSwitchToLogin}
      />
    </div>
  );
}

export default App;