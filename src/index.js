import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}
function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <p>
        Authentic Italian cuisini. 6 creative dishes to choose from. All from
        our stone oven , all organic, all delicious{" "}
      </p>

      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza
            name={pizza.name}
            price={pizza.price}
            ingre={pizza.ingredients}
            photoSrc={pizza.photoName}
            soldOut={pizza.soldOut}
          />
        ))}
      </ul>
    </main>
  );
}

function Pizza(props) {
  return (
    <li className={`pizza ${props.soldOut ? "sold-out" : ""}`}>
      <img src={props.photoSrc} alt={props.name} />
      <div>
        <h3> {props.name} </h3>
        <p> {props.ingre}</p>
        <span>{props.soldOut ? "SOLD OUT" : props.price} </span>
      </div>
    </li>
  );
}

function Footer() {
  const clockNow = new Date().getHours();
  const openHour = 12;
  const closeHour = 24;
  if (clockNow >= openHour && clockNow < closeHour) {
    return (
      <div className="order">
        <h2> {clockNow}:00 We are Happy to Recieve Your Orders!</h2>
        <button className="btn">Order Now</button>
      </div>
    );
  } else {
    return (
      <h2>
        {" "}
        We Are Closed :( .. Please come back between {openHour}:00 and{" "}
        {closeHour}:00{" "}
      </h2>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
