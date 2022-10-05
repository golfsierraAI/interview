import image1 from "../../assets/image1.png";
import "./styles.css";
const Backed = () => {
  return (
    <div className="wrap backedWrap">
      <div>
        <img className="image1" src={image1} />
      </div>
      <h1 className="headingBacked">
        Split your payments, anywhere and everywhere.
        <span className="grey">
          <br />
          Accepted at 99.9% of merchants.
        </span>
      </h1>
    </div>
  );
};
export default Backed;
