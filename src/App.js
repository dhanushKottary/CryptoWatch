import HomePageComponent from "./Components/HomePageComponent/HomePageComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CoinDetailsComponent from "./Components/CoinDetailsComponent/CoinDetailsComponent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HomePageComponent />}></Route>
        <Route path="/coinDetails/:name" exact element={<CoinDetailsComponent />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
