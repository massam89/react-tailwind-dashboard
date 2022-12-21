
const Survay = () => {
  return (
    <div className="flex space-x-14">
        <div className="flex items-center">
            <div className="flex flex-col">
            <span>Total Order</span>
            <span>40,876</span>
            <span className="flex">
                <img src="/icons/arrow-up.svg" />
                <span>Up from yesterday</span>
            </span>
            </div>
            <div>
            <img className="w-6" src="/icons/trolley.svg" />   
            </div>
        </div>
        <div className="flex items-center">
            <div className="flex flex-col">
            <span>Total Sales</span>
            <span>40,876</span>
            <span className="flex">
                <img src="/icons/arrow-up.svg" />
                <span>Up from yesterday</span>
            </span>
            </div>
            <div>
            <img className="w-6" src="/icons/trolley.svg" />   
            </div>
        </div>
        <div className="flex items-center">
            <div className="flex flex-col">
            <span>Total profit</span>
            <span>40,876</span>
            <span className="flex">
                <img src="/icons/arrow-down.svg" />
                <span>Up from yesterday</span>
            </span>
            </div>
            <div>
            <img className="w-6" src="/icons/trolley.svg" />   
            </div>
        </div>
        <div className="flex items-center">
            <div className="flex flex-col">
            <span>Total Return</span>
            <span>40,876</span>
            <span className="flex">
                <img src="/icons/arrow-up.svg" />
                <span>Up from yesterday</span>
            </span>
            </div>
            <div>
            <img className="w-6" src="/icons/trolley.svg" />   
            </div>
        </div>
    </div>
    
  )
}

export default Survay