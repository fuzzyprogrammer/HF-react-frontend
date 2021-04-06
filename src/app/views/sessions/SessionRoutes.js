<<<<<<< HEAD
import JwtLogin from "./login/JwtLogin";
// import FirebaseLogin from "./login/FirebaseLogin";
import NotFound from "./NotFound";
import ForgotPassword from "./ForgotPassword";
import JwtRegister from "./register/JwtRegister";
// import FirebaseRegister from "./register/FirebaseRegister";
=======
import FirebaseLogin from "./login/FirebaseLogin";
// import JwtLogin from "./login/JwtLogin";
import NotFound from "./NotFound";
import ForgotPassword from "./ForgotPassword";
// import FirebaseRegister from "./register/FirebaseRegister";
import JwtRegister from "./register/JwtRegister";
>>>>>>> main

const sessionRoutes = [
  {
    path: "/session/signup",
    component: JwtRegister,
  },
  {
    path: "/session/signin",
<<<<<<< HEAD
    component: JwtLogin,
=======
    component: FirebaseLogin,
>>>>>>> main
  },
  {
    path: "/session/forgot-password",
    component: ForgotPassword,
  },
  {
    path: "/session/404",
    component: NotFound,
  },
];

<<<<<<< HEAD
export default sessionRoutes;
=======
export default sessionRoutes;
>>>>>>> main
