const TopItem = ({item}) => {

  return (
    <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
        <img className="w-8 rounded-lg ml" src={item.picture.thumbnail} alt="avatar" />
        <span className="ml-2 font-medium">{item.name.first + ' ' + item.name.last}</span>
        </div>
        <span>age: {item.dob.age}</span>
    </div>           
  )
}

export default TopItem