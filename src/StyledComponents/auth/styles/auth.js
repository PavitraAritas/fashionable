import styled from "styled-components/macro";

export const Background = styled.div`
position: relative;
background-color: Black;
z-index:10;
  img {
    height: 100vh;
    width: 100vw;
    opacity:0.2;
    z-index: 5;
  }
`;

export const LoginCard = styled.div`
background: var(--color-white);
width: 480px;
height: 600px;
z-index: 10;
position: absolute;
top: 20%;
left: 38%;
padding: var(--card-padding);
border-radius: var(--card-border-radius);


h1{
    font-size: 50px; 
    margin-top: 20px; 
    text-align: center;
}

h2{
    margin-top: 40px;
    text-align: center;
}

div{
    display: flex; 
    flex-direction: column;
    align-items: center;
}
`
export const Input = styled.input`
    margin-top: 20px; 
    height: 30px;
    width: 350px;
    border-radius: 30px;
    padding: 5px;
    padding-left: 30px;
    border: 1px solid rgb(29, 28, 28);
`
export const Button = styled.button`
    background-color: black;
    border: none;
    color: white;
    font-weight: 900;
    border-radius: 30px;
    height: 50px;
    margin-top: 20px;
    width: 350px;
    margin-left: 70px;
`