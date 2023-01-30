import SurvayCard from "../../components/survayCard"
import { cardsInfo } from "../../data/cardsInfo"

const Survay = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:flex-wrap md:flex-row md:flex-nowrap items-center sm:justify-center md:items-stretch md:justify-between sm:space-x-2 pt-3 px-6">
        {cardsInfo.map(card => <SurvayCard card={card} />)}
    </div>
  )
}

export default Survay