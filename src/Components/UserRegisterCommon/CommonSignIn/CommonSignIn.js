import React from "react";

const CommonSignIn = () => {
  return (
    <div>
      <div className="flex items-center px-12 ">
        <hr className="w-1/2" />
        <p className="px-2">or</p>
        <hr className="w-1/2" />
      </div>
      <div className="flex items-center justify-center space-x-5">
        <div>
          <img
            className="w-12"
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-8"
            src="https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-icon-file-facebook-icon-svg-wikimedia-commons-4.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-12 object-cover"
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt=""
          />
        </div>
        <div>
          <img className="w-12" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default CommonSignIn;
