import React, { useState, useEffect } from "react";
import axios from "axios";

//styles
import "./UserCards.css";

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
        .get("http://faker.hook.io/?property=helpers.userCard&amp;locale=en_US")
        .then((response) => {
          data.push(response.data);
        })
        .catch((error) => console.error(error));
    }

    setTimeout(function () {
      setUserData(data);
      return setPromiseComplete(!promiseComplete);
    }, 9000);
  }

  return (
    <div className="container">
      {promiseComplete && userData.length >= 2 ? (
        userData.map((u) => (
          <div className="card" key={u.name}>
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
        ))
      ) : (
        <>
          <div className="loader5"></div>
          <div>
            <h2>Data Loading...This is will take up to 1 minute...</h2>
          </div>
        </>
      )}
    </div>
  );
}

export default UserCards;
