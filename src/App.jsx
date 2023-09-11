import Footer from "./components/Footer";
import Header from "./components/Header";
import Card from "./components/Card";
// Images
import originalImage from "./assets/original.jpg";
import salamiImage from "./assets/salami.jpg";
import chickenImage from "./assets/chicken.jpg";
import hawaiianImage from "./assets/hawaiian.jpg";

let pizzas = [
  {
    id: 1,
    image: originalImage,
    name: "Original",
    description: "Tomato sauce, mozzarella & oregano",
    price: "€ 6.00",
    avaiable: true,
  },
  {
    id: 2,
    image: salamiImage,
    name: "Salami",
    description: "Tomato sauce, mozzarella & mild salami",
    price: "€ 8.00",
    avaiable: true,
  },
  {
    id: 3,
    image: chickenImage,
    name: "Chicken",
    description:
      "TomaTomato sauce, mozzarella, chicken, pineapple* & bbq sauce",
    price: "€ 10.00",
    avaiable: true,
  },
  {
    id: 4,
    image: hawaiianImage,
    name: "Hawaiian",
    description: "Tomato sauce, mozzarella, ham & pineapple",
    price: "€ 10.00",
    avaiable: false,
  },
];

export default function App() {
  // if (pizzas.length === 0) return <h2>Qualcosa è andato storto 🥲</h2>;

  return (
    <>
      <Header />
      {pizzas.length > 0 ? (
        <section className="container cards">
          {pizzas.map((pizza) => (
            <Card data={pizza} key={pizza.id} />
          ))}
        </section>
      ) : (
        <h2 className="container">No Pizzas</h2>
      )}
      <Footer />
    </>
  );
}
