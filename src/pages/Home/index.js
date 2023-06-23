import { Link, useNavigate } from "react-router-dom"; // p/redirect de páginas
import Button from 'react-bootstrap/Button'; // p/uso de botões do bootstrap
import style from "../Home/style.modules.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/authContext";

export function Home() {

  // estrutura redirect p/ dashboard quando user logado
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);

  const {loggedInUser} = useContext(AuthContext);

  // atualiza o estado de loading quando`o loggedInUser muda de valor
  useEffect(() => {
    setIsLoading(false);
  }, [loggedInUser]);

  // se o usetiver token (logado), redirect /dashboard
  useEffect(() => {
    if (loggedInUser) {
      navigate("/dashboard");
    }
  }, [isLoading]);

  return (
    <>
    <div className="container">
    <p>4Ever</p>
    <Link to="/login">
      <Button variant="outline-primary">Login</Button>
      </Link>
      <h1>
        Create your time capsule, safe your files that we deliver in the future!
      </h1>
      <h2>For whoever you want! Whenever you want!</h2>
      <Link to="/signup">
      <Button variant="success">Create My Time Capsule</Button>
      </Link>
    </div>
   
    </>
  );
}
