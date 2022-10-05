import "./styles.css";
const Home = () => {
  return (
    <div className="home">
      <div className="item-wrapper">
        <div>
          <h1>
            <span className="color">
              Uni Pay 1/2 Card
              <br />
            </span>
            Smart Payments, Delightful Rewards
          </h1>
          <p className="desc">
            Split your spends into 2 parts over 2 months at no extra charges.
            Or, Pay in 1 month for 1.2% rewards.
          </p>
        </div>
      </div>
      <div className="input-div">
        <div className="Wrapper">
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter Phone Number"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          ></input>
          <button className="button">Apply Now</button>
        </div>
      </div>
    </div>
  );
};
export default Home;
