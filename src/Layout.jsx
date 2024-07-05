import { Outlet, Link } from "react-router-dom";
import FavoritesSideBar from "./components/FavoritesSideBar";
import './Layout.css';
const Layout = () => {
  return (
    <>
     <div className="main">
        <FavoritesSideBar />
        <div className="nav-container">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/pokemons">Pokemons</Link>
              </li>
              <li>
                <Link to="/:id">Pokemon</Link>
              </li>
            </ul>
          </nav>
          <Outlet />
        </div>
      </div>
    
    </>
  )
};

export default Layout;