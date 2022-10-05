import "./index.css";
import bank from "../../assets/bank.png";
const Power = () => {
  return (
    <div className="power">
      <h1>
        At Uni, we’re committed to{" "}
        <span className="color2">
          delivering an unmatched credit experience
        </span>{" "}
        for millions of Indians.
      </h1>
      <h3>
        On this mission, we’ve partnered with some of the best in the business.
      </h3>
      <img src={bank} />
    </div>
  );
};

export default Power;
