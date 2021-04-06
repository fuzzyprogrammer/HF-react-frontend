import { useContext } from 'react';
<<<<<<< HEAD
import AuthContext from 'app/contexts/JWTAuthContext';
=======
import AuthContext from 'app/contexts/FirebaseAuthContext';
>>>>>>> main

const useAuth = () => useContext(AuthContext);

export default useAuth;
