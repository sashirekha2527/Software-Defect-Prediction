# Quick Start Guide - Software Defect Prediction

## Overview

This project consists of a React frontend dashboard for the Software Defect Prediction system. The backend uses Python ML models from the GitHub repository.

## What Has Been Built

A complete, modern frontend application with:
- Dataset upload interface with drag-and-drop
- ML model selection (Random Forest, Naïve Bayes, SVM, PCA+SVM)
- Interactive results dashboard with charts and metrics
- Dark/Light theme toggle
- Fully responsive design
- Professional UI with Tailwind CSS

## Quick Start

### 1. Start the Frontend

```bash
cd frontend
npm install
npm run dev
```

The application will open at `http://localhost:5173`

### 2. Set Up Backend

The frontend expects a Python backend at `http://localhost:5000` with these endpoints:

- `POST /upload` - Upload CSV dataset
- `POST /predict` - Train model and predict
- `GET /results` - Fetch results (optional)

See `frontend/BACKEND_INTEGRATION.md` for detailed API specifications.

### 3. Usage Flow

1. **Upload Dataset**
   - Go to "Upload Dataset" tab
   - Upload a CSV file with software metrics
   - Wait for upload confirmation

2. **Select Model**
   - Navigate to "Model Selection"
   - Choose an ML algorithm
   - Click "Start Training"

3. **View Results**
   - See comprehensive metrics (Accuracy, Precision, Recall, F1)
   - Analyze confusion matrix
   - View performance charts
   - Download results as JSON

## File Structure

```
project/
├── frontend/                  # React application
│   ├── src/
│   │   ├── components/       # UI components
│   │   ├── pages/            # Main pages
│   │   ├── contexts/         # React contexts
│   │   └── utils/            # API utilities
│   ├── dist/                 # Production build
│   └── package.json
├── Data/data/                # Sample datasets
├── preprocessingfile.py      # Backend preprocessing
├── models.py                 # Backend ML models
└── FRONTEND_OVERVIEW.md      # Detailed documentation
```

## Configuration

Edit `frontend/.env`:
```env
VITE_API_URL=http://localhost:5000
```

## Testing Without Backend

You can test the UI by:
1. Running the frontend: `npm run dev`
2. Navigating through the interface
3. Upload page will show UI (won't upload without backend)
4. Model selection will show available models
5. Results will show sample visualization structure

## Production Build

```bash
cd frontend
npm run build
```

Output in `frontend/dist/` - ready to deploy!

## Sample Datasets

Sample NASA MDP datasets are available in `Data/data/`:
- ar1.csv, ar3.csv, ar4.csv, ar5.csv, ar6.csv
- cm1.csv
- kc1.csv, kc2.csv
- mc1.csv, mc2.csv
- pc1.csv, pc2.csv, pc3.csv, pc4.csv

## Features Implemented

### UI Components
- Responsive sidebar navigation
- Theme toggle (dark/light mode)
- Loading indicators and progress bars
- Toast notifications for feedback
- File upload with drag-and-drop

### Visualizations
- Metric cards for key performance indicators
- Confusion matrix heatmap
- Bar charts for metric comparison
- Line charts for trends
- Feature importance display

### User Experience
- Clean, professional design
- Mobile-responsive layout
- Smooth transitions and animations
- Intuitive navigation flow
- Error handling and validation

## Next Steps

To complete the full system:

1. **Backend Implementation**
   - Create Flask/FastAPI server
   - Implement `/upload` endpoint
   - Implement `/predict` endpoint
   - Use existing models.py for ML logic

2. **Integration**
   - Start backend server on port 5000
   - Ensure CORS is enabled
   - Test API endpoints with frontend

3. **Deployment**
   - Build frontend: `npm run build`
   - Deploy `dist/` to hosting (Vercel, Netlify, etc.)
   - Deploy backend to Python hosting (Heroku, Railway, etc.)

## Troubleshooting

**Frontend won't start:**
- Run `npm install` in frontend directory
- Check Node.js version (16+)

**Can't connect to backend:**
- Verify backend is running on port 5000
- Check `.env` file has correct API URL
- Enable CORS in backend

**Build errors:**
- Clear node_modules: `rm -rf node_modules && npm install`
- Clear cache: `rm -rf .vite`

## Documentation

- `frontend/README.md` - Frontend documentation
- `frontend/BACKEND_INTEGRATION.md` - API specifications
- `FRONTEND_OVERVIEW.md` - Complete project overview
- Original repo: https://github.com/SinghJasmeet585/Software-Defect-Prediction

## Technology Stack

- **Frontend:** React 19, Vite, Tailwind CSS 4
- **Charts:** Recharts
- **Icons:** Lucide React
- **Backend:** Python, Flask/FastAPI (to be implemented)
- **ML:** Scikit-learn, Pandas, NumPy

## Support

For questions about:
- **Frontend:** Check frontend/README.md
- **API Integration:** See frontend/BACKEND_INTEGRATION.md
- **Backend Models:** Refer to original GitHub repository
