import { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ROUTES, routeConfig } from '../config/routes.config';
import ScrollToTop from '../component/common/ScrollToTop';
import ErrorBoundary from '../component/common/ErrorBoundary';
import MainLayout from '../layout/MainLayout';
import Navbar from '../component/header/Navbar';
import Footer from '../component/footer/Footer';
import ChatButton from '../component/ui/ChatButton';
import BottomNav from '../component/ui/BottomNav';
import Loader from '../component/common/Loader';

// Lazy load all pages for smooth production performance & Suspense loader fallback
const Home = lazy(() => import('../page/Home'));
const NotFound = lazy(() => import('../page/NotFoundPage'));
const TermsandPolicy = lazy(() => import('../page/TermsPage'));
const PrivacyPolicy = lazy(() => import('../page/PrivacyPolicyPage'));
const ServicePage = lazy(() => import('../page/ServicePage'));
const OurWorkPage = lazy(() => import('../page/OurWorkPage'));
const ContactPage = lazy(() => import('../page/ContactPage'));

function AppRoute() {
  const location = useLocation();

  return (
    <ErrorBoundary>
      <ScrollToTop />
      <div className='bg-white'>
        <Navbar />
        <main className='min-h-screen'>
          <Suspense fallback={<Loader fullScreen={true} />}>
            <Routes location={location}>
              <Route element={<MainLayout />}>
                <Route 
                  path={ROUTES.HOME} 
                  element={<Home />} 
                />
                <Route 
                  path={ROUTES.SERVICE_DETAIL} 
                  element={<ServicePage />} 
                />
                <Route 
                  path={ROUTES.OUR_WORK} 
                  element={<OurWorkPage />} 
                />
                <Route 
                  path={ROUTES.CONTACT} 
                  element={<ContactPage />} 
                />
                <Route 
                  path={ROUTES.PRIVACY_POLICY} 
                  element={<PrivacyPolicy />} 
                />
                <Route 
                  path={ROUTES.TERMS} 
                  element={<TermsandPolicy />} 
                />
                <Route 
                  path={ROUTES.NOT_FOUND} 
                  element={<NotFound />} 
                />
              </Route>
            </Routes>
          </Suspense>
          <ChatButton />
        </main>
        <Footer />
        <BottomNav />
      </div>
    </ErrorBoundary>
  );
}

export default AppRoute;