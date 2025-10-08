# Software Defect Prediction - Frontend

A modern, responsive web application for predicting software defects using machine learning models.

## Features

- Upload CSV datasets containing software metrics
- Select from multiple ML models (Random Forest, Naïve Bayes, SVM, PCA+SVM)
- View comprehensive prediction results with visualizations
- Interactive charts and confusion matrices
- Dark/Light theme toggle
- Mobile-responsive design
- Download prediction reports

## Tech Stack

- **React** - UI library
- **Tailwind CSS** - Styling
- **Recharts** - Data visualization
- **Vite** - Build tool
- **React Hot Toast** - Notifications
- **Lucide React** - Icons

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Configure the API endpoint:
Create a `.env` file with:
```
VITE_API_URL=http://localhost:5000
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Navbar.jsx
│   ├── Sidebar.jsx
│   ├── MetricCard.jsx
│   └── ConfusionMatrix.jsx
├── pages/           # Page components
│   ├── UploadDataset.jsx
│   ├── ModelSelection.jsx
│   ├── ResultsDashboard.jsx
│   └── AboutProject.jsx
├── contexts/        # React contexts
│   └── ThemeContext.jsx
├── utils/           # Utility functions
│   └── api.js
└── App.jsx          # Main application component
```

## API Integration

The frontend connects to a Python backend with the following endpoints:

- `POST /upload` - Upload dataset
- `POST /predict` - Train model and get predictions
- `GET /results/:id` - Fetch specific results
- `GET /results` - Fetch all results

## Usage

1. **Upload Dataset**: Upload a CSV file with software metrics
2. **Select Model**: Choose an ML algorithm (Random Forest, Naïve Bayes, SVM, or PCA+SVM)
3. **Train**: Click "Start Training" to run the prediction
4. **View Results**: Analyze metrics, confusion matrix, and performance charts
5. **Download**: Export results as JSON for further analysis

## Backend

This frontend is designed to work with the backend from:
[Software-Defect-Prediction](https://github.com/SinghJasmeet585/Software-Defect-Prediction)

Ensure the backend is running before using the frontend.

## License

MIT
