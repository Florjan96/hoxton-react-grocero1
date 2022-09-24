import { useState } from "react";
import "./App.css";


function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "beetroot",
      price: 0.52,
      image:'./public/assets/icons/001-beetroot.svg',
      amountInCart: 0,
      stock:12,
    },
    {
      id: 2,
      name: "carrot",
      image:'./public/assets/icons/002-carrot.svg',
      price: 0.35,
      amountInCart: 10,
      stock:23,
    },
    {
      id: 3,
      name: "apple",
      image:'./public/assets/icons/003-apple.svg',
      price: 0.40,
      amountInCart: 7,
      stock:23,
    },
    {
      id: 4,
      name: "apricot",
      image:'./public/assets/icons/004-apricot.svg',
      price: 0.61,
      amountInCart: 5,
    },
    {
      id: 5,
      name: "avocado",
      image:'./public/assets/icons/005-avocado.svg',
      price: 1.45,
      amountInCart: 0,
    }
  ])

let cartItems=items.filter(item=>item.amountInCart>0)
console.log(cartItems)


  return (
    <div className="App">
      <header id="store">
        <h1>Grocero</h1>
        <ul className="item-list store--item-list">

          {items.map(item=>(
  <li>
  <div className="store--item-icon">
    <img src={item.image} alt="beetroot" />
  </div>
  <button>Add to cart</button>
</li>
          ))}
        
        </ul>
      </header>

      <main id="cart">
        <h2>Your Cart</h2>

        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">

            {cartItems.map(cartItem=>(
 <li>
 <img
   className="cart--item-icon"
   src={cartItem.image}
   alt="beetroot"
 />
 <p>{cartItem.name}</p>
 <button className="quantity-btn remove-btn center">-</button>
 <span className="quantity-text center">{cartItem.amountInCart}</span>
 <button className="quantity-btn add-btn center">+</button>
</li>

            ))}
           
          </ul>
        </div>

        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>

          <div>
            <span className="total-number">£0.00</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
