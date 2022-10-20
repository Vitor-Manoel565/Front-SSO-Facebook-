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

  const checkLoginState = () => {
    window.FB.getLoginStatus(function (response) {
      statusChangeCallback(response);
    });
  };
  function statusChangeCallback(response) {  // Called with the results from FB.getLoginStatus().
    console.log('statusChangeCallback');
    console.log(response);                   // The current login status of the person.
    if (response.status === 'connected') {   // Logged into your webpage and Facebook.
      testAPI();  
    } else {                                 // Not logged into your webpage or we are unable to tell.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this webpage.';
    }
  }

  
  // Check login state

  // Handle the response

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