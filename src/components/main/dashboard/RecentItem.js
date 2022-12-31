const RecentItem = ({item}) => {
  return (
    <tr>
      <td className="text-sm text-gray-900 px-6 py-2 whitespace-nowrap">
        {item.date}
      </td>
      <td className="text-sm text-gray-900 px-6 py-2 whitespace-nowrap">
        {item.customer}
      </td>
      <td className="text-sm text-gray-900 px-6 py-2 whitespace-nowrap">
        {item.sales}
      </td>
      <td className="text-sm text-gray-900 px-6 py-2 whitespace-nowrap">
        {item.total}
      </td>
    </tr>
  );
};

export default RecentItem;
