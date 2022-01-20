import styled from "styled-components/macro";

export const Body = styled.div`
  height: max-content;
  position: sticky;
  top: var(--sticky-top-left);
`;

export const Profile = styled.div`
  /* padding: var(--card-padding); */
  background: var(--color-white);
  border-radius: var(--card-border-radius);
  display: flex;
  align-items: center;
  column-gap: 1rem;
  width: 100%;

  img {
    width: 2.7rem;
    aspect-ratio: 1/1;
    border-radius: 50%;
    overflow: hidden;
  }
`;

export const Sidebar = styled.div`
  margin-top: 1rem;
  background: var(--color-white);
  border-radius: var(--card-border-radius);
`;

export const MenuItems = styled.a`
  a {
    display: flex;
    align-items: center;
    height: 4rem;
    cursor: pointer;
    transition: all 300ms ease;
    position: relative;

    :hover {
      background: var(--color-light);

      ::before {
        content: "";
        display: block;
        width: 0.5rem;
        height: 100%;
        position: absolute;
        background: var(--color-primary);
      }
    }

    .active {
      background: var(--color-light);
    }

    i {
      color: var(--color-gray);
      padding: 1rem 1rem;
      &.active {
        color: var(--color-primary);
      }
    }

    h3 {
      margin-left: 0.6rem;
      font-size: 1rem;
      &.active {
        color: var(--color-primary);
      }
    }
  }
`;

export const Button = styled.div`
  margin-top: 1rem;
  width: 100%;
  text-align: center;
  display: inline-block;
  padding: 1rem 0;
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

