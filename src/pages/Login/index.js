import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

export function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { setLoggedInUser } = useContext(AuthContext);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSumit(e) {
    e.preventDefault();

    try {
      const response = await api.post("/user/login", form); 
      setLoggedInUser({ ...response.data }); // atualiza o contexto

      localStorage.setItem("loggedInUser", JSON.stringify(response.data)); // atualiza o localStorage

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
 <h1>Access your time capsule!</h1>
    <form onSubmit={handleSumit}>
      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      <label>Password:</label>
      <input
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
      />
      <Button type="submit" variant="success">Login</Button>
    </form>
    </>
   
  );
}
