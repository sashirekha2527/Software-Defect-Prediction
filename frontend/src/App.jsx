import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import UploadDataset from './pages/UploadDataset';
import ModelSelection from './pages/ModelSelection';
import ResultsDashboard from './pages/ResultsDashboard';
import AboutProject from './pages/AboutProject';

function App() {
  const [activeTab, setActiveTab] = useState('upload');
  const [datasetId, setDatasetId] = useState(null);
  const [results, setResults] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleUploadSuccess = (uploadResponse) => {
    setDatasetId(uploadResponse.dataset_id);
    setActiveTab('model');
  };

  const handlePredictionComplete = (predictionResults) => {
    setResults(predictionResults);
    setActiveTab('results');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'upload':
        return <UploadDataset onUploadSuccess={handleUploadSuccess} />;
      case 'model':
        return (
          <ModelSelection
            datasetId={datasetId}
            onPredictionComplete={handlePredictionComplete}
          />
        );
      case 'results':
        return <ResultsDashboard results={results} />;
      case 'about':
        return <AboutProject />;
      default:
        return <UploadDataset onUploadSuccess={handleUploadSuccess} />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#333',
              color: '#fff',
            },
            success: {
              duration: 3000,
              iconTheme: {
                primary: '#10b981',
                secondary: '#fff',
              },
            },
            error: {
              duration: 4000,
              iconTheme: {
                primary: '#ef4444',
                secondary: '#fff',
              },
            },
          }}
        />

        <div className="flex h-screen overflow-hidden">
          <div
            className={`fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden transition-opacity ${
              sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            onClick={() => setSidebarOpen(false)}
          ></div>

          <div
            className={`fixed lg:static inset-y-0 left-0 z-30 transform transition-transform lg:transform-none ${
              sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
            }`}
          >
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>

          <div className="flex-1 flex flex-col overflow-hidden">
            <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

            <main className="flex-1 overflow-y-auto">
              <div className="max-w-7xl mx-auto px-6 py-8">
                {renderContent()}
              </div>
            </main>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
