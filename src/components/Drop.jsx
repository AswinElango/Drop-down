import React from "react";
import cse from "./Cse";
// import sub from "./Sub";

function Drop() {
  let a = cse;
  let b = 2;

  return (
    <div>
      <select>
        {a[b].map((items, index) => {
          return <option key={items}> {items} </option>;
        })}
      </select>
    </div>
  );
}

export default Drop;
