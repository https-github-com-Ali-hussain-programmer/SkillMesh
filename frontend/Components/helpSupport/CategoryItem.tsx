// components/CategoryItem.tsx
import React from 'react';

interface CategoryItemProps {
  icon: React.ReactElement;
  title: string;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ icon, title }) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-2xl shadow-xl w-full m-4 md:m-6 sm:w-80 md:py-12 py-4 hover:cursor-pointer hover:shadow-2xl">
      {icon}
      <h2 className="text-center px-2 text-[15px] md:text-[20px] font-bold">{title}</h2>
    </div>
  );
};

export default CategoryItem;
