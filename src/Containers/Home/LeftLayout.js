/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useState } from "react";
import HomeIcon from "@iconscout/react-unicons/icons/uil-home";
import ExploreIcon from "@iconscout/react-unicons/icons/uil-compass";
import NotificationsIcon from "@iconscout/react-unicons/icons/uil-bell";
import MessagesIcon from "@iconscout/react-unicons/icons/uil-envelope-alt";
import StoreIcon from "@iconscout/react-unicons/icons/uil-store";
import WishListIcon from "@iconscout/react-unicons/icons/uil-heart-sign";
import ThemeIcon from "@iconscout/react-unicons/icons/uil-palette";
import SettingsIcon from "@iconscout/react-unicons/icons/uil-setting";
import { Left } from "../../StyledComponents";
import Theme from "../../Pages/Theme";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import RepositoryContext from "../../Context/RepositoryContext";
// import useProfile from "../../Hooks/useProfile";
import LoadingPage from "../../Components/LoadingPage";

function LeftLayout({ currentUser }) {
  var { repository } = useContext(RepositoryContext);
  var [activeIcon, setActive] = useState("/");
  var history = useHistory();
  // const { user } = useProfile(currentUser.uid);
  const user = {name: 'Pavitra', userName: 'Pav'}

  const onClick = (path) => {
    setActive(path);
  };

  return (
    <Left>
      <Left.Profile
        active={activeIcon === "profile"}
        link="/profile"
        onClick={() => {
          onClick("profile");
          history.push("/profile");
        }}
      > {!user && <LoadingPage/>}
        {user && (
          <>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3F3e5C2_4KVWpSSvmBDVb8iPGyRnDB5DVPA&usqp=CAU"
              alt=""
            />
            <div>
              <h4>{user.name}</h4>
              <p>{user.userName}</p>
            </div>
          </>
        )}
      </Left.Profile>
      <Left.Sidebar>
        <Left.MenuItems>
          <a>
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
                <ThemeIcon onClick={Theme} />
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
      <Left.Button onClick={() => repository.signOut()}>Logout</Left.Button>
    </Left>
  );
}

export default LeftLayout;
