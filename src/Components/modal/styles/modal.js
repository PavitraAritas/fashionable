import styled from 'styled-components';
import CloseIcon from '@iconscout/react-unicons/icons/uil-times'

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
width: 99rem;
height: 800px;
box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
background: #fff;
color: #000;
display: grid;
grid-template-columns: 1fr 1fr;
position: relative;
z-index: 10;
border-radius: 10px;
`;

export const Photo = styled.img`
width: 100%;
height: 700px;
border-radius: 10px 0 0 10px;
background: #000;
`;

export const Content = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
line-height: 1.8;
color: #141414;
p {
  margin-bottom: 1rem;
}
button {
  padding: 10px 24px;
  background: #141414;
  color: #fff;
  border: none;
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