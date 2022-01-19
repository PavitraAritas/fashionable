import React from "react";

import { Body, Profile, Sidebar, MenuItems, Button } from "./styles/left";

export default function Left({ children, ...restProps }) {
  return <Body {...restProps}>{children}</Body>;
}

Left.Profile = function LeftProfile({children, ...restProps}){
    return <Profile {...restProps}>{children}</Profile>;
}

Left.Sidebar = function LeftSidebar({children, ...restProps}){
    return <Sidebar {...restProps}>{children}</Sidebar>;
}

Left.MenuItems = function LeftMenuItems({children, ...restProps}){
    return <MenuItems {...restProps}>{children}</MenuItems>;
}

Left.Button = function LeftMenuButton({children, ...restProps}){
    return <Button {...restProps}>{children}</Button>;
}