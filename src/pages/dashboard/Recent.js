import RecentItem from "./RecentItem";
import { recentSales } from "../../data/recentSales";

const Recent = () => {

  return (
    <div className="col-span-2 bg-white rounded-lg shadow-xl p-6 mb-4 h-96 lg:h-[calc(100vh-17%)] overflow-auto">
      <h2 className="text-2xl font-bold mb-2">Recent Sales</h2>
      <div className="flex flex-col overflow-x-auto">
        <div className="sm:-mx-6 lg:-mx-8">
          <div className="py-1 inline-block min-w-full sm:px-8 lg:px-2 ">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th scope="col" className="text-lg font-medium text-gray-900 px-6 py-2 text-left">Date</th>
                    <th scope="col" className="text-lg font-medium text-gray-900 px-6 py-2 text-left">Customer</th>
                    <th scope="col" className="text-lg font-medium text-gray-900 px-6 py-2 text-left">Sales</th>
                    <th scope="col" className="text-lg font-medium text-gray-900 px-6 py-2 text-left">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {recentSales.map((item, index) => <RecentItem key={index} item={item} />)}     
                </tbody>
              </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recent;
