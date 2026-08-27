import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import AppRoute from './routes/AppRoute';
import AnalyticsTracker from './analytics/AnalyticsTracker';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AnalyticsTracker />
        <AppRoute />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;