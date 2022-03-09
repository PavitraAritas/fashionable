import React, { useState } from "react";
import { ProfileBody } from "../StyledComponents";
import SettingIcon from "@iconscout/react-unicons/icons/uil-setting";

function Profile() {
  //   const tabs = [<TweetTab currentUser={currentUser} />];
  // const [activeTab, setactiveTab] = useState(0);
  // const tabLabels = ["Posts", "Videos", "Saved", "Tagged"];
  return (
    <ProfileBody>
      <ProfileBody.Header>
        <ProfileBody.Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3F3e5C2_4KVWpSSvmBDVb8iPGyRnDB5DVPA&usqp=CAU" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>
            <h2>Pavitra_aritas</h2>
            <button>Edit Profile</button>
            <SettingIcon />
          </div>
          <div>
            <text>38 Posts</text>
            <text>456 followers</text>
            <text>300 following</text>
          </div>
          <div>topsy_turvy</div>
        </div>
      </ProfileBody.Header>
      <ProfileBody.Highlight src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3F3e5C2_4KVWpSSvmBDVb8iPGyRnDB5DVPA&usqp=CAU" />
      <ProfileBody.Navbar>
        <li>
          <a class="active" href="#home">
            Posts
          </a>
        </li>
        <li>
          <a href="#news">Videos</a>
        </li>
        <li>
          <a href="#contact">Saved</a>
        </li>
        <li>
          <a href="#about">Tagged</a>
        </li>
      </ProfileBody.Navbar>
      <ProfileBody.Grid>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5ePqrmv66auTJvQ72ECve5IK6kEHJbvk1OA&usqp=CAU"/>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR874tmO_KzbXj27D2sX7fmCjQ6SqdUKGIFAQ&usqp=CAU"/>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWYJZ_PeqT8febQ9AzgijoTcwytYHb-gVtOg&usqp=CAU"/>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEKCK8SL_-GTIGIqvlebdudKSchYLhA-PvpA&usqp=CAU"/>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSDqeyMMfXUiX4ySwuGRUOSPjTN3Ld3XDNvA&usqp=CAU"/>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsyb790K5E44wGO_dQkxYAl8Ji6SaGIgJ1mw&usqp=CAU"/>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT3owAljH3vhXzyoACj3s-tpWvZXFVEnXYEA&usqp=CAU"/>
          {/* <img src="/w3images/rocks.jpg"  />
          <img src="/w3images/falls2.jpg"  />
          <img src="/w3images/paris.jpg"  />
          <img src="/w3images/nature.jpg"  />
          <img src="/w3images/mist.jpg"  />
          <img src="/w3images/paris.jpg"  /> */}
        </div>
      </ProfileBody.Grid>
    </ProfileBody>
  );
}

// function TweetTab({ currentUser }) {
//   const { profileTweets } = useProfile(currentUser.uid);
//   if (profileTweets.length === 0) {
//     return <div>NO TWEETS YET</div>;
//   }

//   return <TweetList feedTweets={profileTweets} user={currentUser} />;
// }

export default Profile;

// onClick={() => {
//   setactiveTab(index);
// }}
