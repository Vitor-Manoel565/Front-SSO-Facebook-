import FacebookLogin from "react-facebook-login";

const App = () => {
  const responseFacebook = (response) => {
    console.log(response);
  };

  return (
    <FacebookLogin
      appId="1147465239309646"
      autoLoad={true}
      fields="name,email,picture"
      onClick={()=> console.log("clicado!")}
      callback={responseFacebook}
    />
  );
};

export default App;
