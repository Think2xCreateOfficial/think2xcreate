import { lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ROUTES, routeConfig } from '../config/routes.config';
import ScrollToTop from '../component/common/ScrollToTop';
import LazyLoadWrapper from '../component/common/LazyLoadWrapper';
import ErrorBoundary from '../component/common/ErrorBoundary';
import MainLayout from '../layout/MainLayout';
import Navbar from '../component/header/Navbar';
import Footer from '../component/footer/Footer';
import ChatButton from '../component/ui/ChatButton';
import BottomNav from '../component/ui/BottomNav';

// Lazy load pages for code splitting
const Home = lazy(() => import('../page/Home'));
const NotFound = lazy(() => import('../page/NotFoundPage'));
const TermsandPolicy = lazy(() => import("../page/TermsPage"));
const PrivacyPolicy = lazy(() => import("../page/PrivacyPolicyPage"));

function AppRoute() {
  const location = useLocation();
  
  return (
    <ErrorBoundary>
        <ScrollToTop />
        <div className='bg-white'>
            <Navbar />
            <main>
                <Routes location={location}>
                    <Route element={<MainLayout />}>
                        <Route 
                            path={ROUTES.HOME}
                            element={
                                <LazyLoadWrapper preload={routeConfig[ROUTES.HOME]?.preload}>
                                    <Home />
                                </LazyLoadWrapper>
                            }
                        />

                        <Route path={ROUTES.TERMS}
                            element={
                                <LazyLoadWrapper>
                                    <TermsandPolicy />
                                </LazyLoadWrapper>
                            }
                        />

                        <Route path={ROUTES.PRIVACY_POLICY}
                            element={
                                <LazyLoadWrapper>
                                    <PrivacyPolicy />
                                </LazyLoadWrapper>
                            }
                        />

                        <Route 
                            path={ROUTES.NOT_FOUND}
                            element={
                                <LazyLoadWrapper preload={routeConfig[ROUTES.NOT_FOUND]?.preload}>
                                    <NotFound />
                                </LazyLoadWrapper>
                            }
                        />
                    </Route>
                </Routes>
            </main>
            <Footer />
            <ChatButton />
            <BottomNav />
        </div>
    </ErrorBoundary>
  )
}

export default AppRoute