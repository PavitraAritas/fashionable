import styled from "styled-components/macro";

export const Body = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  z-index: 20;
`;

export const Sidebar = styled.div`
  height: 100%;
  width: 500px;
  background-color: pink;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;

  div {
   
    top: 0;
    right: 0px;
    font-size: 36px;
    margin-left: 50px;
  }


  @media screen and (max-height: 450px) {
    padding-top: 15px;
    /* .sidenav a {font-size: 18px;} */
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;

  img {
    height: 150px;
    width: 150px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 25%;
  }
`;
