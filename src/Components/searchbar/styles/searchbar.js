import styled from "styled-components/macro";

export const Body = styled.div`
  width: 100%;
  overflow-x: hidden;
  background: var(--color-white);
  padding: 0.35rem;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-left: 0%;
`;

export const Search = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  background: var(--color-light);
  border-radius: var(--border-radius);
  padding:  0.6rem 10rem;

  input {
    outline: none;
    border: none;
  }

  @media screen and (max-width: 992px){
    display: none;
  }
`;

export const Create = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const CreateButton = styled.div`
  display: inline-block;
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
`;

export const Avatar = styled.img`
  width: 2.7rem;
  aspect-ratio: 1/1;
  border-radius: 50%;
  overflow: hidden;
`;
