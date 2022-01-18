import './App.css';
import Feed from './Containers/Home/Feed';
import LeftLayout from './Containers/Home/LeftLayout';
import RightLayout from './Containers/Home/RightLayout';
import SearchBar from './Containers/Home/SearchBar';

function App() {
  return (
    <div className="App">
      <SearchBar/>
      <div className='Container'>
      <LeftLayout/>
      <Feed/>
      <RightLayout/>
      </div>
    </div>
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


