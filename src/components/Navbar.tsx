import image from "../assets/logo.svg";
import "../App.css";

export const Navbar = () => {
  return (
    <div className="navbar__container">
      <div className="app__container">
        <img src={image} alt="logo" />
      </div>
    </div>
  );
};
