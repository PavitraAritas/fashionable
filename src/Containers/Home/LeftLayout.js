/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import HomeIcon from "@iconscout/react-unicons/icons/uil-home";
import ExploreIcon from "@iconscout/react-unicons/icons/uil-compass";
import NotificationsIcon from "@iconscout/react-unicons/icons/uil-bell";
import MessagesIcon from "@iconscout/react-unicons/icons/uil-envelope-alt";
import StoreIcon from "@iconscout/react-unicons/icons/uil-store";
import WishListIcon from "@iconscout/react-unicons/icons/uil-heart-sign";
import ThemeIcon from "@iconscout/react-unicons/icons/uil-palette";
import SettingsIcon from "@iconscout/react-unicons/icons/uil-setting";
import { Left } from "../../Components";

function LeftLayout() {
  return (
    <Left>
      <Left.Profile>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3F3e5C2_4KVWpSSvmBDVb8iPGyRnDB5DVPA&usqp=CAU" alt="" />
        <div>
          <h4>Pavitra Aritas</h4>
          <p>@pav</p>
        </div>
      </Left.Profile>
      <Left.Sidebar>
        <Left.MenuItems>
          <span>
            <i><HomeIcon /></i>
            <h3>Home</h3>
          </span>
          <span>
            <i><ExploreIcon /></i>
            <h3>Explore</h3>
          </span>
          <span>
            <i><NotificationsIcon /></i>
            <h3>Notifications</h3>
          </span>
          <span>
            <i><MessagesIcon /></i>
            <h3>Messages</h3>
          </span>
          <span>
            <i><StoreIcon /></i>
            <h3>Store</h3>
          </span>
          <span>
            <i><WishListIcon /></i>
            <h3>WishList</h3>
          </span>
          <span>
            <i><ThemeIcon /></i>
            <h3>Theme</h3>
          </span>
          <span>
            <i><SettingsIcon /></i>
            <h3>Settings</h3>
          </span>
        </Left.MenuItems>
      </Left.Sidebar>
      <button>Create Post</button>
    </Left>
  );
}

export default LeftLayout;
