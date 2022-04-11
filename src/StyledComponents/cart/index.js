import React from "react";

import { Body, Sidebar, Container} from "./styles/cart";

export default function SideBar({ children, ...restProps }) {
  return <Body {...restProps}>{children}</Body>;
}

SideBar.Grid = function SideBarGrid({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

SideBar.Layout = function SideBarLayout({ children, ...restProps }) {
    return <Sidebar {...restProps}>{children}</Sidebar>;
  };