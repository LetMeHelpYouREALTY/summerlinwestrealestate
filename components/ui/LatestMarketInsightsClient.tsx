'use client';

import type React from 'react';

const LatestMarketInsightsClient: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg" style={{ boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}>
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Latest Market Insights</h2>
      <div className="space-y-4">
        <div className="border-l-4 border-blue-500 pl-4">
          <h3 className="font-semibold text-lg">Summerlin West Market Trends</h3>
          <p className="text-gray-600">
            Current market analysis for Summerlin West real estate trends and pricing.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-blue-50 p-4 rounded">
            <h4 className="font-bold text-blue-800">Median Home Price</h4>
            <p className="text-2xl font-bold text-blue-600">$650K</p>
          </div>
          <div className="bg-green-50 p-4 rounded">
            <h4 className="font-bold text-green-800">Days on Market</h4>
            <p className="text-2xl font-bold text-green-600">28</p>
          </div>
          <div className="bg-purple-50 p-4 rounded">
            <h4 className="font-bold text-purple-800">Price per Sq Ft</h4>
            <p className="text-2xl font-bold text-purple-600">$285</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestMarketInsightsClient;
