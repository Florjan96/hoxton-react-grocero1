import { useState } from "react";
import "./App.css";


function App() {
  const [items, setitems] = useState([
    {
      id: 1,
      sender: `Zoom`,
      title: `Cloud Recording - Nicolas Marcora's Personal Meeting Room is now available`,
      starred: false,
      read: true
    },
    {
      id: 2,
      sender: `Zoom`,
      title: `Kushtrim has joined your Personal Meeting Room`,
      starred: false,
      read: false
    },
    {
      id: 3,
      sender: `Notion`,
      title: `1 update in Hoxton`,
      starred: true,
      read: true
    },
    {
      id: 4,
      sender: `The Calendly Team`,
      title: `Use more than one calendar?`,
      starred: false,
      read: false
    }])

  return (
    <div className="App">
      <header id="store">
        <h1>Grocero</h1>
        <ul className="item-list store--item-list">
          <li>
            <div className="store--item-icon">
              <img src="assets/icons/001-beetroot.svg" alt="beetroot" />
            </div>
            <button>Add to cart</button>
          </li>
        </ul>
      </header>

      <main id="cart">
        <h2>Your Cart</h2>

        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            <li>
              <img
                className="cart--item-icon"
                src="assets/icons/001-beetroot.svg"
                alt="beetroot"
              />
              <p>beetroot</p>
              <button className="quantity-btn remove-btn center">-</button>
              <span className="quantity-text center">1</span>
              <button className="quantity-btn add-btn center">+</button>
            </li>
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
