// import Template from "./components/TemplateCard";
import "./App.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import CardsPrint from "../pages/CardsPrint";
import A4Print from "../pages/A4Print";

const App = () => {
  const [templates, setTemplates] = useState([]);

  const addTemplate = (event) => {
    event.preventDefault();
    const [name, price, discount] = event.target.elements;
    setTemplates((prev) => [
      ...prev,
      {
        name: name.value,
        price: price.value,
        discount: discount.value,
      },
    ]);
  };
  return (
    <Routes>
      <Route path="/card" element={<CardsPrint />} />
      <Route path="/a4" element={<A4Print />} />
    </Routes>
  );
  // return (
  //   <>
  //     <form onSubmit={addTemplate} className="form">
  //       <input type="text" placeholder="Найменування" />
  //       <input type="number" placeholder="Ціна" />
  //       <input type="number" placeholder="Скидка" />
  //       <button type="submit">Add</button>
  //     </form>

  //     <div className="A4">
  //       <ul className="list">
  //         {templates.map((template, index) => (
  //           <Template
  //             key={index}
  //             name={template.name}
  //             price={template.price}
  //             discount={template.discount}
  //           />
  //         ))}
  //       </ul>
  //     </div>
  //   </>
  // );
};

export default App;
