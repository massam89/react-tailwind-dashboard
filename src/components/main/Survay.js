
const Survay = () => {
  return (
    <div className="flex justify-between  py-4 px-6">
        <div className="flex items-center bg-white px-6 py-4 rounded-lg shadow-xl">
            <div className="flex flex-col">
                <span className="font-bold text-lg">Total Order</span>
                <span className="font-bold text-3xl">40,876</span>
                <div className="flex mt-2">
                    <svg className="w-4 h-4 bg-green-300 text-white rounded-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                    <span className="text-xs pl-1">Up from yesterday</span>
                </div>
            </div>
            <div className="bg-blue-100 text-blue-400 p-2 rounded-md ml-3">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>            
            </div>
        </div>
        <div className="flex items-center bg-white px-6 py-4 rounded-lg shadow-xl">
            <div className="flex flex-col">
                <span className="font-bold text-lg">Total Sales</span>
                <span className="font-bold text-3xl">21,876</span>
                <div className="flex mt-2">
                    <svg className="w-4 h-4 bg-green-300 text-white rounded-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                    <span className="text-xs pl-1">Up from yesterday</span>
                </div>
            </div>
            <div className="bg-green-100 text-green-400 p-2 rounded-md ml-3">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>            
            </div>
        </div>
        <div className="flex items-center bg-white px-6 py-4 rounded-lg shadow-xl">
            <div className="flex flex-col">
                <span className="font-bold text-lg">Total Profit</span>
                <span className="font-bold text-3xl">17,886</span>
                <div className="flex mt-2">
                    <svg className="w-4 h-4 bg-red-300 text-white rounded-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                    <span className="text-xs pl-1">Up from yesterday</span>
                </div>
            </div>
            <div className="bg-yellow-100 text-yellow-400 p-2 rounded-md ml-3">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>            
            </div>
        </div>
        <div className="flex items-center bg-white px-6 py-4 rounded-lg shadow-xl">
            <div className="flex flex-col">
                <span className="font-bold text-lg">Total Return</span>
                <span className="font-bold text-3xl">25,876</span>
                <div className="flex mt-2">
                    <svg className="w-4 h-4 bg-green-300 text-white rounded-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                    <span className="text-xs pl-1">Up from yesterday</span>
                </div>
            </div>
            <div className="bg-red-100 text-red-400 p-2 rounded-md ml-3">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>            
            </div>
        </div> 
    </div>
    
  )
}

export default Survay