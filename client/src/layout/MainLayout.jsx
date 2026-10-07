import { Outlet, useLocation } from "react-router-dom";

function MainLayout() {
  const location = useLocation();

  return (
    <div key={location.pathname} className="bg-white page-transition">
      <Outlet />
    </div>
  );
}

export default MainLayout;