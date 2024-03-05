import { useState } from "react";
import "./A4Print.css";

const A4Print = () => {
  const [card, setCard] = useState({
    name: "",
    description: "",
    features: [],
    price: "",
    discount: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const [name, feature1, feature2, feature3, price, discount, description] =
      event.target.elements;
    console.log(event.target.elements);
    const features = [feature1.value, feature2.value, feature3.value].filter(
      (item) => item
    );
    setCard({
      name: name.value,
      description: description.value,
      features,
      price: price.value,
      discount: discount.value,
    });
  };

  const { name, description, features, price, discount } = card;

  return (
    <>
      <form onSubmit={handleSubmit} className="form A4form">
        <input type="text" name="name" placeholder="Найменування" />
        <input type="text" name="feature1" placeholder="характеристика №1" />
        <input type="text" name="feature2" placeholder="характеристика №2" />
        <input type="text" name="feature3" placeholder="характеристика №3" />
        <input type="number" name="price" placeholder="Ціна" />
        <input type="number" name="discount" placeholder="Скидка" />
        <textarea name="description" placeholder="Опис товару" />

        <button type="submit">Add</button>
      </form>
      <div className="A4">
        <h2 className="title">{name}</h2>
        {description && <p className="description">{description}</p>}
        <ul className="description-list">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <div className="price-box">
          <p className="a4price">{price}</p>
          <div className="discount-box">
            <div className="house-figure">
              <p>Кожну неділю ЗНИЖКА</p>
              <span>-{discount}%</span>
            </div>
            <p className="discount-price">
              {parseInt(price - (price * discount) / 100)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default A4Print;
