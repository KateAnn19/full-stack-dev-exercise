import React, {useState} from "react";
import "./assets/css/style.css";

import UserCards from './userCards.js';

import Head from "./Head";
import Body from "./Body";

function App() {
  const [toggle, setToggle] = useState(false);
  function toggleButton(){
    setToggle(!toggle);
  }
  return (
    <div className="App">
      <table>
        <Head />
        <Body />
      </table>
      <div>
        <button onClick={toggleButton} className="user_card_button">Click For User Cards</button>
        {toggle ? <UserCards/> : null} 
      </div>
    </div>
  );
}

export default App;
