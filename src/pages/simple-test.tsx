import React from 'react';

const SimpleTest: React.FC = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#FFD11E', fontSize: '2rem', marginBottom: '1rem' }}>
        CSS Debug Test Page
      </h1>
      
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#2D3E50', marginBottom: '1rem' }}>Without Tailwind (Inline Styles):</h2>
        <div style={{ 
          backgroundColor: '#FFD11E', 
          color: '#2D3E50', 
          padding: '1rem', 
          borderRadius: '8px',
          marginBottom: '1rem'
        }}>
          This uses inline styles - Primary Color Background
        </div>
        <div style={{ 
          backgroundColor: '#2D3E50', 
          color: 'white', 
          padding: '1rem', 
          borderRadius: '8px'
        }}>
          This uses inline styles - Secondary Color Background
        </div>
      </div>

      <div>
        <h2 style={{ color: '#2D3E50', marginBottom: '1rem' }}>With Tailwind Classes:</h2>
        <div className="bg-primary text-secondary-100 p-4 rounded-lg mb-4">
          This should have primary background with Tailwind classes
        </div>
        <div className="bg-secondary-100 text-white p-4 rounded-lg mb-4">
          This should have secondary background with Tailwind classes
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-secondary-200 p-4 rounded-lg">
            Grid item 1
          </div>
          <div className="bg-secondary-300 p-4 rounded-lg">
            Grid item 2
          </div>
        </div>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <p style={{ fontSize: '0.875rem', color: '#666' }}>
          If the Tailwind sections look unstyled (no colors, no layout), then Tailwind CSS is not loading properly.
          If they look styled correctly, then Tailwind is working fine.
        </p>
      </div>
    </div>
  );
};

export default SimpleTest;