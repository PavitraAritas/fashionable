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
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3F3e5C2_4KVWpSSvmBDVb8iPGyRnDB5DVPA&usqp=CAU"
          alt=""
        />
        <div>
          <h4>Pavitra Aritas</h4>
          <p>@pav</p>
        </div>
      </Left.Profile>
      <Left.Sidebar>
        <Left.MenuItems>
          <a >
            <span>
              <i>
                <HomeIcon />
              </i>
            </span>
            <h3>Home</h3>
          </a>
          <a>
            <span>
              <i>
                <ExploreIcon />
              </i>
            </span>
            <h3>Explore</h3>
          </a>
          <a>
            <span>
              <i>
                <NotificationsIcon />
              </i>
            </span>
            <h3>Notifications</h3>
          </a>
          <a>
            {" "}
            <span>
              <i>
                <MessagesIcon />
              </i>
            </span>
            <h3>Messages</h3>
          </a>
          <a>
            <span>
              <i>
                <StoreIcon />
              </i>
            </span>
            <h3>Store</h3>
          </a>
          <a>
            <span>
              <i>
                <WishListIcon />
              </i>
            </span>
            <h3>WishList</h3>
          </a>
          <a>
            <span>
              <i>
                <ThemeIcon />
              </i>
            </span>
            <h3>Theme</h3>
          </a>
          <a>
            <span>
              <i>
                <SettingsIcon />
              </i>
            </span>
            <h3>Settings</h3>
          </a>
        </Left.MenuItems>
      </Left.Sidebar>
      <Left.Button>Create Post</Left.Button>
    </Left>
  );
}

export default LeftLayout;
