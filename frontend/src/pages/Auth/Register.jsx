import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import { apis } from "../../apis";
import toast from "react-hot-toast";
import AuthLayout from "../../layouts/AuthLayout";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../store/slices/auth";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleRegister = async (e) => {
    e.preventDefault();
    dispatch(signUp({
      email: e.target["email"].value,
      password: e.target["password"].value,
      repassword: e.target["password2"].value,
    }));
    // try {
    //   e.preventDefault();
    //   const res = await apis.UserRegister({
    //     email: e.target["email"].value,
    //     password: e.target["password"].value,
    //     repassword: e.target["password2"].value,
    //   });
    //   console.log(res);
    //   if (res.success) {
    //     toast.success(res.message);
    //     navigate("/login");
    //   } else {
    //     toast.error(res.message);
    //   }
    // } catch (err) {
    //   console.log(err);
    //   toast.error(err);
    // }
  };

  return (
    <AuthLayout>
      <div className="login-page">
        <form className="left-side" onSubmit={handleRegister}>
          <img className="logo" src="/src/assets/img/Logo.png" alt="" />
          <p className="auth-p">Sign up</p>
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
          <input
            className="input"
            placeholder="Enter your password again"
            type="password"
            name="password2"
            required
          />
          <input className="button" type="submit" value="Sign up" />
          <br />
          <Link className="auth-a" to="/auth/login">
            Already have an account ?
          </Link>
        </form>
        <div
          className="right-side"
          style={{
            backgroundImage: `url('/src/assets/img/Image 4.png')`,
            backgroundSize: "cover",
          }}
        ></div>
      </div>
    </AuthLayout>
  );
};

export default Register;
