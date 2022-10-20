import { useEffect } from "react";

const FacebookLoginPage = () => {
  // Login with Facebook with react
  useEffect(() => {
    // Load the SDK asynchronously
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }, []);

  // Initialize and add the facebook script

  useEffect(() => {
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: "1147465239309646",
        cookie: true,
        xfbml: true,
        version: "v9.0",
      });

      window.FB.AppEvents.logPageView();
    };
  }, []);

  // Check login state
  const checkLoginState = () => {
    getAcessToken();
    window.FB.getLoginStatus(function (response) {
      statusChangeCallback(response);
    });
  };

  const getAcessToken= ()=>{
    window.FB.getLoginStatus(function(response) {
      if (response.status === 'connected') {
        console.log('Logged in.');
        var uid = response.authResponse.userID;
        var accessToken = response.authResponse.accessToken;
      } else if (response.status === 'not_authorized') {
        // The user hasn't authorized your application.  They
        // must click the Login button, or you must call FB.login
        // in response to a user gesture, to launch a login dialog.
        console.log('Not authorized.');
      } else {
        // The user isn't logged in to Facebook. You can launch a
        // login dialog with a user gesture, but the user may have
        // to log in to Facebook before authorizing your application.
        console.log('Not logged in.');
      }
     });
  } 

  // Handle the response
  const statusChangeCallback = (response) => {
    console.log(response);
    if (response.status === "connected") {
      testAPI();
    } else {
      document.getElementById("status").innerHTML =
        "Please log " + "into this app.";
    }
  };

  // Test API
  const testAPI = () => {
    console.log("Welcome!  Fetching your information.... ");
    window.FB.api("/me", function (response) {
      console.log("Successful login for: " + response.name);
      document.getElementById("status").innerHTML =
        "Thanks for logging in, " + response.name + "!";
    });
  };


  return (
    <div>
      <h1>Facebook Login</h1>
      <div
        className="fb-login-button"
        data-width=""
        data-size="large"
        data-button-type="continue_with"
        data-layout="default"
        data-auto-logout-link="false"
        data-use-continue-as="false"
        onClick={checkLoginState}
      ></div>
      <div id="status"></div>
    </div>
  );
};

export default FacebookLoginPage;
