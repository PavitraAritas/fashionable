import styled from "styled-components/macro";

export const CustomizeTheme = styled.div`
background: rgba(255, 255, 255, 0.5);
width: 100vw;
height: 100vh;
position: fixed;
top: 0;
left: 0;
z-index: 100;
text-align: center;
display: grid;
place-items: center;
font-size: 0.9rem;
display: none;
`
export const Card =  styled.div`
background: var(--color-white);
padding: 3rem;
border-radius: var(--card-border-radius);
width: 50%;
`
export const FontSize = styled.div`
margin-top: 5rem;

div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--color-light);
    padding: var(--search-padding);
    border-radius: var(--card-border-radius);
}
`

export const ChooseSize = styled.div`
background: var(--color-secondary);
height: 0.3rem;
width: 100%;
margin: 0 1rem;
display: flex;
justify-content: space-between;
align-items: center;

span{
    width: 1rem;
    height: 1rem;
    background: var(--color-secondary);
    border-radius: 50%;
    cursor: pointer;

    .active{
        background: var(--color-primary);
    }
}
`
export const Color = styled.div`
margin-top: 2rem;
`
export const ChooseColor = styled.div`
background: var(--color-light);
padding: var(--search-padding);
border-radius: var(--card-border-radius);
display: flex;
align-items: center;
justify-content: space-between;

span{
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 50%;

    :nth-child(1){
        background: hsl(252, 75%, 60%);
    }
    :nth-child(1){
        background: hsl(52, 75%, 60%);
    }
    :nth-child(1){
        background: hsl(353,  75%, 60%);
    }
    :nth-child(1){
        background: hsl(152,  75%, 60%);
    }
    :nth-child(1){
        background: hsl(202,  75%, 60%);
    }

    .active {
        border: 5px solid white;
    }
}
`
export const Background = styled.div`
margin-top: 2rem;
`
export const ChooseBg = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
gap: 1.5rem;

div{
    padding: var(--card-padding);
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 0.4rem;
    cursor: pointer;

    .active {
        border: 2px solid var(--color-primary);
    }

    span{
        width: 2rem;
        height: 2rem;
        border: 2px solid var(--color-gray);
        border-radius: 50%;
        margin-right: 1rem;
    }
}
`
export const Bg1 = styled.div`
background: white;
color: black;
` 
export const Bg2 = styled.div`
background: hsl(252, 30%, 17%);
color: white;
` 
export const Bg3 = styled.div`
background: hsl(252, 30%, 10%);
color: white;
` 



