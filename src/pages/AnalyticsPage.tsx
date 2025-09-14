import React from 'react';
import { Routes, Route } from 'react-router-dom';

/**
 * AnalyticsPage - Orchestrates analytics and insights
 *
 * Will integrate with @cvplus/analytics components when available
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
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Analytics Dashboard
                </h1>
                <p className="text-gray-600">
                  Track your profile performance, engagement metrics, and professional insights.
                </p>
              </div>

              {/* Key Metrics Overview */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Profile Views</p>
                      <p className="text-3xl font-bold text-gray-900">0</p>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-xl">👁️</span>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center">
                    <span className="text-sm text-gray-500">No data yet</span>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Engagement Rate</p>
                      <p className="text-3xl font-bold text-gray-900">0%</p>
                    </div>
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-xl">📈</span>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center">
                    <span className="text-sm text-gray-500">No data yet</span>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Downloads</p>
                      <p className="text-3xl font-bold text-gray-900">0</p>
                    </div>
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <span className="text-xl">⬇️</span>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center">
                    <span className="text-sm text-gray-500">No data yet</span>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Shares</p>
                      <p className="text-3xl font-bold text-gray-900">0</p>
                    </div>
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <span className="text-xl">🔗</span>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center">
                    <span className="text-sm text-gray-500">No data yet</span>
                  </div>
                </div>
              </div>

              {/* Charts and Detailed Analytics */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Profile Views Over Time</h3>
                  <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">📊</span>
                      </div>
                      <p className="text-gray-600">Chart will appear here once you have data</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Visitor Demographics</h3>
                  <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🌍</span>
                      </div>
                      <p className="text-gray-600">Demographics data will appear here</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📋</span>
                  </div>
                  <p className="text-gray-600">No recent activity</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Activity will appear here once you start sharing your profile
                  </p>
                </div>
              </div>
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