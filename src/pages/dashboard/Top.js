import { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { loaderIcon } from '../../assets/icons';
import TopItem from './TopItem';
import { getCustomersData } from './_srv';

const Top = () => {
  const [topCustomer, setTopCustomer] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const getData = () => {
    setIsLoading(true)
    getCustomersData()
    .then(res => {
      setTopCustomer(res.data.results)
      setIsLoading(false)
    })
    .catch(err => {
      toast.error('error on getting top customer')
    })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="col-span-1 bg-white rounded-lg shadow-xl p-6 mb-4 h-96 lg:h-[calc(100vh-17%)] overflow-auto">
      <h2 className="text-2xl font-bold mb-5">Top customers {isLoading && <button className='text-sm ml-6 border-2 border-gray-300 px-2 py1 rounded-lg'>reload</button>}</h2>  
      <div>
        {isLoading && loaderIcon('w-8 h-8 mx-auto mt-24  text-gray-200 animate-spin dark:text-gray-100 fill-blue-700')} 
        {!isLoading && topCustomer.map((item, index) => <TopItem key={index} item={item} />)}       
      </div>
    </div>
  );
};

export default Top;
