import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function ProtectedRoute(props) {
  const { component: Component } = props;
  const navigate = useNavigate();

  const loggedInUser = localStorage.getItem("loggedInUser"); // pegando info direto do localStorage p/evitar erros de renderização

  const parsedUser = JSON.parse(loggedInUser || '""');

  useEffect(() => {
    console.log(parsedUser);
    if (!parsedUser.token) {/* Se user não tiver token válido (não logado), direciona p/login (Ale não usou .token!) */
      navigate("/login");
    }
  }, []);

  return <Component />;
}
