import "./App.css";
import Backed from "./components/backed";
import Power from "./components/Desc";
import Desc from "./components/desc1";
import Download from "./components/Download";
import Home from "./components/Home/Home";
import Navbar from "./components/navbar/Navbar";
import Rewards from "./components/rewards";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Desc />
      <Rewards />
      <Backed />
      <Power />
      <Download />
    </div>
  );
}

export default App;
