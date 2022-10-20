import { useEffect, useState } from "react";

const FacebookLoginPage = () => {
  // Login with Facebook with react
  const [initialized, setInitialized] = useState(false);
  useEffect(() => {
    // Load the SDK asynchronously
   
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
      console.log("FB initialized");
      setInitialized(true);
    };
  }, []);



  const statusChangeCallback = (response) => {
    console.log("statusChangeCallback", response);
    if (response.status === "connected") {
      console.log("Logged in and authenticated");
      testAPI();
    } else {
      console.log("Not authenticated");
    }

  };
  const checkLoginState = () => {
    window.FB.getLoginStatus(function (response) {
      statusChangeCallback(response);
    });
  };

  const testAPI = () => {
    console.log("Welcome!  Fetching your information.... ");
    window.FB.api("/me", function (response) {
      console.log("Successful login for: " + response.name);
      document.getElementById("status").innerHTML = `Thanks for logging in, ${
        response.name
      }!`;
    });
  };
  


  
  // Check login state

  // Handle the response

  // Test API

  

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