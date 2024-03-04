import { NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to={"/card"}>Карточки</NavLink>
          </li>
          <li>
            <NavLink to={"/a4"}>Принт А4</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Layout;
