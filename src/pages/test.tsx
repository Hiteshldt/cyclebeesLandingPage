import React from 'react';

const TestPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center">
      <div className="bg-secondary-100 text-white p-8 rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold mb-4">CSS Test Page</h1>
        <p className="text-xl mb-4">If you can see this styled correctly, Tailwind CSS is working!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-primary text-secondary-100 p-4 rounded-lg">
            <h3 className="font-semibold">Primary Color</h3>
            <p>Background: #FFD11E</p>
          </div>
          <div className="bg-secondary-200 text-secondary-100 p-4 rounded-lg">
            <h3 className="font-semibold">Secondary Color</h3>
            <p>Background: #FBE9A0</p>
          </div>
        </div>
        <button className="bg-primary text-secondary-100 px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors duration-200 font-semibold">
          Test Button
        </button>
      </div>
    </div>
  );
};

export default TestPage;