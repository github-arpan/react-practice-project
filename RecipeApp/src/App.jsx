import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Index";
import Details from "./pages/Details/Index";
import Favourites from "./pages/Favourites/Index";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div>
      <div>
        <Routes>
          <Route path="" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="/recipe-item/:id" element={<Details />} />
            <Route path="/favourites" element={<Favourites />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
