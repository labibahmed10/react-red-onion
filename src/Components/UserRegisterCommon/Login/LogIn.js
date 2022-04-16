import { async } from "@firebase/util";
import React, { useRef } from "react";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../../firebase.init";
import logo from "../../../images/logo2.png";
import CommonSignIn from "../CommonSignIn/CommonSignIn";
import Loading from "../Loading/Loading";

const LogIn = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, Rerror] = useSendPasswordResetEmail(auth);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  if (loading) {
    return <Loading></Loading>;
  }

  const handleSignInUser = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!email && !password) {
      return toast.error("Please Fill Up the Form!", {
        autoClose: 2000,
      });
    }

    await signInWithEmailAndPassword(email, password);
  };

  const sendResetPassword = async () => {
    const email = emailRef.current.value;
    if (!email) {
      return toast.error("Write Your email to reset password", {
        autoClose: 2000,
      });
    }
    await sendPasswordResetEmail(email);
  };

  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div className="w-[28rem] mx-auto">
      <p>labib.ahmed.372@gmail.com</p>
      <div>
        <img className="w-56 object-contain mx-auto mt-24" src={logo} alt="" />
      </div>
      <div className="mt-12 px-8">
        <form action="" onSubmit={handleSignInUser}>
          <input
            ref={emailRef}
            className="w-full bg-slate-200 mb-3 py-4 px-3 mx-auto"
            type="email"
            placeholder="Email"
            autoComplete="false"
          />
          <input
            ref={passwordRef}
            className="w-full bg-slate-200 mb-3 py-4 px-3 mx-auto"
            type="password"
            placeholder="Password"
          />
          {/* error message here */}
          {error ? <p className="text-red-500">{error?.message}</p> : ""}

          {sending ? <p className="text-red-500">Check Your Email & Reset Password</p> : ""}

          <input type="submit" className="w-full bg-[#F91944] py-3 my-2 text-[aliceblue]" />
          <p className="text-center text-[#F91944]">
            New in Red Onion?{" "}
            <Link className="hover:underline underline-offset-1" to="/signup">
              Sign Up for free
            </Link>
          </p>
          <p className="text-center mt-1 mb-2 text-[#F91944]">
            <button onClick={sendResetPassword} className="hover:underline underline-offset-1">
              Forgot Your Password?
            </button>
          </p>
        </form>

        <CommonSignIn></CommonSignIn>
      </div>
      <ToastContainer theme="dark"></ToastContainer>
    </div>
  );
};

export default LogIn;
