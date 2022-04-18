import React from "react";

function Checkout() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "75%",
        marginLeft: "19rem",
        alignItems: "flex-start",
        gap: "20px",
        marginTop: "20px",
      }}
    >
      <div>
        <h1>Checkout</h1>
        <hr style={{width:"500px"}}/>
        <h2>Billing Details</h2>
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "5px",
              marginTop: "10px",
            }}
          >
            <text>First Name *</text>
            <input
              type="text"
              placeholder=""
              style={{ padding: "10px", marginTop: "4px" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "5px",
              marginTop: "10px",
            }}
          >
            <text>Last Name *</text>
            <input
              type="text"
              placeholder=""
              style={{ padding: "10px", marginTop: "4px" }}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "5px",
            marginTop: "10px",
          }}
        >
          <text>Country/Region *</text>
          <input
            type="text"
            placeholder=""
            style={{ padding: "10px", marginTop: "4px" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "5px",
            marginTop: "15px",
          }}
        >
          <text>House no., Flat, Street address *</text>
          <input
            type="text"
            placeholder="House number and street name"
            style={{ padding: "10px", marginTop: "4px" }}
          />
          <input
            type="text"
            placeholder="Area, Street, Sector, Village"
            style={{ padding: "10px", marginTop: "5px" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "5px",
            marginTop: "15px",
          }}
        >
          <text>Town/City *</text>
          <input
            type="text"
            placeholder=""
            style={{ padding: "10px", marginTop: "4px" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "5px",
            marginTop: "15px",
          }}
        >
          <text>District *</text>
          <input
            type="text"
            placeholder=""
            style={{ padding: "10px", marginTop: "4px" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "5px",
            marginTop: "15px",
          }}
        >
          <text>Pin/Zipcode *</text>
          <input
            type="text"
            placeholder=""
            style={{ padding: "10px", marginTop: "4px" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "5px",
            marginTop: "15px",
          }}
        >
          <text>Phone *</text>
          <input
            type="number"
            placeholder=""
            style={{ padding: "10px", marginTop: "4px" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "5px",
            marginTop: "15px",
          }}
        >
          <text>Email Address *</text>
          <input
            type="email"
            placeholder=""
            style={{ padding: "10px", marginTop: "4px" }}
          />
        </div>
      </div>
      <div>
        <h2>Your Order</h2>
        <div
          style={{
            display: "flex",
            border: "1px solid black",
            height: "auto",
            width: "700px",
            gap: "7rem",
            padding: "5px",
          }}
        >
          <div>
            <div style={{ fontSize: "120%", fontWeight: "bolder", marginTop:"3px", marginBottom:"10px" }}>Product</div>
            <div style={{paddingBottom:"8px"}}>
              GRACE KARIN Women's Sleeveless Wrap V-Neck A-line Bridesmaid
              Cocktail Party Dress
            </div>
            <hr/>
            <div style={{paddingBottom:"8px"}}>
              GRACE KARIN Women's Sleeveless Wrap V-Neck A-line Bridesmaid
              Cocktail Party Dress
            </div>
          </div>
          <div >
            <div style={{ fontSize: "120%", fontWeight: "bolder", marginTop:"3px", marginBottom:"10px" }}>Subtotal</div>
            <div style={{paddingTop:"7px",paddingBottom:"16px"}}>₹699.00</div>
            <hr/>
            <div>₹699.00</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
