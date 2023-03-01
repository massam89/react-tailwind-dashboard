import RecentItem from "./RecentItem";
import { useEffect, useState } from "react";
import { getCurrencyData } from "./_srv";
import { toast } from "react-toastify";
import { loaderIcon } from "../../assets/icons";

const Recent = () => {
  const [currencies, setCurrencies] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const getData = () => {
    setIsLoading(true)
    getCurrencyData()
    .then(res => {
      setCurrencies(res.data)
      setIsLoading(false)
    })
    .catch(err => {
      toast.error('error to get currencies data')
      setIsLoading(true)
    })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="col-span-2 bg-white rounded-lg shadow-xl p-6 mb-4 h-96 lg:h-[calc(100vh-25%)] overflow-auto">
      <h2 className="text-2xl font-bold mb-2">Currencies{isLoading && <button className='text-sm ml-6 border-2 border-gray-300 px-2 py1 rounded-lg'>reload</button>}</h2>
      <div className="flex flex-col overflow-hidden">
        <div className="sm:-mx-6 lg:-mx-8">
          <div className="py-1 inline-block min-w-full sm:px-8 lg:px-2 ">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th scope="col" className="text-lg font-medium text-gray-900 px-6 py-1 text-left">Name</th>
                    <th scope="col" className="text-lg font-medium text-gray-900 px-6 py-1 text-left">Current Price</th>
                    <th scope="col" className="text-lg font-medium text-gray-900 px-6 py-1 text-left">Symbol</th>
                    <th scope="col" className="text-lg font-medium text-gray-900 px-6 py-1 text-left">Icon</th>
                  </tr>
                </thead>
                <tbody>
                  {isLoading && loaderIcon('w-8 h-8 mx-auto text-gray-200 animate-spin dark:text-gray-100 fill-blue-700')} 
                  {!isLoading && currencies.map((item, index) => <RecentItem key={index} item={item} />)}     
                </tbody>
              </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recent;
