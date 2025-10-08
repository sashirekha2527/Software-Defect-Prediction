# Software Defect Prediction - Frontend Overview

## Project Summary

A modern, responsive React application for predicting software defects using machine learning. The frontend provides an intuitive interface for uploading datasets, selecting ML models, and visualizing prediction results.

## Directory Structure

```
frontend/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.jsx      # Top navigation with theme toggle
│   │   ├── Sidebar.jsx     # Side navigation menu
│   │   ├── MetricCard.jsx  # Performance metric display card
│   │   └── ConfusionMatrix.jsx  # Confusion matrix visualization
│   ├── pages/              # Main page components
│   │   ├── UploadDataset.jsx    # Dataset upload interface
│   │   ├── ModelSelection.jsx   # ML model selection
│   │   ├── ResultsDashboard.jsx # Results visualization
│   │   └── AboutProject.jsx     # Project information
│   ├── contexts/
│   │   └── ThemeContext.jsx     # Dark/Light theme management
│   ├── utils/
│   │   └── api.js              # Backend API integration
│   ├── App.jsx                 # Main application component
│   └── index.css               # Global styles with Tailwind
├── public/                     # Static assets
├── .env                        # Environment configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
├── vite.config.js              # Vite build configuration
├── package.json                # Project dependencies
├── README.md                   # Project documentation
└── BACKEND_INTEGRATION.md      # Backend API guide

Data/ (in root project)
├── data/                       # Sample datasets
│   ├── ar1.csv, ar3.csv...    # NASA MDP datasets
│   ├── kc1.csv, kc2.csv...
│   └── pc1.csv, pc2.csv...
└── Dataset                     # Dataset information

Python files (in root project)
├── preprocessingfile.py        # Data preprocessing
├── models.py                   # ML model implementations
├── logistic_regression_ensembler.py
└── performance_check.py        # Model evaluation
```

## Key Features

### 1. Dataset Upload
- Drag-and-drop CSV file upload
- Real-time upload progress tracking
- File validation
- Success/error notifications

### 2. Model Selection
- Four ML algorithms:
  - Random Forest
  - Naïve Bayes
  - Support Vector Machine (SVM)
  - PCA + SVM
- Visual model cards with descriptions
- One-click training

### 3. Results Dashboard
- Performance metrics (Accuracy, Precision, Recall, F1-Score)
- Interactive confusion matrix heatmap
- Bar and line charts for metric comparison
- Feature importance visualization
- Downloadable JSON reports

### 4. UI/UX Features
- Dark/Light theme toggle
- Fully responsive design (mobile, tablet, desktop)
- Loading states and animations
- Toast notifications for feedback
- Clean, professional design

## Technology Stack

### Core
- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework

### UI Components
- **Lucide React** - Icon library
- **Recharts** - Chart library for visualizations
- **React Hot Toast** - Toast notifications

### State Management
- React Context API (for theme)
- Component state with useState

## Getting Started

### Installation
```bash
cd frontend
npm install
```

### Development
```bash
npm run dev
```
Opens at `http://localhost:5173`

### Production Build
```bash
npm run build
```
Outputs to `dist/` directory

### Preview Production Build
```bash
npm run preview
```

## Environment Variables

Create a `.env` file:
```
VITE_API_URL=http://localhost:5000
```

## API Integration

The frontend expects a Python backend with these endpoints:

1. **POST /upload** - Upload CSV dataset
2. **POST /predict** - Train model and get predictions
3. **GET /results/:id** - Fetch specific results (optional)
4. **GET /results** - Fetch all results (optional)

See `BACKEND_INTEGRATION.md` for detailed API specifications.

## Design Principles

### Color Scheme
- Primary: Blue tones (#0ea5e9)
- Neutral: Gray scale for backgrounds
- Semantic: Green (success), Orange (warning), Red (error)

### Layout
- Dashboard-style with sidebar navigation
- Card-based content presentation
- Maximum width containers for readability
- Consistent spacing using 8px grid

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Collapsible sidebar on mobile
- Stacked cards on small screens

## Component Architecture

### App.jsx
Main application component that:
- Manages global state (dataset ID, results)
- Handles navigation between pages
- Coordinates data flow between components

### Pages
Each page is a complete view:
- Self-contained functionality
- Receives props from App
- Calls API utilities
- Displays loading/error states

### Components
Reusable UI elements:
- Props-based configuration
- Dark mode support
- Accessible markup

## State Flow

```
1. User uploads file → UploadDataset
2. On success → setDatasetId → navigate to ModelSelection
3. User selects model → ModelSelection → API call
4. On prediction complete → setResults → navigate to ResultsDashboard
5. ResultsDashboard displays metrics and visualizations
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Code splitting with Vite
- Lazy loading for charts
- Optimized re-renders with React
- CSS purging with Tailwind

## Future Enhancements

Potential improvements:
- User authentication
- Save and compare multiple results
- Export reports to PDF
- Real-time training progress
- Dataset preview before upload
- Model comparison view
- Historical results tracking

## Related Files

Backend implementations are in the root directory:
- `preprocessingfile.py` - Data preprocessing
- `models.py` - ML model implementations
- `performance_check.py` - Model evaluation
- `logistic_regression_ensembler.py` - Ensemble methods

Sample datasets are in `Data/data/` directory.

## Support

For issues or questions:
1. Check the README.md
2. Review BACKEND_INTEGRATION.md for API issues
3. Refer to the GitHub repository for backend setup

## License

MIT
