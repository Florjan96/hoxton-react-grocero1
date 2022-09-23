export function Header(){
    return(

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
        
    )
}
