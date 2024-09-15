


export default function CardDetail( {title,text}){
    return(
        <div className="relative group rounded-lg shadow-sm bg-gray-200 cursor-pointer p-6 overflow-hidden ">
            <div className="absolute inset-0 bg-transparent group-hover:bg-gradient-to-br from-additional to-transparent group-hover:opacity-50 opacity-50 transition-all duration-300 " ></div>
           <div className="flex item-center justify-center w-12 h-12 bg-gray-100 rounded-md">
                
           </div>
           <h3 className="mt-4 text-lg font-medium text-gray-900">
                {title}
           </h3>
           <p className="mt-2 text-sm text-britrSec">
            {text}
           </p>
        </div>
    )
}