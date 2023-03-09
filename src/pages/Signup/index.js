import { useState } from "react";
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

export function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await api.post("/user/signup", form);

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h1>Create your time capsule!</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="formName">Name:</label>
        <input
          id="formName"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
        />

        <label htmlFor="formEmail">E-mail:</label>
        <input
          id="formEmail"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
        />
        <label htmlFor="formPassword">Password:</label>
        <input
          id="formPassword"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
        />
        <Button type="submit" variant="success">
          Create My Time Capsule!
        </Button>
      </form>
    </>
  );
}
