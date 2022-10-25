// import FacebookLogin from "react-facebook-login";
import  InstagramLogin  from "react-instagram-login";
import { useState } from "react";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");
  const responseInstagram = (response) => {
    if(!response.error_type){
      setIsLoggedIn(true);
      setToken(response)
      console.log("Você está logado, seu token é: ", token);

    }
  };

  return (
    <InstagramLogin
      clientId="1296989504384057"
      buttonText="Login"
      onSuccess={responseInstagram}
      onFailure={responseInstagram}
      scope="user_profile,user_media"
    />
  );
};

export default App;
