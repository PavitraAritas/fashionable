import React, {useState} from "react";
import {SideBar} from "../StyledComponents";
import CloseIcon from "@iconscout/react-unicons/icons/uil-times";
import { useHistory } from "react-router-dom";

function Cart({showCart, setShowCart}) {
  var [activeIcon, setActive] = useState("/");
  var history = useHistory();

  const onClick = (path) => {
    setActive(path);
  };

  return (
    <>
    {showCart ? (
    <SideBar>
    <SideBar.Layout showCart={showCart}>
      <button  onClick={() => setShowCart((prev) => !prev)}>
        <CloseIcon/>
      </button>
      <SideBar.Grid>
        <img
          alt="hdg"
          src="https://media.istockphoto.com/vectors/dress-icon-vector-id507081676?k=20&m=507081676&s=612x612&w=0&h=k1p9VA6YqPIwMEyj290EMrI1EtHIz4EK8yLf9YV7_DM="
        />
        <div style={{ display: "flex", flexDirection: "column", marginTop:"15px" }}>
          <div style={{ lineHeight: "30px" }}>
            GRACE KARIN Women's Sleeveless Wrap V-Neck A-line Bridesmaid
            Cocktail Party Dress
          </div>
          <div style={{ fontWeight: "bold", marginTop:"10px" }}>1 x ₹699.00</div>
          <CloseIcon style={{paddingLeft:"250px" }} onClick={{}}/>
        </div>
      </SideBar.Grid>
      <hr/>
      <SideBar.Grid>
        <img
          alt="hdg"
          src="https://media.istockphoto.com/vectors/dress-icon-vector-id507081676?k=20&m=507081676&s=612x612&w=0&h=k1p9VA6YqPIwMEyj290EMrI1EtHIz4EK8yLf9YV7_DM="
        />
        <div style={{ display: "flex", flexDirection: "column", marginTop:"15px" }}>
          <div style={{ lineHeight: "30px" }}>
            GRACE KARIN Women's Sleeveless Wrap V-Neck A-line Bridesmaid
            Cocktail Party Dress
          </div>
          <div style={{ fontWeight: "bold", marginTop:"10px" }}>1 x ₹699.00</div>
          <CloseIcon style={{paddingLeft:"250px" }}/>
        </div>
      </SideBar.Grid>
      <hr/>
      <div style={{display:"flex", justifyContent:"center", marginTop:"30px", gap:"40px"}}>
      <button style={{border:"1px solid black", background:"black", color:"white", paddingLeft:"50px", paddingRight:"50px", padding:"20px"}}>View Cart</button>
      <button style={{border:"1px solid black", background:"black", color:"white", paddingLeft:"50px", paddingRight:"50px", padding:"20px"}} onClick={() => {
          onClick("checkout");
          history.push("/checkout");
          setShowCart((prev) => !prev);
        }}>Checkout</button>
      </div>
    </SideBar.Layout>

    </SideBar>
    ) : null}
    </>
  );
}

export default Cart;
