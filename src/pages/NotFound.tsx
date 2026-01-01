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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-secondary to-white text-foreground relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse top-20 right-20"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-primary/5 rounded-full blur-2xl animate-float"></div>
      </div>

      <div className="relative text-center z-10 max-w-2xl mx-auto px-4">
        <div className="inline-flex items-center px-6 py-3 bg-primary/10 backdrop-blur-xl rounded-full mb-8 border border-accent/20">
          <Sparkles className="w-5 h-5 mr-3 text-accent" />
          <span className="text-sm font-semibold text-foreground">Oops! Page Not Found</span>
        </div>

        <h1 className="text-8xl md:text-9xl font-bold mb-6 text-gradient font-playfair animate-fade-in-up">
          404
        </h1>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground font-space animate-fade-in-up">
          Page Not Found
        </h2>
        
        <p className="text-xl text-muted-foreground mb-12 leading-relaxed animate-fade-in-up">
          The page you're looking for doesn't exist or has been moved. 
          Let's get you back to where you need to be.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up">
          <Link
            to="/"
            className="btn-primary px-10 py-5 rounded-xl font-bold text-lg inline-flex items-center justify-center transform transition-all duration-300 hover:scale-105"
          >
            <Home className="mr-3 w-6 h-6" />
            Back to Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="bg-secondary text-foreground px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 border border-border hover:border-accent hover:bg-accent/10 inline-flex items-center justify-center"
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
