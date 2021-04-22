import React from "react";
// import cse from "./Cse";
import { getSubjects } from "./Sub";

function Drop() {
  let a = "mech";
  let b = 3;

  return (
    <div>
      {/* <select>
        {a[b].map((items, index) => {
          return <option key={items}> {items} </option>;
        })}
      </select> */}
      <select>
        {getSubjects(a)[b].map((items, index) => {
          return <option key={items}> {items} </option>;
        })}
      </select>
    </div>
  );
}

export default Drop;
