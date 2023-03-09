import { useState } from "react";
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";

export function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [img, setImg] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleImage(e) {
    setImg(e.target.files[0]);
  }

  async function handleUpload() {
    try {
      const uploadData = new FormData();
      uploadData.append("picture", img);

      const response = await api.post("/upload-image", uploadData);

      return response.data.url;
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const imgURL = await handleUpload();
      await api.post("/user/signup", { ...form, img: imgURL });

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

        <button type="submit">Create My Time Capsule!</button>
      </form>
    </>
  );
}
