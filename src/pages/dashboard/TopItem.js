const TopItem = ({item}) => {

  return (
    <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
        <img className="w-8 rounded-lg ml" src={item.logo} alt="game" />
        <span className="ml-2 font-medium">{item.text}</span>
        </div>
        <span>{item.price}</span>
    </div>           
  )
}

export default TopItem