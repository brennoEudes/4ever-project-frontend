import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { AuthContextComponent } from "./contexts/authContext";
import { Dashboard } from "./pages/Dashboard";
import { ErrorPage } from "./pages/ErrorPage";
import { Footer } from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <AuthContextComponent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={<ProtectedRoute component={Dashboard} />}
          />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AuthContextComponent>
      <Footer />
    </>
  );
}

export default App;
