import Button from "./Button";

export default function Card({ data }) {
  function handleClick(text) {
    alert(text);
  }

  return (
    <div className={`card ${!data.avaiable && "card--disabled"}`}>
      <div className="card__image">
        <img src={data.image} />
      </div>
      <div className="card__content">
        <h3>{data.name}</h3>
        <p>{data.description}</p>
        <div className="card__price">{data.price}</div>
        {data.avaiable && (
          <Button onClick={() => handleClick("ciao")}>🛒 Add to cart</Button>
        )}
      </div>
    </div>
  );
}
