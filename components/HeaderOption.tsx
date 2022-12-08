import React from 'react';

interface HeaderOptionProps {
  Icon: any;
  title: string;
  selected?: boolean;
}

const HeaderOption: React.FC<HeaderOptionProps> = ({
  Icon,
  title,
  selected,
}) => {
  return (
    <div
      className={`flex items-center space-x-1 border-b-4 border-transparent hover:text-blue-500 cursor-pointer hover:border-blue-500 pb-3 ${
        selected && 'text-blue-500 border-blue-500'
      }`}
    >
      <Icon className='h-4' />
      <p className='hidden md:block'>{title}</p>
    </div>
  );
};

export default HeaderOption;
