import { useAuth0 } from "@auth0/auth0-react";
import NavBar from "../NavBar/NavBar";
import Perfil from "../Perfil/perfil";

export default function Prueba() {
    const { loginWithRedirect } = useAuth0()
    const { logout } = useAuth0()
    const { user , isAuthenticated} = useAuth0()

  return (
      <div>
          <NavBar/>
          <br></br>
          <br></br>
          <br></br>

          {!isAuthenticated && (
              <button onClick={() => loginWithRedirect()}>LOGIN</button>
          )}
          

          <br></br>
          <br></br>
          <br></br>

          {isAuthenticated && (
              <button onClick={() => logout()}>LOGOUT</button>
          )}
          

          {isAuthenticated && (
              <Perfil/>
          )}
          
            
      </div>
  );
}
