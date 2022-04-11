import React from "react";

import { Body, Container, Search, Create, CreateButton, Avatar, Badge } from "./styles/searchbar";

export default function NavBar({ children, ...restProps }) {
  return <Body {...restProps}>{children}</Body>;
}

NavBar.Frame = function NavBarFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

NavBar.Search = function NavBarSearch({ children, ...restProps }) {
    return <Search {...restProps}>{children}</Search>;
  };

  NavBar.Create = function NavBarCreate({ children, ...restProps }) {
    return <Create {...restProps}>{children}</Create>;
  };

  NavBar.CreateButton = function NavBarCreateButton({ children, ...restProps }) {
    return <CreateButton {...restProps}>{children}</CreateButton>;
  };

  NavBar.Avatar = function NavBarAvatar({ children, ...restProps }) {
    return <Avatar {...restProps}>{children}</Avatar>;
  };

  NavBar.Badge = function NavBarBadge({ children, ...restProps }) {
    return <Badge {...restProps}>{children}</Badge>;
  };