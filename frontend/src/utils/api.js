const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const api = {
  async uploadDataset(file, onProgress) {
    const formData = new FormData();
    formData.append('file', file);

    const xhr = new XMLHttpRequest();

    return new Promise((resolve, reject) => {
      xhr.upload.addEventListener('progress', (e) => {
        if (e.lengthComputable && onProgress) {
          const percentComplete = (e.loaded / e.total) * 100;
          onProgress(percentComplete);
        }
      });

      xhr.addEventListener('load', () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          try {
            const response = JSON.parse(xhr.responseText);
            resolve(response);
          } catch (error) {
            reject(new Error('Invalid response format'));
          }
        } else {
          reject(new Error(`Upload failed: ${xhr.statusText}`));
        }
      });

      xhr.addEventListener('error', () => {
        reject(new Error('Network error during upload'));
      });

      xhr.open('POST', `${API_BASE_URL}/upload`);
      xhr.send(formData);
    });
  },

  async predict(modelType, datasetId) {
    const response = await fetch(`${API_BASE_URL}/predict`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ model: modelType, dataset_id: datasetId }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Prediction failed');
    }

    return response.json();
  },

  async getResults(resultId) {
    const response = await fetch(`${API_BASE_URL}/results/${resultId}`);

    if (!response.ok) {
      throw new Error('Failed to fetch results');
    }

    return response.json();
  },

  async getAllResults() {
    const response = await fetch(`${API_BASE_URL}/results`);

    if (!response.ok) {
      throw new Error('Failed to fetch results');
    }

    return response.json();
  },
};
