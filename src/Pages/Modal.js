import React from 'react';
import { useSpring, animated } from 'react-spring';
import { ModalPage } from '../Components';

function Modal({showModal, setShowModal}) {
    // const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(100%)`
  });

  const closeModal = e => {
    // if (modalRef.current === e.target) {
      setShowModal(false);
    }


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
        <ModalPage onClick={closeModal} >
          <animated.div style={animation}>
            <ModalPage.Wrapper showModal={showModal}>
              <ModalPage.Photo src="https://media.istockphoto.com/vectors/dress-icon-vector-id507081676?k=20&m=507081676&s=612x612&w=0&h=k1p9VA6YqPIwMEyj290EMrI1EtHIz4EK8yLf9YV7_DM=" alt='camera' />
              <ModalPage.Content>
                <h1>Are you ready?</h1>
                <p>Get exclusive access to our next launch.</p>
                <button>Join Now</button>
              </ModalPage.Content>
              <ModalPage.Button
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}
              />
            </ModalPage.Wrapper>
          </animated.div>
        </ModalPage>
      ) : null}
    </>
  );

}

export default Modal;
