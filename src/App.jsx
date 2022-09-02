import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home/Home";
import { MemoizedPokedex } from "./components/Pokedex/Pokedex";
import { PokemonDetails } from "./components/PokemonDetails/PokemonDetails";
import { ProtectedRoutes } from "./components/PokemonRoutes/ProtectedRoutes";

function App() {
  return (
    <div className="App">
      <div className="container__elements">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route element={<ProtectedRoutes />}>
            <Route path="/pokedex" element={<MemoizedPokedex />} />
            <Route path="/pokedex/:name" element={<PokemonDetails />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
