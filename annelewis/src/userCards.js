import React, { useState, useEffect } from "react";
import axios from "axios";
import profilepicture from "./undraw_personal_information_962o.png";
import "./UserCards.css";
import { TransitionGroup }  from 'react-transition-group'; // ES6
//var ReactCSSTransitionGroup = require("react-transition-group"); // ES5 with npm
//styles

function UserCards() {
  const [userData, setUserData] = useState([]);
  const [promiseComplete, setPromiseComplete] = useState(false);
  const dataLimit = 25;
  const data = [];

  useEffect(() => {
    makeApiCalls();
  }, []);

  function makeApiCalls() {
    for (let i = 0; i < dataLimit; i++) {
      axios
        .get(
          "https://cors-anywhere.herokuapp.com/http://faker.hook.io/?property=helpers.userCard&amp;locale=en_US"
        )
        .then((response) => {
          data.push(response.data);
        })
        .catch((error) => console.error(error));
    }

    setTimeout(function () {
      setUserData(data);
      return setPromiseComplete(!promiseComplete);
    }, 14000);
  }

  return (
    <div className="container">
      {promiseComplete ? (
        userData.map((u) => (
          <div className="card" key={u.name}>
            <div className="profilepicCont">
              <img
                className="profilePic"
                alt="vector image of woman with profile details"
                src={profilepicture}
              ></img>
            </div>

            <div className="info-container">
              <div className="dataTags">
                <h2>Name</h2>
                <h2>Username</h2>
                <h2>Email</h2>
                <h2>Street</h2>
                <h2>Suite</h2>
                <h2>City</h2>
                <h2>Zipcode</h2>
                <h2>Company Name</h2>
                <h2>Catch Phrase</h2>
                <h2>BS</h2>
                <h2>Phone</h2>
                <h2>Website</h2>
              </div>
              <div className="data">
                <h2>{u.name}</h2>
                <h2>{u.username}</h2>
                <h2>{u.email}</h2>
                <h2>{u.address.street}</h2>
                <h2>{u.address.suite}</h2>
                <h2>{u.address.city}</h2>
                <h2>{u.address.zipcode}</h2>
                <h2>{u.company.name}</h2>
                <h2>{u.company.catchPhrase}</h2>
                <h2>{u.company.bs}</h2>
                <h2>{u.phone}</h2>
                <h2>{u.website}</h2>
              </div>
            </div>
          </div>
        ))
      ) : (
        <>
          
            <div className="loader5"></div>
            <TransitionGroup
            transitionName="example"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
          >
            <div>
              <h2>Data Loading...This could take up to 15 seconds...</h2>
            </div></TransitionGroup>
          
        </>
      )}
    </div>
  );
}

export default UserCards;
