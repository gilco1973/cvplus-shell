import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnalyticsDashboard } from '@cvplus/analytics';

/**
 * AnalyticsPage - Orchestrates analytics and insights
 *
 * Integrates with @cvplus/analytics AnalyticsDashboard component
 */
const AnalyticsPage: React.FC = () => {
  return (
    <div className="h-full overflow-auto">
      <Routes>
        {/* Main Analytics Route */}
        <Route
          path="/"
          element={
            <div className="max-w-7xl mx-auto p-6">
              <AnalyticsDashboard
                dateRange="30d"
                showExportOptions={true}
                onMetricsUpdate={(metrics) => {
                  console.log('Analytics metrics updated:', metrics);
                }}
                className="w-full"
              />
            </div>
          }
        />

        {/* Detailed Reports Route */}
        <Route
          path="/reports"
          element={
            <div className="max-w-6xl mx-auto p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Detailed Reports</h2>
              <p className="text-gray-600">Detailed analytics reports will be implemented here.</p>
            </div>
          }
        />

        {/* Export Data Route */}
        <Route
          path="/export"
          element={
            <div className="max-w-4xl mx-auto p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Export Analytics Data</h2>
              <p className="text-gray-600">Data export interface will be implemented here.</p>
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default AnalyticsPage;