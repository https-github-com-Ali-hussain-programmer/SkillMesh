
import React, { useState } from 'react';
import EastIcon from '@mui/icons-material/East';


interface MenuItemProps {
  title: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ title }) => {
  const [showArrow, setShowArrow] = useState(false);

  const mouseEnter = () => {
    setShowArrow(true);
  };

  const mouseLeave = () => {
    setShowArrow(false);
  };

  return (
    <div
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      className="flex justify-between flex-row py-2 px-4 hover:bg-slate-600 rounded-xl hover:cursor-pointer"
    >
      <h3 className="text-white text-[20px]">{title}</h3>
      {showArrow && <EastIcon className="text-white" />}
    </div>
  );
};

export default MenuItem;
