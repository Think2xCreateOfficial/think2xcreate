import { Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ROUTES } from '../config/routes.config';
import ScrollToTop from '../component/common/ScrollToTop';
import ErrorBoundary from '../component/common/ErrorBoundary';
import MainLayout from '../layout/MainLayout';
import Navbar from '../component/header/Navbar';
import Footer from '../component/footer/Footer';
import ChatButton from '../component/ui/ChatButton';
import BottomNav from '../component/ui/BottomNav';
import Loader from '../component/common/Loader';
import Home from '../page/Home';
import { lazyWithRetry } from '../utils/lazyWithRetry';

// Lazy load secondary pages with automatic chunk retry for resilient production rendering
const NotFound = lazyWithRetry(() => import('../page/NotFoundPage'));
const TermsandPolicy = lazyWithRetry(() => import('../page/TermsPage'));
const PrivacyPolicy = lazyWithRetry(() => import('../page/PrivacyPolicyPage'));
const ServicePage = lazyWithRetry(() => import('../page/ServicePage'));
const OurWorkPage = lazyWithRetry(() => import('../page/OurWorkPage'));
const ContactPage = lazyWithRetry(() => import('../page/ContactPage'));

function AppRoute() {
  const location = useLocation();

  return (
    <ErrorBoundary>
      <ScrollToTop />
      <div className='bg-white'>
        <Navbar />
        <main className='min-h-screen'>
          <Suspense fallback={<Loader fullScreen={false} />}>
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