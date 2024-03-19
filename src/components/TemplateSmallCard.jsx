// eslint-disable-next-line react/prop-types
const Template = ({ name, price, discount }) => {
  return (
    <li className="box small-box">
      <h2>{name}</h2>
      <p>
        <span className="price small-price">Ціна:</span>
        <span className="sum small-sum">{price} грн.</span>
      </p>
      <div className="outer-box small-outer-box">
        <div className="inner-box small-inner-box">
          <p>В Неділю!</p>
          <span>-{discount}%</span>
        </div>
        <span>{parseInt(price - (price * discount) / 100)} грн.</span>
      </div>
    </li>
  );
};

export default Template;
