import { NavLink, Outlet } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  return (
    <>
      <header className="header">
        <nav>
          <ul>
            <li>
              <NavLink to={"/"}>Карточки</NavLink>
            </li>
            <li>
              <NavLink to={"/a4"}>Фулл А4</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
