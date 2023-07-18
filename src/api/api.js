import axios from "axios";

const apiURLs = {
  development: "http://localhost:4000",
  production: "https://4ever.cyclic.app", // atenção para não colocar a "/" no final
};

const api = axios.create({ baseURL: apiURLs[process.env.NODE_ENV] });

// Intercepta toda REQ do front e envia o token para o backend
api.interceptors.request.use((config) => {
  const loggedInUserJSON = localStorage.getItem("loggedInUser"); // busca no localStorage a info do user logado!

  const parseLoggedInUser = JSON.parse(loggedInUserJSON || '""'); // transforma o JSON do localStorage em JS!

  if (parseLoggedInUser.token) {
    config.headers = { Authorization: `Bearer ${parseLoggedInUser.token}` }; // se houver token, acrescenta cabeçalho de autorização da REQ!
  }

  return config;
});

export { api };
