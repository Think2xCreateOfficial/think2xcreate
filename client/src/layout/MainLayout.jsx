import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="bg-white">
        <Outlet />
    </div>
  )
}

export default MainLayout