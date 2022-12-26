import logo from '../../assets/images/game.jpg'
import TopItem from './TopItem';
const Top = () => {

  const topList = [
    {
      text: 'Really great game 1',
      logo: logo,
      price: '$1000'
    },
    {
      text: 'Really great game 2',
      logo: logo,
      price: '$2000'
    },
    {
      text: 'Really great game 3',
      logo: logo,
      price: '$3000'
    },
    {
      text: 'Really great game 4',
      logo: logo,
      price: '$4000'
    },
    {
      text: 'Really great game 5',
      logo: logo,
      price: '$5000'
    },
    {
      text: 'Really great game 6',
      logo: logo,
      price: '$6000'
    },
  ]

  return (
    <div className="col-span-1 bg-white rounded-lg shadow-xl p-6 mb-4">
      <h2 className="text-2xl font-bold mb-5">Top Selling Product</h2>
      <div>
        {topList.map((item, index) => <TopItem key={index} item={item} />)}       
      </div>
    </div>
  );
};

export default Top;
