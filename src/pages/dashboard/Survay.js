
const Survay = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-stretch md:justify-between space-x-1 pt-3 px-6">
        <div className="flex items-center justify-around sm:justify-around py-5 mb-3 md:justify-between bg-white hover:shadow-lg hover:shadow-blue-300 border-2 border-transparent hover:border-2 hover:border-blue-300 box-content transition-color duration-200 md:p-3 w-1/2 lg:px-6 lg:py-4 rounded-lg shadow-xl">
            <div className="flex flex-col">
                <span className="font-bold lg:text-lg md:text-md">Total Order</span>
                <span className="font-bold md:text-2xl lg:text-3xl">40,876</span>
                <div className="flex mt-2">
                    <svg className="w-4 h-4 bg-green-300 text-white rounded-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                    <span className="text-xs pl-1">Up from yesterday</span>
                </div>
            </div>
            <div className="bg-blue-100 text-blue-400 p-2 rounded-md ml-3">
                <svg className="w-5 lg:w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>            
            </div>
        </div>
        <div className="flex items-center justify-around sm:justify-around py-5 mb-3 md:justify-between bg-white hover:shadow-lg hover:shadow-green-300 border-2 border-transparent hover:border-2 hover:border-green-300 box-content transition-color duration-200   md:p-3 w-1/2 lg:px-6 lg:py-4 rounded-lg shadow-xl">
            <div className="flex flex-col">
                <span className="font-bold lg:text-lg md:text-md">Total Sales</span>
                <span className="font-bold md:text-2xl lg:text-3xl">21,876</span>
                <div className="flex mt-2">
                    <svg className="w-4 h-4 bg-green-300 text-white rounded-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                    <span className="text-xs pl-1">Up from yesterday</span>
                </div>
            </div>
            <div className="bg-green-100 text-green-400 p-2 rounded-md ml-3">
                <svg className="w-5 lg:w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>            
            </div>
        </div>
        <div className="flex items-center justify-around sm:justify-around py-5 mb-3 md:justify-between bg-white hover:shadow-lg hover:shadow-yellow-300 border-2 border-transparent hover:border-2 hover:border-yellow-300 box-content transition-color duration-200  md:p-3 w-1/2 lg:px-6 lg:py-4 rounded-lg shadow-xl">
            <div className="flex flex-col">
                <span className="font-bold lg:text-lg md:text-md">Total Profit</span>
                <span className="font-bold md:text-2xl lg:text-3xl">17,886</span>
                <div className="flex mt-2">
                    <svg className="w-4 h-4 bg-red-300 text-white rounded-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                    <span className="text-xs pl-1">Down from yesterday</span>
                </div>
            </div>
            <div className="bg-yellow-100 text-yellow-400 p-2 rounded-md ml-3">
                <svg className="w-5 lg:w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>            
            </div>
        </div>
        <div className="flex items-center justify-around sm:justify-around py-5 mb-3 md:justify-between bg-white hover:shadow-lg hover:shadow-red-300 border-2 border-transparent hover:border-2 hover:border-red-300 box-content transition-color duration-200  md:p-3 w-1/2 lg:px-6 lg:py-4 rounded-lg shadow-xl">
            <div className="flex flex-col">
                <span className="font-bold lg:text-lg md:text-md">Total Return</span>
                <span className="font-bold md:text-2xl lg:text-3xl">25,876</span>
                <div className="flex mt-2">
                    <svg className="w-4 h-4 bg-green-300 text-white rounded-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                    <span className="text-xs pl-1">Up from yesterday</span>
                </div>
            </div>
            <div className="bg-red-100 text-red-400 p-2 rounded-md ml-3">
                <svg className="w-5 lg:w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>            
            </div>
        </div> 
    </div>
    
  )
}

export default Survay