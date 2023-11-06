import React from "react";

const Label = ({ value, color }) => {
  const labelStyle = {
    color: color,
  };
  return <div style={labelStyle}>{value}</div>;
};

export function Preview() {
  return <Label value={"solution"} color={blue}></Label>;
}

export default Label;
