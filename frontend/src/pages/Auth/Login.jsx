import toast from "react-hot-toast";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from '../../layouts/AuthLayout'
import { apis } from "../../apis";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../store/slices/auth";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = async (e) => {
    e.preventDefault();
      dispatch(signIn({
        email: e.target["email"].value,
        password: e.target["password"].value,
      }));
  };

  return (
    <AuthLayout>
      <form className="login-page" onSubmit={handleLogin}>
        <div className="left-side">
          <img className="logo" src="/src/assets/img/Logo.png" alt="" />
          <p className="auth-p">Welcome to Back</p>
          <input
            className="input"
            placeholder="Enter your email"
            type="email"
            name="email"
            required
          />
          <input
            className="input"
            placeholder="Enter your password"
            type="password"
            name="password"
            required
          />
          <div className="remember-container">
            <div className="remember-me">
              <input type="checkbox" className="rememberMe" />
              &nbsp;Remember me
            </div>
            <Link className="auth-a" to="/auth/forgot-password">
              Forgot your password
            </Link>
          </div>
          <br />
          <input
            className="button"
            type="submit"
            value="Login"
          />
          <br />
          <Link className="auth-a" to="/auth/register">
            Don&apos;t have an account ?
          </Link>
        </div>
        <div
          className="right-side"
          style={{
            backgroundImage: `url('/src/assets/img/Image Placeholder (7).png')`,
            backgroundSize: "cover",
          }}
        ></div>
        </form>
    </AuthLayout>
  );
};

export default Login;
