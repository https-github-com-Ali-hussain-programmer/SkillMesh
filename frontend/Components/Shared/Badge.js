import React from "react";

function Badge({ Icon, count, color, size }) {
  return (
    <>
      <span className="Badge" data-current-count={count}>
        <Icon className={` ${color} ${size}`} />
      </span>
    </>
  );
}

export default Badge;
