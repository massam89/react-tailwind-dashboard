import { topList } from '../../data/topList';
import TopItem from './TopItem';

const Top = () => {

  return (
    <div className="col-span-1 bg-white rounded-lg shadow-xl p-6 mb-4 h-96 lg:h-[calc(100vh-17%)] overflow-auto">
      <h2 className="text-2xl font-bold mb-5">Top Selling Product</h2>
      <div>
        {topList.map((item, index) => <TopItem key={index} item={item} />)}       
      </div>
    </div>
  );
};

export default Top;
