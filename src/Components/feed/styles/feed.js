import styled from "styled-components/macro";

export const Body = styled.div`
  padding: 0;

  @media screen and (max-width: 992px){
    grid-column: 1/3;
  }
`;

export const Stories = styled.div`
  display: flex;
  justify-content: space-between;
  height: 12rem;
  gap: 0.5rem;
`;

export const Story = styled.div`
  padding: var(--card-padding);
  border-radius: var(--card-border-radius);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 0.75rem;
  width: 100%;
  background: red;
  position: relative;
  overflow: hidden;

  ::before {
    content: "";
    display: block;
    width: 100%;
    height: 5rem;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.75));
    position: absolute;
    bottom: 0;
  }

  p {
    z-index: 2;
  }

  :nth-child(1) {
    background: url("https://images.unsplash.com/photo-1533561797500-4fad4750814e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5zdGFncmFtJTIwc3Rvcmllc3xlbnwwfHwwfHw%3D&w=1000&q=80")
      no-repeat center center/cover;
  }

  :nth-child(2) {
    background: url("https://images.unsplash.com/photo-1615912844755-bd8b6dd6789e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW5zdGFncmFtJTIwc3Rvcmllc3xlbnwwfHwwfHw%3D&w=1000&q=80")
      no-repeat center center/cover;
  }

  :nth-child(3) {
    background: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf961dcS9HruZGk14m9lV1caI8hUgbCOf4QndExiPpOYCH-h8_ILUX_9xuEoHsN6HpS9k&usqp=CAU")
      no-repeat center center/cover;
  }

  :nth-child(4) {
    background: url("https://images.pexels.com/photos/4014853/pexels-photo-4014853.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")
      no-repeat center center/cover;
  }

  :nth-child(5) {
    background: url("https://i.pinimg.com/originals/80/c0/75/80c075c58b92b97e29ae728b06f91f8a.jpg")
      no-repeat center center/cover;
  }

  :nth-child(6) {
    background: url("https://i.pinimg.com/originals/aa/ec/d8/aaecd82ad0b63ee0d2fa7e1b53e3f198.jpg")
      no-repeat center center/cover;
  }
  img {
    width: 2rem;
    height: 2rem;
    align-self: flex-start;
    border: 3px solid var(--color-primary);
    aspect-ratio: 1/1;
    border-radius: 50%;
    overflow: hidden;
  }
`;

export const PostBar = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  background: var(--color-white);
  padding: 0.4rem var(--card-padding);
  border-radius: var(--border-radius);

  img {
    width: 2.7rem;
    aspect-ratio: 1/1;
    border-radius: 50%;
    overflow: hidden;
  }

  input {
    justify-self: start;
    width: 100%;
    outline: none;
    border: none;
    padding-left: 1rem;
    background: transparent;
    color: var(--color-dark);
    margin-right: 1rem;
  }

  button {
    display: inline-block;
    border: none;
    font-family: inherit;
    text-align: center;
    padding: var(--btn-padding);
    font-weight: 400;
    border-radius: var(--border-radius);
    cursor: pointer;
    transition: all 300ms ease;
    font-size: 0.9rem;
    background: var(--color-primary);
    color: white;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Post = styled.div`
  background: var(--color-white);
  border-radius: var(--card-border-radius);
  padding: var(--card-padding);
  margin: 1rem 0;
  font-size: 0.85rem;
  /* line-height: 1.5; */
`;
export const Head = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const User = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  img {
    width: 2.7rem;
    height: 2.7rem;
    aspect-ratio: 1/1;
    border-radius: 50%;
    overflow: hidden;
  }
`;
export const Photo = styled.div`
position: relative;
  img {
    border-radius: var(--card-border-radius);
    overflow: hidden;
    margin: 0.7rem 0;
    height: 400px;
    width: 700px;
  }
  button {
    position: absolute;
    z-index: 0;
    left: 3%;
    bottom: 10%;
    padding: 0.5rem;
    background: white;
    font-family: inherit;
    font-weight: bold;
    border: none;
    border-radius: var(--border-radius);

    :hover{
      background: gray;
    }
  }
`;

export const ActionButtons = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 font-size: 1.4rem;
 margin: 0.6rem;

 span {
  padding-right: 1rem;
 }
` 




