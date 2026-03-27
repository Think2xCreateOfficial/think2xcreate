import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="h-min-screen bg-white">
        <Outlet />
    </div>
  )
}

export default MainLayout