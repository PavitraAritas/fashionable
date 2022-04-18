import React, {Fragment} from "react";
import "./App.css";
import Feed from "./Containers/Home/Feed";
import LeftLayout from "./Containers/Home/LeftLayout";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { IsUserRedirect, ProtectedRoute } from "./Helpers/Routes";
import RightLayout from "./Containers/Home/RightLayout";
import SearchBar from "./Containers/Home/SearchBar";
import Auth from './Pages/Auth';
import useAuthListener from './Hooks/useAuth';
import Profile from './Pages/Profile';
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";

function App() {
  const { user } = useAuthListener();
  return (
    <BrowserRouter>
      <Switch>
        <IsUserRedirect user={user} loggedInPath="/" path="/auth">
          <Auth />
        </IsUserRedirect>
        <ProtectedRoute user={user} path="/">
          <Fragment>
            <div className="App">
              <SearchBar />
            <div className="Container">
              <Route path="/" exact>
              <LeftLayout currentUser={user}/>
                <Feed />
                {/* <Route path="/" exact></Route> */}
                {/* <RightLayout /> */}
              </Route>
              <Route path="/profile"><Profile currentUser={user}/></Route>
              
              <Route path="/checkout"><Checkout/></Route>
              </div>
            </div>
          </Fragment>
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

/*.main{
  position: relative;
  top:5.4rem;
}*/

/*.main .container{
  display: grid;
  grid-template-columns:18vh auto 20vw;
  column-gap: 2rem;
  position: relative;
}*/
