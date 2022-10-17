import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // const user = false;

  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUsers = () =>
      fetch("/auth/user", {
        method: "GET, POST, PUT, DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "acess-control-allow-origin": true,
        },
        credentials: "include",
      })
        .then((response) => response.json())
        .then((data) => setUser(data));
    getUsers();
  }, []);
  const Facebook = () => {
    window.open("http://localhost:5000/auth/facebook", "_self");
  };
  return (
    <div className="App">
      <div className="main">
        <button className="containerButton">
          <img src="/facebook.png" onClick={Facebook} />
          LOGAR COM FACEBOOK
        </button>
      </div>
    </div>
  );
}

export default App;
