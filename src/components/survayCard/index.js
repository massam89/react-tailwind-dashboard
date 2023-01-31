import { arrowDownIconWithTail, arrowUpIcon, trolleyIcon } from "../../assets/icons"

const SurvayCard = ({card}) => {

    const colorVariants = {
        blue: 'bg-blue-100 text-blue-400',
        red: 'bg-red-100 text-red-400',
        yellow: 'bg-yellow-100 text-yellow-400',
        green: 'bg-green-100 text-green-400'
      }

    return (
        <div className="flex items-center justify-around sm:justify-around py-5 mb-3 md:justify-between bg-white hover:shadow-lg hover:shadow-blue-300 border-2 border-transparent hover:border-2 hover:border-blue-300 box-content transition-color duration-200 md:p-3 w-full sm:w-[calc(50%-15px)] lg:py-4 rounded-lg shadow-xl">
            <div className="flex flex-col">
                <span className="font-bold lg:text-lg md:text-md">{card.title}</span>
                <span className="font-bold md:text-2xl lg:text-3xl">{card.price}</span>
                <div className="flex mt-2">
                    {card.isUp ? arrowUpIcon('w-4 h-4 bg-green-300 text-white rounded-full') : arrowDownIconWithTail('w-4 h-4 bg-red-300 text-white rounded-full')}                    
                    <span className="text-xs pl-1">{card.isUp ? 'Up' : 'Down'} from yesterday</span>
                </div>
            </div>
            <div className={`${colorVariants[card.trolleyColor]} p-2 rounded-md ml-3`}>
                {trolleyIcon('w-5 lg:w-7')}
            </div>
        </div>
    )
}

export default SurvayCard