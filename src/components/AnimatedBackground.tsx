import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary/10 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-primary/15 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
      <div className="absolute bottom-40 left-20 w-1 h-1 bg-primary/20 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '2.5s' }}></div>
      <div className="absolute bottom-20 right-40 w-2 h-2 bg-primary/12 rounded-full animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '3.5s' }}></div>
      
      {/* Maple leaf shapes */}
      <div className="absolute top-60 right-10 opacity-5">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-primary animate-pulse" style={{ animationDelay: '0s', animationDuration: '4s' }}>
          <path d="M12 2l1.09 3.26L16 4l-1.91 3.09L17 9l-3.26.91L12 13l-1.74-3.09L7 9l2.91-1.91L8 4l2.91 1.26L12 2z"/>
        </svg>
      </div>
      <div className="absolute bottom-60 left-40 opacity-5">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-primary animate-pulse" style={{ animationDelay: '2s', animationDuration: '5s' }}>
          <path d="M12 2l1.09 3.26L16 4l-1.91 3.09L17 9l-3.26.91L12 13l-1.74-3.09L7 9l2.91-1.91L8 4l2.91 1.26L12 2z"/>
        </svg>
      </div>
      
      {/* Gradient orbs */}
      <div className="absolute top-32 right-1/3 w-20 h-20 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s', animationDuration: '6s' }}></div>
      <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-gradient-to-br from-primary/3 to-transparent rounded-full blur-xl animate-pulse" style={{ animationDelay: '3s', animationDuration: '7s' }}></div>
    </div>
  );
};

export default AnimatedBackground;