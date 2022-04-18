import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { ModalPage } from "../StyledComponents";

function ModalOne({ showModal, setShowModal, props }) {
  // const modalRef = useRef();
  var [active, setActive] = useState("/");
  var history = useHistory();

  const onClick = (path) => {
    setActive(path);
  };
  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(100%)`,
  });

  function NoOfLikes() {
    let likeCount = 0;
    Object.keys(props.likes).map(function (key, index) {
      if (props.likes[key] === true) {
        return likeCount++;
      }
      return likeCount;
    });
    return likeCount;
  }

  const closeModal = (e) => {
    // if (modalRef.current === e.target) {
    setShowModal(false);
  };

  //   const keyPress = useCallback(
  //     e => {
  //       if (e.key === 'Escape' && showModal) {
  //         setShowModal(false);
  //         console.log('I pressed');
  //       }
  //     },
  //     [setShowModal, showModal]
  //   );

  //   useEffect(
  //     () => {
  //       document.addEventListener('keydown', keyPress);
  //       return () => document.removeEventListener('keydown', keyPress);
  //     },
  //     [keyPress]
  //   );
  console.log("show modal", showModal);
  return (
    <>
      {showModal ? (
        <ModalPage>
          <animated.div style={animation}>
            <ModalPage.Wrapper showModal={showModal}>
              <ModalPage.Photo
                src="https://media.istockphoto.com/vectors/dress-icon-vector-id507081676?k=20&m=507081676&s=612x612&w=0&h=k1p9VA6YqPIwMEyj290EMrI1EtHIz4EK8yLf9YV7_DM="
                alt="camera"
              />
              <ModalPage.Content>
                <h1>
                  GRACE KARIN Women's Sleeveless Wrap V-Neck A-line Bridesmaid
                  Cocktail Party Dress
                </h1>
                <h3>⭐️⭐️⭐️⭐️⭐️ 196979 ratings | 256 reviews</h3>
                <p>Its a crazy valentino dress!</p>
                <div style={{ fontSize: "170%" }}>
                  ₹699<sup style={{ fontSize: "15px" }}>00</sup>
                </div>
                <div style={{ display: "flex", gap: "5px" }}>
                  <ModalPage.Box style={{ backgroundColor: "orange" }} />
                  <box
                    style={{
                      height: "30px",
                      width: "30px",
                      border: "1px solid",
                      backgroundColor: "violet",
                    }}
                  ></box>
                  <box
                    style={{
                      height: "30px",
                      width: "30px",
                      border: "1px solid",
                      backgroundColor: "red",
                    }}
                  ></box>
                  <box
                    style={{
                      height: "30px",
                      width: "30px",
                      border: "1px solid",
                      backgroundColor: "blue",
                    }}
                  ></box>
                </div>
                <div style={{ display: "flex", gap: "5px", marginTop: "10px" }}>
                  <ModalPage.Box>XS</ModalPage.Box>
                  <ModalPage.Box>S</ModalPage.Box>
                  <ModalPage.Box>M</ModalPage.Box>
                  <ModalPage.Box>
                    <div></div>L
                  </ModalPage.Box>
                  <ModalPage.Box>
                    <div></div>
                    XL
                  </ModalPage.Box>
                </div>
                <button
                  onClick={NoOfLikes}
                  style={{ margin: "10px", marginLeft: "0px" }}
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => {
                    onClick("checkout");
                    history.push("/checkout");
                  }}
                >
                  Order Now
                </button>
              </ModalPage.Content>
              <ModalPage.Button
                aria-label="Close modal"
                onClick={() => setShowModal((prev) => !prev)}
              />
            </ModalPage.Wrapper>
          </animated.div>
        </ModalPage>
      ) : null}
    </>
  );
}

export default ModalOne;
