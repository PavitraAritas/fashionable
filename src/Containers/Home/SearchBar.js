import React, { useState } from "react";
import { NavBar } from "../../StyledComponents";
import UilReact from "@iconscout/react-unicons/icons/uil-search";
import CartButton from "@iconscout/react-unicons/icons/uil-shopping-cart";
import Cart from "../../Pages/Cart"
import { useHistory } from "react-router-dom";

function SearchBar() {
  const [showCart, setShowCart] = useState(false);
  var [active, setActive] = useState("/");

  const openCart = () => {
    setShowCart(true);
    console.log("cart")
  };

  var history = useHistory();

  const onClick = (path) => {
    setActive(path);
  };

  return (
    <>
    <Cart showCart={showCart} setShowCart={setShowCart}/>
    <NavBar>
      <NavBar.Frame>
        <h2 onClick={() => {
          onClick("home");
          history.push("/");
        }}>FashiONable</h2>
        <NavBar.Search>
          <UilReact className="uil uil-search" size="20"></UilReact>
          <input
            type="search"
            placeholder="Search for fashionists and followers"
            />
        </NavBar.Search>
        <NavBar.Create>
          <div style={{ position: "relative" }}>
            <CartButton
              style={{ h: "2" }}
              onClick={openCart}
            />
            <NavBar.Badge>3</NavBar.Badge>
          </div>
          <NavBar.CreateButton>Create</NavBar.CreateButton>
          <NavBar.Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3F3e5C2_4KVWpSSvmBDVb8iPGyRnDB5DVPA&usqp=CAU"></NavBar.Avatar>
        </NavBar.Create>
      </NavBar.Frame>
    </NavBar>
    </>
  );
}

export default SearchBar;
