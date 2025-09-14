import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CVUpload, CVAnalysisResults, GeneratedCVDisplay } from '@cvplus/cv-processing';

/**
 * CVProcessingPage - Orchestrates CV processing workflow
 *
 * Routes:
 * - /cv-processing - Main CV upload interface
 * - /cv-processing/analysis/:jobId - Analysis results
 * - /cv-processing/generated/:jobId - Generated CV display
 */
const CVProcessingPage: React.FC = () => {
  const handleUploadComplete = (jobId: string) => {
    // Navigate to analysis results when upload completes
    console.log('Upload completed for job:', jobId);
  };

  const handleUploadError = (error: Error) => {
    console.error('Upload error:', error);
  };

  const handleProcessingStart = (jobId: string) => {
    console.log('Processing started for job:', jobId);
  };

  return (
    <div className="h-full overflow-auto">
      <Routes>
        {/* Main CV Upload Route */}
        <Route
          path="/"
          element={
            <div className="max-w-4xl mx-auto p-6">
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  CV Processing
                </h1>
                <p className="text-gray-600">
                  Upload your CV and let AI enhance it with powerful insights and optimizations.
                </p>
              </div>

              <CVUpload
                onUploadComplete={handleUploadComplete}
                onUploadError={handleUploadError}
                onProcessingStart={handleProcessingStart}
                showFeatureSelection={true}
                showDetailedSteps={true}
                maxFileSize={10 * 1024 * 1024} // 10MB
              />
            </div>
          }
        />

        {/* Analysis Results Route */}
        <Route
          path="/analysis/:jobId"
          element={
            <div className="max-w-7xl mx-auto p-6">
              <CVAnalysisResults
                onExport={(format) => console.log(`Exporting as ${format}`)}
                onShare={() => console.log('Sharing results')}
                onGenerateMultimedia={(type) => console.log(`Generating ${type}`)}
                onApplyRecommendation={(id) => console.log(`Applying recommendation ${id}`)}
              />
            </div>
          }
        />

        {/* Generated CV Display Route */}
        <Route
          path="/generated/:jobId"
          element={
            <div className="h-full">
              <GeneratedCVDisplay />
            </div>
          }
        />

        {/* Fallback for unmatched routes */}
        <Route
          path="*"
          element={
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Page Not Found
                </h2>
                <p className="text-gray-600 mb-4">
                  The CV processing page you're looking for doesn't exist.
                </p>
                <button
                  onClick={() => window.history.back()}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Go Back
                </button>
              </div>
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default CVProcessingPage;