// import FacebookLogin from "react-facebook-login";
import  InstagramLogin  from "react-instagram-login";

const App = () => {
  const responseInstagram = (response) => {
    console.log(response);
  };

  return (
    <InstagramLogin
      clientId="1147465239309646"
      buttonText="Login"
      onSuccess={responseInstagram}
      onFailure={responseInstagram}
    />
  );
};

export default App;
