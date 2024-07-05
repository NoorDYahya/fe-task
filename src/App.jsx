
import "./App.css";
import PokemonList from "./components/PokemonList";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import PokemonDetails from "./components/PokemonDetails";
import FavoritesSideBar from "./components/FavoritesSideBar";
import Layout from "./Layout";
import { useState } from "react";
import HomeLayout from './components/HomeLayout';
import Home from "./components/Home";
// import NoPage from './NoPage';
// import Layout from "./Layout";

function App() {

  return (

    <Router>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route  element={<Layout />}>
          <Route path="/pokemons" element={<PokemonList />} />
          <Route path="/pokemon/:id" element={<PokemonDetails />} />
        </Route>
      </Routes>
    </Router>
  
  );
}

export default App;
