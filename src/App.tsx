import { useState } from "react";
import "./App.css";
import { Store } from "./components/Store";
import { Card } from "./components/Card";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "beetroot",
      price: 0.52,
      image: "./public/assets/icons/001-beetroot.svg",
      amountInCart: 0,
      stock: 12,
    },
    {
      id: 2,
      name: "carrot",
      image: "./public/assets/icons/002-carrot.svg",
      price: 0.35,
      amountInCart: 10,
      stock: 23,
    },
    {
      id: 3,
      name: "apple",
      image: "./public/assets/icons/003-apple.svg",
      price: 0.4,
      amountInCart: 7,
      stock: 28,
    },
  ]);

  function increase(item: any) {
    if (item.stock === 0) return;

    let copyOfItems = structuredClone(items);

    let match = copyOfItems.find((target) => target.id === item.id);

    match.amountInCart++;
    match.stock--;
    setItems(copyOfItems);
  }

  function decrease(item: any) {
    if (item.amountInCart < 1) return;
    let copyOfItems = structuredClone(items);
    let match = copyOfItems.find((newTarget: any) => newTarget.id === item.id);
    match.amountInCart--;
    match.stock++;
    setItems(copyOfItems);
  }

  let cartItems = items.filter((item) => item.amountInCart > 0);

  function getTotal() {
    let total = 0;

    for (let item of items) {
      total += item.amountInCart * item.price;
    }
    return total;
  }

  return (
    <div className="App">
      <Store items={items} increase={increase} />

      <Card
        cartItems={cartItems}
        decrease={decrease}
        increase={increase}
        getTotal={getTotal}
      />
    </div>
  );
}

export default App;
