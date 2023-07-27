import React from "react";
import Home from "./Home";
import LoginForm from "./LoginForm";
import { useUserContext } from "../context/userContext";

const Auth = () => {
  const { user } = useUserContext();
  return <section>{user.isGuestUser ? <LoginForm /> : <Home />}</section>;
};

export default Auth;
