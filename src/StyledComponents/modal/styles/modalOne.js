import styled from "styled-components";
import CloseIcon from "@iconscout/react-unicons/icons/uil-times";

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  left: 0%;
  top: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 80rem;
  height: 600px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  position: relative;
  z-index: 3;
  border-radius: 10px;
`;

export const Photo = styled.img`
  width: 95%;
  height: 600px;
  border-radius: 10px 0 0 10px;
  background: #000;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  line-height: 1.8;
  margin-right: 5rem;
  color: #141414;
  h1 {
    margin-bottom: 0%;
  }
  h3 {
    margin-top: 0%;
  }
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: 1px solid black;
    border-radius: 4px;
    :hover{
      background: #999999;
      color:#141414;
    }
  }
`;

export const CloseModalButton = styled(CloseIcon)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const Box = styled.a`
  height: 30px;
  width: 30px;
  border: 1px solid gray;
  text-align: center;
  position:relative;
  border-radius: 3px;

  div{
    width: calc(1.414 * 31px);
       transform: rotate(45deg);
       transform-origin: top left;
       border-top: 1px solid blue;
       position: absolute;
       top: -1px;
       left: -1px;
       box-sizing: border-box;
  }

  :hover{
    background-color: aliceblue;
  }
`;
