import React from "react";
import App from "./App";
import { AppContext } from "./context/context";
import Cookie from "js-cookie";
import jwtDecode from "jwt-decode";

const Application = () =>{

    const access = {
        access : "NOT CONNECTED",
        user : null,
    }
   
   try {
    
    const time = jwtDecode(Cookie.get("yiatou-token-access"));
    const currentTime = Math.floor(Date.now() / 1000);
    const sessionValide = parseInt(currentTime) >= parseInt(time.exp);

    const user = Cookie.get("yiatou-token-user");
    access.access = sessionValide ? "EXPIRE" : "CONNECTED";
    access.user = !sessionValide ? JSON.parse(user) : null;

    console.log(access,'\n ',time.exp,sessionValide);

   } catch (error) {
    console.log(error);
   }
   console.log(access);
    return (
        <AppContext.Provider value={access}>
        <App/>
        </AppContext.Provider>
    )
}

export default Application;