
import "./App.css";
import PokemonList from "./components/PokemonList";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import PokemonDetails from "./components/PokemonDetails";
import FavoritesSideBar from "./components/FavoritesSideBar";
import Layout from "./Layout";
// import NoPage from './NoPage';
// import Layout from "./Layout";

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PokemonList />} />
          <Route path="/pokemons" element={<PokemonList />} />
          <Route path="/pokemon/:id" element={<PokemonDetails />} />
        </Route>
      </Routes>
    </Router>
  
  );
}

export default App;
