import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import "./styles.css";
const Rewards = () => {
  return (
    <div className="wrapRewards">
      <div className="icon">
        <img src={icon1} />
        <h1>Pay in 2 Parts</h1>
        <p className="desc">
          Pay for anything & everything and just pay 1/2 every month. Nothing
          more, not even a rupee.
        </p>
      </div>
      <div className="icon">
        <img src={icon2} />
        <h1>1.2% Rewards</h1>
        <p className="desc">
          Choose to pay in full, post the 30 days free credit period & enjoy
          1.2% rewards.
        </p>
      </div>
      <div className="icon">
        <img src={icon3} />
        <h1>No joining fee</h1>
        <p className="desc">
          Yes, you read that right. There is no joining fees or annual charges
          for our early customers.
        </p>
      </div>
    </div>
  );
};

export default Rewards;
