import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";
import { AuthContext } from "../../contexts/authContext";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export function Dashboard() {
  const [caps, setCaps] = useState([]);
  const navigate = useNavigate();

  const { setLoggedInUser } = useContext(AuthContext);

  useEffect(() => {
    async function fetchCapsules() {
      try {
        const response = await api.get("/capsule");

        setCaps(...response.data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchCapsules();
  }, []);

  function handleLogOut() {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
    navigate("/");
  }

  return (
    <>
      <Link to="/create-capsule">
        <Button variant="success">Create New Capsule</Button>
      </Link>

      <Button onClick={handleLogOut} variant="outline-danger">
        Logout
      </Button>
      {caps.map((currentCapsule) => {
        return <h2>{currentCapsule.title}</h2>;
      })}
    </>
  );
}
