import "./App.css";
import { Route, Routes } from "react-router-dom";
import CardsPrint from "./pages/CardsPrint";
import A4Print from "./pages/A4Print";
import Layout from "./components/Layout";
import SmallCards from "./pages/SmallCards";

const App = () => {
  return (
    <Routes>
      <Route to="/" element={<Layout />}>
        <Route index element={<CardsPrint />} />
        <Route path="/a4" element={<A4Print />} />
        <Route path="/small" element={<SmallCards />} />
      </Route>
    </Routes>
  );
};

export default App;
