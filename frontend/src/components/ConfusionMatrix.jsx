const ConfusionMatrix = ({ matrix }) => {
  if (!matrix || !Array.isArray(matrix) || matrix.length !== 2) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
          Confusion Matrix
        </h3>
        <p className="text-gray-600 dark:text-gray-400">No data available</p>
      </div>
    );
  }

  const [[tn, fp], [fn, tp]] = matrix;
  const total = tn + fp + fn + tp;

  const getIntensity = (value) => {
    const percentage = (value / total) * 100;
    if (percentage > 40) return 'bg-blue-600 text-white';
    if (percentage > 20) return 'bg-blue-400 text-white';
    if (percentage > 10) return 'bg-blue-200 text-gray-800';
    return 'bg-blue-100 text-gray-700';
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
        Confusion Matrix
      </h3>

      <div className="flex flex-col items-center">
        <div className="grid grid-cols-3 gap-2 w-full max-w-md">
          <div></div>
          <div className="text-center text-sm font-medium text-gray-600 dark:text-gray-400 py-2">
            Predicted: No Defect
          </div>
          <div className="text-center text-sm font-medium text-gray-600 dark:text-gray-400 py-2">
            Predicted: Defect
          </div>

          <div className="text-sm font-medium text-gray-600 dark:text-gray-400 flex items-center justify-end pr-2">
            Actual: No Defect
          </div>
          <div
            className={`aspect-square rounded-lg flex flex-col items-center justify-center ${getIntensity(tn)}`}
          >
            <div className="text-2xl font-bold">{tn}</div>
            <div className="text-xs mt-1">True Negative</div>
          </div>
          <div
            className={`aspect-square rounded-lg flex flex-col items-center justify-center ${getIntensity(fp)}`}
          >
            <div className="text-2xl font-bold">{fp}</div>
            <div className="text-xs mt-1">False Positive</div>
          </div>

          <div className="text-sm font-medium text-gray-600 dark:text-gray-400 flex items-center justify-end pr-2">
            Actual: Defect
          </div>
          <div
            className={`aspect-square rounded-lg flex flex-col items-center justify-center ${getIntensity(fn)}`}
          >
            <div className="text-2xl font-bold">{fn}</div>
            <div className="text-xs mt-1">False Negative</div>
          </div>
          <div
            className={`aspect-square rounded-lg flex flex-col items-center justify-center ${getIntensity(tp)}`}
          >
            <div className="text-2xl font-bold">{tp}</div>
            <div className="text-xs mt-1">True Positive</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfusionMatrix;
