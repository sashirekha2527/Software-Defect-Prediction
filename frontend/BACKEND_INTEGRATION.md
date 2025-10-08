# Backend Integration Guide

This document explains how to connect the frontend to your Python backend.

## Expected Backend API Endpoints

The frontend is configured to communicate with the following endpoints:

### 1. Upload Dataset
```
POST /upload
Content-Type: multipart/form-data

Body:
- file: CSV file

Response:
{
  "dataset_id": "string",
  "rows": number,
  "columns": number,
  "message": "string"
}
```

### 2. Train Model & Predict
```
POST /predict
Content-Type: application/json

Body:
{
  "model": "random_forest" | "naive_bayes" | "svm" | "pca_svm",
  "dataset_id": "string"
}

Response:
{
  "model": "string",
  "dataset_id": "string",
  "metrics": {
    "accuracy": number (0-1),
    "precision": number (0-1),
    "recall": number (0-1),
    "f1_score": number (0-1)
  },
  "confusion_matrix": [[TN, FP], [FN, TP]],
  "feature_importance": {
    "feature_name": number,
    ...
  }
}
```

### 3. Get Results (Optional)
```
GET /results/:id
GET /results

Response:
{
  "id": "string",
  "model": "string",
  "metrics": {...},
  ...
}
```

## Configuration

1. Set the backend URL in `.env`:
```env
VITE_API_URL=http://localhost:5000
```

2. Make sure your backend:
   - Accepts CORS requests from the frontend origin
   - Returns JSON responses matching the expected format
   - Handles file uploads correctly

## Example Flask Backend Setup

```python
from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)
CORS(app)

@app.route('/upload', methods=['POST'])
def upload():
    file = request.files['file']
    df = pd.read_csv(file)

    return jsonify({
        'dataset_id': 'unique_id_here',
        'rows': len(df),
        'columns': len(df.columns),
        'message': 'Dataset uploaded successfully'
    })

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    model_type = data['model']
    dataset_id = data['dataset_id']

    # Your ML prediction logic here

    return jsonify({
        'model': model_type,
        'dataset_id': dataset_id,
        'metrics': {
            'accuracy': 0.95,
            'precision': 0.93,
            'recall': 0.92,
            'f1_score': 0.925
        },
        'confusion_matrix': [[80, 5], [10, 85]]
    })

if __name__ == '__main__':
    app.run(port=5000, debug=True)
```

## Testing Without Backend

For testing purposes, you can use mock data by modifying `src/utils/api.js` to return dummy responses.

## Troubleshooting

### CORS Issues
If you encounter CORS errors, ensure your backend includes:
```python
from flask_cors import CORS
CORS(app)
```

### Connection Refused
- Verify the backend is running on the correct port
- Check the `VITE_API_URL` in `.env` matches your backend URL
- Ensure no firewall is blocking the connection

### Invalid Response Format
- Make sure backend responses match the expected JSON structure
- Check that numeric values are sent as numbers, not strings
- Verify the confusion matrix is a 2D array with correct format
