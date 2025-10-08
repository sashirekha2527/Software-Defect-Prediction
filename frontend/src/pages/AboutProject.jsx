import { Github, Users, Lightbulb, Target, Shield, Zap } from 'lucide-react';

const AboutProject = () => {
  const features = [
    {
      icon: Target,
      title: 'Accurate Predictions',
      description: 'Uses advanced ML algorithms to identify defect-prone software modules',
    },
    {
      icon: Zap,
      title: 'Multiple Models',
      description: 'Choose from Random Forest, Naïve Bayes, SVM, and PCA+SVM',
    },
    {
      icon: Shield,
      title: 'Reliable Results',
      description: 'Comprehensive metrics including accuracy, precision, recall, and F1-score',
    },
  ];

  const techStack = [
    { category: 'Frontend', items: ['React', 'Tailwind CSS', 'Recharts', 'Vite'] },
    { category: 'Backend', items: ['Python', 'Flask/FastAPI', 'Scikit-learn', 'Pandas'] },
    { category: 'ML Models', items: ['Random Forest', 'Naïve Bayes', 'SVM', 'PCA'] },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">About Project</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Software Defect Prediction Using Machine Learning
        </p>
      </div>

      <div className="bg-gradient-to-br from-primary-500 to-blue-600 rounded-lg shadow-lg p-8 text-white">
        <div className="flex items-start gap-4">
          <Lightbulb className="w-12 h-12 flex-shrink-0" />
          <div>
            <h3 className="text-2xl font-bold mb-3">Project Overview</h3>
            <p className="text-blue-50 leading-relaxed">
              This application leverages machine learning to predict software defects before they occur.
              By analyzing software metrics and patterns, it helps development teams identify high-risk
              modules and allocate testing resources more effectively. The system supports multiple ML
              algorithms, allowing users to compare performance and choose the best model for their data.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700"
            >
              <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg w-fit mb-4">
                <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.description}</p>
            </div>
          );
        })}
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
          <Users className="w-6 h-6 text-primary-500" />
          How It Works
        </h3>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold">
              1
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-1">Upload Dataset</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Upload a CSV file containing software metrics such as lines of code, complexity measures,
                and historical defect data.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold">
              2
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-1">Select Model</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Choose from multiple machine learning algorithms based on your requirements and dataset
                characteristics.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold">
              3
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-1">Train & Predict</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                The system trains the selected model on your data and generates predictions along with
                detailed performance metrics.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold">
              4
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-1">Analyze Results</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Review comprehensive metrics, confusion matrices, and visualizations to understand model
                performance and prediction results.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">
          Technology Stack
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {techStack.map((stack, index) => (
            <div key={index}>
              <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-3">
                {stack.category}
              </h4>
              <div className="space-y-2">
                {stack.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="px-3 py-2 bg-gray-50 dark:bg-gray-700 rounded text-sm text-gray-700 dark:text-gray-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
          <Github className="w-6 h-6 text-primary-500" />
          Source Code
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          This project is based on the GitHub repository by SinghJasmeet585. The backend implementation
          includes data preprocessing, model training, and prediction APIs.
        </p>
        <a
          href="https://github.com/SinghJasmeet585/Software-Defect-Prediction"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
        >
          <Github className="w-5 h-5" />
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default AboutProject;
