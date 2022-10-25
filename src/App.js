// import FacebookLogin from "react-facebook-login";
import  InstagramLogin  from "react-instagram-login";

const App = () => {
  const responseInstagram = (response) => {
    console.log(response);
  };

  return (
    <InstagramLogin
      clientId="1296989504384057"
      buttonText="Login"
      onSuccess={responseInstagram}
      onFailure={responseInstagram}
      access
      scope="user_profile,user_media"
    />
  );
};

export default App;
