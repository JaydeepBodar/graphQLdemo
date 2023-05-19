import React from "react";
import "./App.css";
const Inputdata = ({label,onChange,value,name,placeholder,type}) => {
  return (
    <div className="form-group">
      <label>{label} :-</label>
      <input type={type} placeholder={placeholder} name={name} value={value} onChange={onChange}/>
    </div>
  );
};

export default Inputdata;
