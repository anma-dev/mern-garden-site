import { Routes, Route } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import ForgotPassword from "../pages/Auth/ForgotPasssword";
import GardenMap from "../pages/GardenMap";
import Plant from "../pages/Plant";
import Plant1 from "../pages/Plant1";
import Landing from "../pages/Landing";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export default function Router() {
  return (
    <Routes>
      <Route exact path="/" Component={PrivateRoute}>
        <Route path="/" Component={Plant} />
        <Route path="/garden-map" Component={GardenMap} />
        <Route path="/plant" Component={Plant} />
        <Route path="/plant1" Component={Plant1} />
        <Route path="/landing" Component={Landing} />
      </Route>
      <Route exact path="/" Component={PublicRoute}>
        <Route path="/auth/login" Component={Login} />
        <Route path="/auth/register" Component={Register} />
        <Route path="/auth/forgot-password" Component={ForgotPassword} />
      </Route>
    </Routes>
  );
}
