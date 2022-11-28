import { useEffect, useState } from "react";
import { jwt } from "../cart";

export const useLoggedIn = () => {
  const [loggedIn, setLoggedIn] = useState(!!jwt.value);

  useEffect(() => {
    setLoggedIn(!!jwt.value);

    jwt.subscribe((token) => setLoggedIn(!!token));

    return () => {
      jwt.unsubscribe();
    };
  }, []);

  return loggedIn;
};
