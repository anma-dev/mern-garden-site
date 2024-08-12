import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
const PublicRoute = () => {
  const auth = useSelector((state) => state.auth);
  const token = auth.token;
  if (token) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};

export default PublicRoute;
