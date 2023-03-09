import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";
import { AuthContext } from "../../contexts/authContext";

export function Dashboard() {
  const [user, setUser] = useState({ name: "", email: "" });
  const navigate = useNavigate();

  const { setLoggedInUser } = useContext(AuthContext);

  useEffect(() => {
    async function fetchUser() {
      const response = await api.get("/user/dashboard");
      setUser(response.data);
    }

    fetchUser();
  }, []);

  function handleLogOut() {
   localStorage.removeItem("loggedInUser");
   setLoggedInUser(null);
    navigate("/");
  }

  return (
    <>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <button onClick={handleLogOut}>Sair</button>
    </>
  );
}
