import React, { useRef } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../../firebase.init";
import logo from "../../../images/logo2.png";
import CommonSignIn from "../CommonSignIn/CommonSignIn";
import Loading from "../Loading/Loading";

const SignUp = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const conPassRef = useRef();
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth, {
    sendEmailVerification: true,
  });

  const handleSignUpSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const conPassword = conPassRef.current.value;

    if (!email || !password) {
      return toast.error("Please Fill Up the Form!", {
        autoClose: 2000,
      });
    }

    if (password.length < 8) {
      toast.warn("Too short Password!", {
        position: "top-center",
        autoClose: 2000,
      });
    }
    if (password !== conPassword) {
      toast.error("Password Did Not Matched!", {
        position: "top-center",
        autoClose: 2000,
      });
      return;
    } else {
      createUserWithEmailAndPassword(email, password);
    }
  };

  if (loading) {
    return <Loading></Loading>;
  }

  if (user) {
    navigate("/login");
  }

  return (
    <div className="w-[28rem] mx-auto">
      <p>labib.ahmed.372@gmail.com</p>
      <div>
        <img className="w-56 object-contain mx-auto mt-24" src={logo} alt="" />
      </div>

      <div className="mt-12 px-8">
        <form action="" onSubmit={handleSignUpSubmit}>
          <input
            ref={nameRef}
            className="w-full bg-slate-200 mb-3 py-4 px-3 mx-auto"
            type="text"
            placeholder="Name"
          />

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
            name="password"
            type="password"
            placeholder="Password"
            autoComplete="false"
          />
          <input
            ref={conPassRef}
            className="w-full bg-slate-200 mb-3 py-4 px-3 mx-auto"
            type="password"
            name="conPass"
            placeholder="Confirm Password"
          />
          
          {error ? <p className="text-red-500">{error?.message}</p> : ""}
          <input type="submit" className="w-full bg-[#F91944] py-3 my-2 text-[aliceblue]" value="Sign Up" />

          <p className="text-center text-[#F91944]">
            Already Have an Account?{" "}
            <Link className="hover:underline" to="/login">
              LogIn
            </Link>
          </p>
        </form>
        <ToastContainer theme="dark"></ToastContainer>
      </div>
      <CommonSignIn></CommonSignIn>
    </div>
  );
};

export default SignUp;
