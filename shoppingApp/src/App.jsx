import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Index";
import Home from "../src/pages/Home";
import Cart from "../src/pages/Cart";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
