import React from "react";

import {Container, Header, Avatar, NavBar, Highlights, Grid} from "./styles/profile";

export default function ProfileBody({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

ProfileBody.Header = function ProfileHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
};

ProfileBody.Avatar = function ProfileAvatar({ children, ...restProps }) {
  return <Avatar {...restProps}>{children}</Avatar>;
};

ProfileBody.Navbar = function ProfileNavbar({ children, ...restProps }) {
  return <NavBar {...restProps}>{children}</NavBar>;
};

ProfileBody.Highlight = function ProfileHighlight({ children, ...restProps }) {
  return <Highlights {...restProps}>{children}</Highlights>;
};

ProfileBody.Grid = function ProfileGrid({ children, ...restProps }) {
  return <Grid {...restProps}>{children}</Grid>;
};
