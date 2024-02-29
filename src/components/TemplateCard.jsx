// eslint-disable-next-line react/prop-types
const Template = ({ name, price, discount }) => {
  return (
    <li className="box">
      <h2>{name}</h2>
      <p>
        <span className="price">Ціна:</span>
        <span className="sum">{price} грн.</span>
      </p>
      <div className="outer-box">
        <div className="inner-box">
          <p>Кожної Неділі</p>
          <span>-{discount}%</span>
        </div>
        <span>{parseInt(price - (price * discount) / 100)} грн.</span>
      </div>
    </li>
  );
};

export default Template;
