export function Card({ cartItems, decrease, increase, getTotal }) {
  return (
    <main id="cart">
      <h2>Your Cart</h2>

      <div className="cart--item-list-container">
        <ul className="item-list cart--item-list">
          {cartItems.map((cartItem) => (
            <li>
              <img
                className="cart--item-icon"
                src={cartItem.image}
                alt="beetroot"
              />
              <p>{cartItem.name}</p>
              <button
                className="quantity-btn remove-btn center"
                onClick={function () {
                  decrease(cartItem);
                }}
              >
                -
              </button>
              <span className="quantity-text center">
                {cartItem.amountInCart}
              </span>
              <button
                className="quantity-btn add-btn center"
                onClick={function () {
                  increase(cartItem);
                }}
              >
                +
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="total-section">
        <div>
          <h3>Total</h3>
        </div>

        <div>
          <span className="total-number">${getTotal().toFixed(2)}</span>
        </div>
      </div>
    </main>
  );
}
