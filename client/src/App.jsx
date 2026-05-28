import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import AppRoute from './routes/AppRoute';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AppRoute />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;