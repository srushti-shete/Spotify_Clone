import React, { useEffect } from "react";
import Login from "./components/Login";
import Spotify from "./components/Spotify";
import { reducerCases } from "./utils/Constants";
import { useStateProvider } from "./utils/StateProvider";

export default function App() {
  const stateProvider = useStateProvider();
  
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1];
      if (token) {
        stateProvider.dispatch({ type: reducerCases.SET_TOKEN, token });
      }
    }
    document.title = "Spotify";
  }, [stateProvider.dispatch]);
  
  const { token } = stateProvider;
  
  return <div>{token ? <Spotify /> : <Login />}</div>;
}
