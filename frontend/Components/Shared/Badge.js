"use client"
import React from "react";

function Badge({ Icon, count, color, size }) {
  return (
    <>
      <span
        className={`${count > 0 ? "Badge" : "null"}`}
        data-current-count={`${count === 0 ? "" : count}`}
      >
        <Icon className={` ${color} ${size}`} />
      </span>
    </>
  );
}

export default Badge;
