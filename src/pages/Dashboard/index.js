import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";
import { AuthContext } from "../../contexts/authContext";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";


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
      <Link to="/create-capsule">
      <Button variant="success">Create New Capsule</Button>
      </Link>
    
      <Button onClick={handleLogOut} variant="outline-danger">Logout</Button>
    </>
  );
}
