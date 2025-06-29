
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft, Sparkles } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse top-20 right-20"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-orange-400/10 rounded-full blur-2xl animate-float"></div>
      </div>

      <div className="relative text-center z-10 max-w-2xl mx-auto px-4">
        <div className="inline-flex items-center px-6 py-3 bg-white/5 backdrop-blur-xl rounded-full mb-8 border border-orange-500/20">
          <Sparkles className="w-5 h-5 mr-3 text-orange-500" />
          <span className="text-sm font-semibold text-white">Oops! Page Not Found</span>
        </div>

        <h1 className="text-8xl md:text-9xl font-bold mb-6 text-gradient font-playfair animate-fade-in-up">
          404
        </h1>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white font-space animate-fade-in-up">
          Page Not Found
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 leading-relaxed animate-fade-in-up">
          The page you're looking for doesn't exist or has been moved. 
          Let's get you back to where you need to be.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up">
          <Link
            to="/"
            className="btn-orange px-10 py-5 rounded-xl font-bold text-lg inline-flex items-center justify-center transform transition-all duration-300 hover:scale-105"
          >
            <Home className="mr-3 w-6 h-6" />
            Back to Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="glass-effect text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 border border-orange-500/30 hover:border-orange-500/50 hover:bg-orange-500/10 inline-flex items-center justify-center"
          >
            <ArrowLeft className="mr-3 w-6 h-6" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
