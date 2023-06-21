import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function ProtectedRoute(props) {
  const { component: Component } = props; // como props usa-se letra minúscula, criamos um Component react c/ letra maiúscula para ser renderizado.
  const navigate = useNavigate();

  const loggedInUser = localStorage.getItem("loggedInUser");

  const parsedUser = JSON.parse(loggedInUser || '""');

  useEffect(() => {
    console.log(parsedUser);
    if (parsedUser.user.role !== "ADMIN") {
      navigate("/login");
    }
  }, []);

  return <Component />;
}
