import React from "react";
import { NavBar } from "../../StyledComponents";
import UilReact from "@iconscout/react-unicons/icons/uil-search";

function SearchBar() {
  return (
    <NavBar>
      <NavBar.Frame>
        <h2>FashiONable</h2>
        <NavBar.Search>
          <UilReact className="uil uil-search" size="20"></UilReact>
          <input type="search" placeholder="Search for fashionists and followers"/>
        </NavBar.Search>
        <NavBar.Create>
            <NavBar.CreateButton>Create</NavBar.CreateButton>
            <NavBar.Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3F3e5C2_4KVWpSSvmBDVb8iPGyRnDB5DVPA&usqp=CAU" ></NavBar.Avatar>
        </NavBar.Create>
      </NavBar.Frame>
    </NavBar>
  );
}

export default SearchBar;
