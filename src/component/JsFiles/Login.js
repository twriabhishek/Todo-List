import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [email, setemail] = useState("");
  const [username, setusername] = useState("");

  const {setuser} = useContext(UserContext); 

  const handleSubmit=(e)=>{
    e.preventDefault();
    setuser({email, username});
  }
  console.log(email, username);
  return (
    <div style={{ display: "grid", placeItems: "center" }}>
      <h2>Login</h2>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="email"
        value={email}
        onChange={(e) => {
          setemail(e.target.value);
        }}
      />
      <input
        type="username"
        name="username"
        id="username"
        placeholder="username"
        value={username}
        onChange={(e) => {
          setusername(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Login;
