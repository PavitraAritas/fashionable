import styled from "styled-components/macro";

export const Container = styled.div`
  /* width: 80%; */
  /* top: 2rem; */
  display: flex;
  flex-direction: column;
  margin-left: 18rem;
  /* margin-right: 20rem;
  border: 0.1rem solid; */
`;

export const Header = styled.div`
  height: fit-content;
  column-gap: 5rem;
  display: flex;
  div {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    column-gap: 1rem;
    margin-top: 10px;
    h2 {
      margin-top: 0px;
    }
    button {
      z-index: 0;
      left: 3%;
      bottom: 10%;
      padding: 0.5rem;
      background: white;
      font-family: inherit;
      width: 100px;
      font-weight: bold;
      border: none;
      border-radius: var(--border-radius);

      :hover {
        background: gray;
      }
    }
  }
`;

export const Avatar = styled.img`
  width: 10rem;
  aspect-ratio: 1/1;
  border-radius: 50%;
  /* overflow: hidden; */
`;

export const NavBar = styled.ul`
  list-style-type: none;
  margin-top: 2rem;
  padding: 0;
  display: flex;
  /* max-width: fit-content;
  width: 100%; */

  li {
    float: left;
    a {
      display: block;
      color: black;
      text-align: center;
      padding: 14px 16px;
      padding-left: 55px;
      padding-right: 55px;
      text-decoration: none;
      justify-content: space-evenly;
      :hover {
        background-color: white;
      }
      &active {
        background-color: var(--color-primary);
      }
    }
  }
`;

export const Highlights = styled.img`
  margin-top: 3rem;
  width: 5rem;
  aspect-ratio: 1/1;
  border-radius: 50%;
  /* overflow: hidden; */
`;

export const Grid = styled.div`
 div{
   margin-left: -110px;
   display: grid;
 grid-template-columns: auto auto auto;
  img{
   padding: 2.8px;
   width: 300px;
   height: 370px;
   object-fit: cover;
 }
 }

  /* div {
    -ms-flex: 25%; 
    flex: 25%;
    max-width: 25%;
    padding: 0 4px;

    img {
      margin-top: 8px;
      vertical-align: middle;
      width: 100%;
    }
  } */
`;
