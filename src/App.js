// import FacebookLogin from "react-facebook-login";
import  InstagramLogin  from "react-instagram-login";

const App = () => {
  const responseInstagram = (response) => {
    console.log("Este é o token:",response);
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
