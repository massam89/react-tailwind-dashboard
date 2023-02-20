import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import TopItem from './TopItem';

const Top = () => {
  const [topCustomer, setTopCustomer] = useState([]) 

  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=20')
    .then(res => setTopCustomer(res.data.results))
    .catch(err => toast.error('error on getting top customer'))
  }, [])

  return (
    <div className="col-span-1 bg-white rounded-lg shadow-xl p-6 mb-4 h-96 lg:h-[calc(100vh-17%)] overflow-auto">
      <h2 className="text-2xl font-bold mb-5">Top customer</h2>
      <div>
        {topCustomer.map((item, index) => <TopItem key={index} item={item} />)}       
      </div>
    </div>
  );
};

export default Top;
