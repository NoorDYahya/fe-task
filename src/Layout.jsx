import { Outlet, Link } from "react-router-dom";
import FavoritesSideBar from "./components/FavoritesSideBar";
import './Layout.css';

const Layout = () => {
  return (
    <div className="main">
      <div className="sticky-nav-container">
        <nav>
          <ul >
            <div className="title">
             <h3>Pokedex</h3>
            </div>
            
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/pokemons">Pokemons</Link>
            </li>
          </ul>
        
        </nav>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
        <FavoritesSideBar className="aside-panel" />
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
