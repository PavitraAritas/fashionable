import React from "react";
import {SideBar} from "../StyledComponents";

function Cart({showCart, setShowCart}) {

  console.log("message", showCart)

  return (
    <>
    {showCart ? (
    <SideBar>
    <SideBar.Layout showCart={showCart}>
      <div  onClick={() => setShowCart((prev) => !prev)}>
      </div>
      {/* <SideBar.Grid>
        <img
          alt="hdg"
          src="https://media.istockphoto.com/vectors/dress-icon-vector-id507081676?k=20&m=507081676&s=612x612&w=0&h=k1p9VA6YqPIwMEyj290EMrI1EtHIz4EK8yLf9YV7_DM="
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ lineHeight: "30px" }}>
            GRACE KARIN Women's Sleeveless Wrap V-Neck A-line Bridesmaid
            Cocktail Party Dress
          </div>
          <div style={{ fontWeight: "bold" }}>1 x ₹699.00</div>
        </div>
      </SideBar.Grid> */}
    </SideBar.Layout>

    </SideBar>
    ) : null}
    </>
  );
}

export default Cart;
