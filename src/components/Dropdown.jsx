import React, { useState } from "react";
import sem from "./Sem";
import cie from "./Cie";
import cse from "./Cse";

function Dropdown(props) {
  let h;
  const [selectedValue, setSelectedValue] = useState();
  const choose = props.he;

  if (choose === "sem") {
    h = sem;
  } else if (choose === "cie") {
    h = cie;
  }

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };
  let a = selectedValue;
  let b = parseInt(a) - 1;
  console.log(b);

  console.log(cse[b]);

  let opt = cse.map((it) => <option key={it}>{it}</option>);

  let optionItems = h.map((item) => (
    <option key={item.id}>{item.value}</option>
  ));

  // console.log(sub);

  return (
    <div>
      <select value={selectedValue} onChange={handleChange}>
        {optionItems}
      </select>
      <br />
      <select value={selectedValue} onChange={handleChange}>
        {opt}
      </select>
    </div>
  );
}

export default Dropdown;
