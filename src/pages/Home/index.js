import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <h1>
        Create your time capsule, safe your files that we deliver in the future!
      </h1>
      <h2>For whoever you want! Whenever you want!</h2>
      <Link to="/signup">
      <button>Create My Time Capsule</button>
      </Link>
    </>
  );
}
