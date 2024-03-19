import React, {useState} from 'react';
import './App.css';
import NavigatorBar from './component/NavigatorBar';

function App() {

  const [getNavbarValue, setNavbarValue] = useState("");
  const changeNavbarValue = () => {
    setNavbarValue("My Contact")
  }

  return (
    <div>
      <NavigatorBar/>
      <h1>
        HOMEPAGE
      </h1>
      <p>{getNavbarValue}</p>
      <button onClick={()=> changeNavbarValue()}>Change Navbar</button>
    </div>
  );
}

export default App;
