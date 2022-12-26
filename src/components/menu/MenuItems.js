const MenuItems = ({item}) => {
  return (
    <li className={`flex ${item.isSelect && 'bg-darkblue'} px-4 py-2 text-sm lg:text-lg`}>
      {item.icon("w-6 h-6")}
      <button className="ml-4">{item.text}</button>
    </li>
  );
};

export default MenuItems;
