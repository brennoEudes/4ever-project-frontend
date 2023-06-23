import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";
import { AuthContext } from "../../contexts/authContext"; // p/ logout
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { SearchBar } from "../../components/SearchBar";

export function Dashboard() {
  // abaixo temos 2 estados que posssuem todas as caps da aplicação
  const [caps, setCaps] = useState([]);
  const [renderCaps, setRenderCaps] = useState([]);

  const { setLoggedInUser } = useContext(AuthContext); // desestrutura p/logout

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCapsules() {
      try {
        const response = await api.get("/capsule");

        setCaps(...response.data);
        setRenderCaps(...response.data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchCapsules();
  }, []);

  // Logout
  function handleLogOut() {
    localStorage.removeItem("loggedInUser"); // limpa o localStorage
    setLoggedInUser(null); // atualiza o contexto
    navigate("/"); // navega para home
  }

  // verificação do input searchbar
  function handleSearch(e) {
    // se input searchbar vazio, retorna todas as caps
    if (e.target.value === "") {
      setRenderCaps(caps);
      return;
    }

    // Busca pelo título. Verifica se a string "capsuleTitle" possui o input digitado na searchbar
    setRenderCaps(() => {
      return caps.filter((currentCapsule) => {
        return currentCapsule.capsuleTitle.includes(e.target.value);
      });
    });
  }

  return (
    <>
      <h1>My capsules</h1>
      <Link to="/create-capsule">
        <Button variant="success">Create New Capsule</Button>
      </Link>

      <Button onClick={handleLogOut} variant="outline-danger">
        Logout
      </Button>
      <SearchBar filterCapsOnDashboard={handleSearch} />
      {caps.map((currentCapsule) => {
        return <h2>{currentCapsule.title}</h2>;
      })}
    </>
  );
}
