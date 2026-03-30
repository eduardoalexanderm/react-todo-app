import React from "react";
import "./css/Skeleton.css";

function Skeleton({ width, height }) {
  return (
    <div
      className="skeleton"
      style={{ width: width || "100%", height: height || "40px" }}
    ></div>
  );
}

export { Skeleton };