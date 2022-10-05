import logo from "../../assets/logo.png";
import "./styles.css";
const NavBar = () => {
  return (
    <div className="navBar">
      <img src={logo} className="logo" />
      <div className="linksRight">
        <a href="#">Pay 1/3rd Card</a>
        <a href="#">Pay 1/2 Card</a>
      </div>
    </div>
  );
};

export default NavBar;
