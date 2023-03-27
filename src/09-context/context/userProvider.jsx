import React from "react";
import UserContext from "./userContext";

const user = {
  id: 123,
  name: "ruben alderete",
  email: "ruben@correo.com",
};

const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ hola: "mundo", user }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
