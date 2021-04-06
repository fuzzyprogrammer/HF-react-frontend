import React, { 
<<<<<<< HEAD
  useContext, 
=======
  // useContext, 
>>>>>>> main
  useEffect, 
  useState 
} from "react";
import { Redirect, useLocation } from "react-router-dom";
<<<<<<< HEAD
import AppContext from "app/contexts/AppContext";
import useAuth from "app/hooks/useAuth";

const getUserRoleAuthStatus = (pathname, role, routes) => {
  const matched = routes.find((r) => r.path === pathname);

  const authenticated =
    matched && matched.auth && matched.auth.length
      // ? matched.auth.includes(user.role.name)
      ? matched.auth.includes(role)
      : true;
    
  return authenticated;
};
=======
// import AppContext from "app/appContext";
import useAuth from "app/hooks/useAuth";

// const getUserRoleAuthStatus = (pathname, user, routes) => {
//   const matched = routes.find((r) => r.path === pathname);

//   const authenticated =
//     matched && matched.auth && matched.auth.length
//       ? matched.auth.includes(user.role)
//       : true;
//   console.log(matched, user);
//   return authenticated;
// };
>>>>>>> main

const AuthGuard = ({ children }) => {
  const {
    isAuthenticated,
<<<<<<< HEAD
    user,
    role
=======
    // user
>>>>>>> main
  } = useAuth();

  const [previouseRoute, setPreviousRoute] = useState(null);
  const { pathname } = useLocation();

<<<<<<< HEAD
  const { routes } = useContext(AppContext);
  const isUserRoleAuthenticated = getUserRoleAuthStatus(pathname, role, routes);
  let authenticated = isAuthenticated && isUserRoleAuthenticated;
=======
  // const { routes } = useContext(AppContext);
  // const isUserRoleAuthenticated = getUserRoleAuthStatus(pathname, user, routes);
  // let authenticated = isAuthenticated && isUserRoleAuthenticated;
>>>>>>> main

  // IF YOU NEED ROLE BASED AUTHENTICATION,
  // UNCOMMENT ABOVE TWO LINES, getUserRoleAuthStatus METHOD AND user VARIABLE
  // AND COMMENT OUT BELOW LINE
<<<<<<< HEAD
  // let authenticated = isAuthenticated;
=======
  let authenticated = isAuthenticated;
>>>>>>> main

  useEffect(() => {
    if (previouseRoute !== null) setPreviousRoute(pathname);
  }, [pathname, previouseRoute]);

  if (authenticated) return <>{children}</>;
  else {
    return (
      <Redirect
        to={{
          pathname: "/session/signin",
          state: { redirectUrl: previouseRoute },
        }}
      />
    );
  }
};

export default AuthGuard;
