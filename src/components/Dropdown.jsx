import React, { useState } from "react";
import sem from "./Sem";
import cie from "./Cie";
// import cse from "./Cse";
import { getSubjects } from "./Sub";

function Dropdown(props) {
  let h;
  let dept = "cse";
  const [selectedValue1, setSelectedValue1] = useState();
  const [selectedValue2, setSelectedValue2] = useState();
  let subjects = [];
  const choose = props.he;

  if (choose === "sem") {
    h = sem;
  } else if (choose === "cie") {
    h = cie;
  }

  const handleChange = (e) => {
    setSelectedValue1(e.target.value);
  };

  const handleChange2 = (e) => {
    setSelectedValue2(e.target.value);
  };

  // let a = selectedValue1;
  // let b = a - 1;
  console.log(selectedValue2);
  if (selectedValue1 >= 1) {
    subjects = getSubjects(dept)[selectedValue1 - 1];
  }

  // if(isNaN(b)) {
  //   // console.log(b);
  // } else {
  //   b = a - 1
  // }
  // console.log(b);
  // if (a === "undefined") {
  //   console.log(a);
  // } else {
  //   if (isNaN(b)) {
  //     b = 0;
  //     // console.log(b);
  //   } else {
  //     b = a;
  //   }
  // }

  // console.log(cse[b]);

  // let opt = cse.map((it) => <option key={it}>{it}</option>);

  // let optionItems = h.map((item) => (
  //   <option key={item.id}>{item.value}</option>
  // ));

  // console.log(getSubjects(subj)[b]);

  return (
    <div>
      <select value={selectedValue1} onChange={handleChange}>
        {h.map((item) => (
          <option key={item.id}>{item.value}</option>
        ))}
      </select>
      <br />
      {/* <select value={selectedValue} onChange={handleChange}>
        {opt}
      </select> */}
      <select value={selectedValue2} onChange={handleChange2}>
        {subjects.map((items, index) => {
          return <option key={items}> {items} </option>;
        })}
      </select>
    </div>
  );
}

export default Dropdown;
