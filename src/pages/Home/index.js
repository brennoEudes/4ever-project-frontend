import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import style from "../Home/style.modules.css";

export function Home() {
  return (
    <>
    <div className="container">
    <p>4Ever</p>
    <Link to="/login">
      <Button variant="outline-primary">Login</Button>
      </Link>
      <h1>
        Create your time capsule, safe your files that we deliver in the future!
      </h1>
      <h2>For whoever you want! Whenever you want!</h2>
      <Link to="/signup">
      <Button variant="success">Create My Time Capsule</Button>
      </Link>
    </div>
   
    </>
  );
}
