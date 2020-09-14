import React from "react";
import { RESULTS } from "./assets/data/results.js";

const Body = () => {
  const results = RESULTS;


  return (
    <tbody>
      {results.map((r) => (
        <tr key={r.name}>
          <td>{r.name}</td>
          <td>{r.username}</td>
          <td>{r.email}</td>
          <td>{r.phone}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default Body;
