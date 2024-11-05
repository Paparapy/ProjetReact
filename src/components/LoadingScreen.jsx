import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-orange-500 to-red-800">
      <div className="flex flex-col items-center">
        <div className="loader"></div>
        <p className="mt-4 text-xl text-white">Chargement...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
