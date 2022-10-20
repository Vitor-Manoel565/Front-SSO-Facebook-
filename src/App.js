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
    window.FB.getLoginStatus(function (response) {
      console.log("teste!");
      statusChangeCallback(response);
    });
  };

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
