import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/registration">Sign Up</Link>
        <Link to="/gender-determination">Gender determination</Link>
        <Link to="/age-predictor">Age predictor</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/weight-calculator">Weight calculator</Link>
      </nav>
    </>
  );
}
