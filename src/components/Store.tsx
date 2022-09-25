export function Store({ items, increase }) {
  return (
    <header id="store">
      <h1>Grocero</h1>
      <ul className="item-list store--item-list">
        {items.map((item: any) => (
          <li>
            <div className="store--item-icon">
              <img src={item.image} alt="beetroot" />
            </div>
            <button
              onClick={function () {
                increase(item);
              }}
            >
              Add to cart({item.stock})
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
