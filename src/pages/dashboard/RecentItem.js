const RecentItem = ({item}) => {
  return (
    <tr>
      <td className="text-sm text-gray-900 px-6 py-1 whitespace-nowrap">
        {item.name}
      </td>
      <td className="text-sm text-gray-900 px-6 py-1 whitespace-nowrap">
        ${item.current_price}
      </td>
      <td className="text-sm text-gray-900 px-6 py-1 whitespace-nowrap">
        {item.symbol}
      </td>
      <td className="text-sm text-gray-900 px-6 py-1 whitespace-nowrap">
        <img src={item.image} alt={item.name} width='25' />
      </td>
    </tr>
  );
};

export default RecentItem;
