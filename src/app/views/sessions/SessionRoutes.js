import JwtLogin from "./login/JwtLogin";
// import FirebaseLogin from "./login/FirebaseLogin";
import NotFound from "./NotFound";
import ForgotPassword from "./ForgotPassword";
import JwtRegister from "./register/JwtRegister";
// import FirebaseRegister from "./register/FirebaseRegister";

const sessionRoutes = [
  {
    path: "/session/signup",
    component: JwtRegister,
  },
  {
    path: "/session/signin",
    component: JwtLogin,
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
