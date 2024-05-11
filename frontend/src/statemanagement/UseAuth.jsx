import { createContext, useContext, useState, useEffect } from "react";
export const usestate = createContext();

const UseAuth = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  return (
    <>
      <usestate.Provider value={{ user, setUser }}>
        {children}
      </usestate.Provider>
    </>
  );
};

export default UseAuth;
