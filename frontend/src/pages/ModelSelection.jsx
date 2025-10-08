import { useState } from 'react';
import { Brain, Play, CheckCircle, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';
import { api } from '../utils/api';

const ModelSelection = ({ datasetId, onPredictionComplete }) => {
  const [selectedModel, setSelectedModel] = useState('random_forest');
  const [training, setTraining] = useState(false);

  const models = [
    {
      id: 'random_forest',
      name: 'Random Forest',
      description: 'Ensemble learning method using multiple decision trees for robust predictions',
      features: ['High accuracy', 'Handles non-linear data', 'Feature importance'],
    },
    {
      id: 'naive_bayes',
      name: 'Naïve Bayes',
      description: 'Probabilistic classifier based on Bayes theorem with strong independence assumptions',
      features: ['Fast training', 'Works well with small datasets', 'Simple interpretation'],
    },
    {
      id: 'svm',
      name: 'Support Vector Machine',
      description: 'Finds optimal hyperplane to separate classes in high-dimensional space',
      features: ['Effective in high dimensions', 'Memory efficient', 'Versatile kernels'],
    },
    {
      id: 'pca_svm',
      name: 'PCA + SVM',
      description: 'Combines dimensionality reduction with SVM for improved performance',
      features: ['Reduced complexity', 'Better generalization', 'Handles multicollinearity'],
    },
  ];

  const handlePredict = async () => {
    if (!datasetId) {
      toast.error('Please upload a dataset first');
      return;
    }

    setTraining(true);

    try {
      const response = await api.predict(selectedModel, datasetId);
      toast.success('Model training completed successfully!');

      if (onPredictionComplete) {
        onPredictionComplete(response);
      }
    } catch (error) {
      toast.error(error.message || 'Failed to train model');
      console.error('Prediction error:', error);
    } finally {
      setTraining(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Model Selection</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Choose a machine learning model for defect prediction
        </p>
      </div>

      {!datasetId && (
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
          <p className="text-yellow-800 dark:text-yellow-300">
            Please upload a dataset first before selecting a model.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {models.map((model) => (
          <div
            key={model.id}
            onClick={() => setSelectedModel(model.id)}
            className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-2 cursor-pointer transition-all ${
              selectedModel === model.id
                ? 'border-primary-500 ring-2 ring-primary-200 dark:ring-primary-800'
                : 'border-gray-200 dark:border-gray-700 hover:border-primary-300'
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div
                  className={`p-2 rounded-lg ${
                    selectedModel === model.id
                      ? 'bg-primary-100 dark:bg-primary-900'
                      : 'bg-gray-100 dark:bg-gray-700'
                  }`}
                >
                  <Brain
                    className={`w-6 h-6 ${
                      selectedModel === model.id
                        ? 'text-primary-600 dark:text-primary-400'
                        : 'text-gray-600 dark:text-gray-400'
                    }`}
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {model.name}
                </h3>
              </div>
              {selectedModel === model.id && (
                <CheckCircle className="w-6 h-6 text-primary-500" />
              )}
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              {model.description}
            </p>

            <div className="space-y-2">
              {model.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
          Ready to Train
        </h3>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-700 dark:text-gray-300 mb-1">
              Selected Model: <span className="font-semibold">{models.find(m => m.id === selectedModel)?.name}</span>
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {datasetId ? `Dataset ID: ${datasetId}` : 'No dataset uploaded'}
            </p>
          </div>
          <button
            onClick={handlePredict}
            disabled={!datasetId || training}
            className="px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors font-medium flex items-center gap-2"
          >
            {training ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Training...
              </>
            ) : (
              <>
                <Play className="w-5 h-5" />
                Start Training
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModelSelection;
