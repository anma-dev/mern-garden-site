import { Link } from "react-router-dom";
import "./index.css";
import { ArrowDropDown } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../../store/slices/auth";

const Header = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch(signOut());
  };
  return (
    <div
      className="header-grid"
      style={{
        background:
          location.pathname === "/plant1" || location.pathname === "/garden-map"
            ? "white"
            : "",
        position: location.pathname === "/garden-map" ? "" : "fixed",
      }}
    >
      <div className="header-item">
        <img className="header-logo" src="/src/assets/img/Logo.png" alt="" />
      </div>
      <div className="header-item">
        <div className="navbar">
          <Link
            className="nav-item"
            style={{
              color:
                location.pathname === "/plant1" ||
                location.pathname === "/garden-map"
                  ? "black"
                  : "white",
            }}
          >
            Home
          </Link>
          <Link
            className="nav-item"
            style={{
              color:
                location.pathname === "/plant1" ||
                location.pathname === "/garden-map"
                  ? "black"
                  : "white",
            }}
          >
            About Us
          </Link>
          <Link
            className="nav-item"
            style={{
              color:
                location.pathname === "/plant1" ||
                location.pathname === "/garden-map"
                  ? "black"
                  : "white",
            }}
          >
            <div className="dropdown">
              <button
                className="dropbtn"
                style={{
                  color:
                    location.pathname === "/plant1" ||
                    location.pathname === "/garden-map"
                      ? "black"
                      : "white",
                }}
              >
                Pages
              </button>
              <div className="dropdown-content">
                <Link to="/plant">Plant</Link>
                <Link to="/plant1">Plant1</Link>
                <Link to="/garden-map">GardenMap</Link>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="header-item btn-grid">
        {auth?.token ?  (
          <div onClick={handleSignOut}>
            <input className="header-signup" type="button" value="Logout" />
          </div>
        ): (
          <>
            <Link to="/auth/login">
              <input className="header-login" type="button" value="Login" />
            </Link>
            <Link to="/auth/register">
              <input className="header-signup" type="button" value="Sign up" />
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
