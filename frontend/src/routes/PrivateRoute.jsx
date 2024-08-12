import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
const PrivateRoute = () => {
  const auth = useSelector((state) => state.auth);
  const token = auth.token;
  if (!token) {
    return <Navigate to="/auth/login" replace />;
  }
  return <Outlet />;
};

export default PrivateRoute;
