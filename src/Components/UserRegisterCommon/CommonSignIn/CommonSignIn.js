import React from "react";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
  useSignInWithTwitter,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const CommonSignIn = () => {
  const [signInWithGithub, user, loading, error] = useSignInWithGithub(auth);
  const [signInWithGoogle, Guser, Gloading, Gerror] = useSignInWithGoogle(auth);
  const [signInWithFacebook, FFloading, Ferror] = useSignInWithFacebook(auth);
  const [signInWithTwitter, Tuser, Tloading, Terror] = useSignInWithTwitter(auth);

  return (
    <div className="pb-16">
      <div className="flex items-center px-12 ">
        <hr className="w-1/2" />
        <p className="px-2">or</p>
        <hr className="w-1/2" />
      </div>
      <div className="flex items-center justify-center space-x-5">
        <div onClick={() => signInWithGoogle()}>
          <img
            className="w-12 cursor-pointer"
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
            alt=""
          />
        </div>
        <div onClick={() => signInWithFacebook()}>
          <img
            className="w-8 cursor-pointer"
            src="https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-icon-file-facebook-icon-svg-wikimedia-commons-4.png"
            alt=""
          />
        </div>
        <div onClick={() => signInWithGithub()}>
          <img
            className="w-12 object-cover cursor-pointer"
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt=""
          />
        </div>
        <div onClick={() => signInWithTwitter()}>
          <img
            className="w-12 cursor-pointer"
            src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default CommonSignIn;
