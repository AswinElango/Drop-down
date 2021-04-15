import React, { useState } from "react";
import sem from "./Sem";
import cie from "./Cie";

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
  console.log(selectedValue);

  let optionItems = h.map((item) => (
    <option key={item.id}>{item.value}</option>
  ));

  return (
    <div>
      <select value={selectedValue} onChange={handleChange}>
        {optionItems}
      </select>
    </div>
  );
}

export default Dropdown;
