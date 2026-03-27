import { Link } from "react-router-dom";
import { ROUTES } from "../../config/routes.config";
import SEO from "./SEO";

function NotFound() {
  return (
    <>
        <SEO customMetadata={{
            title: '404 - Page Not Found',
            description: 'The page you are looking for does not exist.',
        }} />

        <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
            <p className="text-gray-500 mb-8">The page you are looking for doesn't exist or has been moved.</p>
            <Link 
            to={ROUTES.HOME}
            className="px-6 py-3 bg-yellow-400 text-black font-medium rounded-lg hover:bg-yellow-500 transition-colors"
            >
            Go Back Home
            </Link>
        </div>
    </>
  )
}

export default NotFound