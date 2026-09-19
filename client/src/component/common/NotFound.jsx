import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../config/routes.config";

function NotFound() {
  const navigate = useNavigate();

  const handleGoHome = (e) => {
    e.preventDefault();
    navigate(ROUTES.HOME || '/');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-white">
      <h1 className="text-6xl sm:text-7xl font-black text-gray-900 mb-4">404</h1>
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">Page Not Found</h2>
      <p className="text-gray-500 mb-8 max-w-md text-sm sm:text-base">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        to={ROUTES.HOME || '/'}
        onClick={handleGoHome}
        className="px-6 py-3.5 bg-yellow-400 hover:bg-yellow-500 text-black font-extrabold rounded-xl shadow-xs transition-all cursor-pointer"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;