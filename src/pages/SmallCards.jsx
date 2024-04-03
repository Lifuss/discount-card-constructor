import { useState } from "react";
import Template from "../components/TemplateSmallCard";

const SmallCards = () => {
  const [templates, setTemplates] = useState([]);

  const addTemplate = (event) => {
    event.preventDefault();
    const [name, price, discount, barcode] = event.target.elements;
    console.log(event.target.elements);
    setTemplates((prev) => [
      ...prev,
      {
        name: name.value,
        price: price.value,
        discount: discount.value,
        barcode: barcode.value,
      },
    ]);
  };
  return (
    <>
      <form onSubmit={addTemplate} className="form">
        <input type="text" name="name" placeholder="Найменування" />
        <input type="number" name="price" placeholder="Ціна" />
        <input type="number" name="discount" placeholder="Скидка" />
        <input type="text" name="barcode" placeholder="Штрихкод" />

        <button type="submit">Add</button>
      </form>

      <div className="A4">
        <ul className="list">
          {templates.map((template, index) => (
            <Template
              key={index}
              name={template.name}
              price={template.price}
              discount={template.discount}
              barcode={template.barcode}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default SmallCards;
