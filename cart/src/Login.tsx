import React, { useState } from "react";
import { login } from "./cart";
import { useLoggedIn } from "./hooks/useLoggedIn";

interface IProps {}

const Login: React.FC<IProps> = (props) => {
  const loggedIn = useLoggedIn();
  const [showLogin, setShowLogin] = useState(false);

  const [username, setUsername] = useState("sally");
  const [password, setPassword] = useState("123");

  if (loggedIn) return null;

  return (
    <>
      <span onClick={() => setShowLogin(!showLogin)} id="showlogin-span">
        <i
          className="ri-fingerprint-line text-2xl text-white"
          id="showlogin"
        ></i>
      </span>
      {showLogin && (
        <div
          className="absolute p-5 border-4 border-blue-800 bg-white rounded-lg"
          style={{ width: "300px", top: "2rem", left: "-250px" }}
        >
          <input
            type={"text"}
            placeholder="User Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border text-sm border-gray-400 p-2 rounded-md w-full"
          />
          <input
            type={"password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border text-sm border-gray-400 p-2 rounded-md w-full"
          />

          <button
            className="bg-green-900 rounded-md text-sm text-white my-2 py-2 px-5"
            id="loginbtn"
            onClick={() => login(username, password)}
          >
            Login
          </button>
        </div>
      )}
    </>
  );
};

export default Login;
