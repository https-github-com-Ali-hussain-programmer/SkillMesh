import React from 'react';

interface CommunityItemProps {
  icon: React.ReactElement;
  title: string;
  description: string;
}

const CommunityItem: React.FC<CommunityItemProps> = ({ icon, title, description }) => {
  return (
    <div className="gap-3 flex flex-col text-sm items-start bg-white rounded-2xl shadow-xl sm:w-80 py-6 pb-[40px] px-[25px] mx-[10px] hover:cursor-pointer hover:shadow-2xl">
      {icon}
      <h2 className="text-center px-2 text-[22px] font-[700]">{title}</h2>
      <p className="px-2 text-justify">{description}</p>
    </div>
  );
};

export default CommunityItem;
