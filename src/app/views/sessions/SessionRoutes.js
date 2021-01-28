import FirebaseLogin from "./login/FirebaseLogin";
// import JwtLogin from "./login/JwtLogin";
import NotFound from "./NotFound";
import ForgotPassword from "./ForgotPassword";
// import FirebaseRegister from "./register/FirebaseRegister";
import JwtRegister from "./register/JwtRegister";

const sessionRoutes = [
  {
    path: "/session/signup",
    component: JwtRegister,
  },
  {
    path: "/session/signin",
    component: FirebaseLogin,
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

export default sessionRoutes;