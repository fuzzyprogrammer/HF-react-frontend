import React, { createContext, useEffect, useReducer } from "react";
import jwtDecode from "jwt-decode";
import axios from "axios.js";
import { MatxLoading } from "matx";

const initialState = {
  isAuthenticated: false,
  isInitialised: false,
  user: null,
};

const isValidToken = (accessToken) => {
  if (!accessToken) {
    return false;
  }

  const decodedToken = jwtDecode(accessToken);
  const currentTime = Date.now() / 1000;
<<<<<<< HEAD
  // console.log(decodedToken);
=======
  console.log(decodedToken);
>>>>>>> main
  return decodedToken.exp > currentTime;
};

const setSession = (accessToken) => {
  if (accessToken) {
    localStorage.setItem("accessToken", accessToken);
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    localStorage.removeItem("accessToken");
    delete axios.defaults.headers.common.Authorization;
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INIT": {
      const { isAuthenticated, user } = action.payload;

      return {
        ...state,
        isAuthenticated,
        isInitialised: true,
        user,
      };
    }
    case "LOGIN": {
<<<<<<< HEAD
      const { user, role } = action.payload;
=======
      const { user } = action.payload;

>>>>>>> main
      return {
        ...state,
        isAuthenticated: true,
        user,
<<<<<<< HEAD
        role, 
=======
>>>>>>> main
      };
    }
    case "LOGOUT": {
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    }
    case "REGISTER": {
      const { user } = action.payload;

      return {
        ...state,
        isAuthenticated: true,
        user,
      };
    }
    default: {
      return { ...state };
    }
  }
};

const AuthContext = createContext({
  ...initialState,
  method: "JWT",
  login: () => Promise.resolve(),
  logout: () => {},
  register: () => Promise.resolve(),
});

export const AuthProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const login = async (email, password) => {
    
    const response = await axios.post("/api/auth/login", { email, password });
<<<<<<< HEAD
    // console.log(response)
    const { accessToken, user, role } = response.data;
    localStorage.setItem("role", role);
    // localStorage.setItem("user", user);

=======
    const { accessToken, user } = response.data;
    
>>>>>>> main
    setSession(accessToken);

    dispatch({
      type: "LOGIN",
      payload: {
        user,
<<<<<<< HEAD
        role
=======
>>>>>>> main
      },
    });
  };

  const register = async (email, username, password) => {
    const response = await axios.post("/api/auth/register", {
      email,
      username,
      password,
    });
    
    const { accessToken, user } = response.data;

    setSession(accessToken);
    
    dispatch({
      type: "REGISTER",
      payload: {
        user,
      },
    });
  };

  const logout = () => {
<<<<<<< HEAD
    const response = axios.post("/api/auth/logout");
    console.log(response);
=======
>>>>>>> main
    setSession(null);
    dispatch({ type: "LOGOUT" });
  };

  useEffect(() => {
    (async () => {
      try {
        const accessToken = window.localStorage.getItem("accessToken");

        if (accessToken && isValidToken(accessToken)) {
          setSession(accessToken);
<<<<<<< HEAD
          const response = await axios.post("/api/auth/me");
=======
          const response = await axios.get("/api/auth/profile");
>>>>>>> main
          const { user } = response.data;

          dispatch({
            type: "INIT",
            payload: {
              isAuthenticated: true,
              user,
            },
          });
        } else {
          dispatch({
            type: "INIT",
            payload: {
              isAuthenticated: false,
              user: null,
            },
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: "INIT",
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    })();
  }, []);

  if (!state.isInitialised) {
    return <MatxLoading />;
  }

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: "JWT",
        login,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
