import { sponsers } from "../../data/data";

export default function SponserDetail(){
    return(
        <div className="w-[100%] h-fit flex items-center justify-center flex-col">
            <div className="flex w-[1200px] select-none">
                <div className="flex-shrink-0 flex items-center justify-center w-[100%]">
                {
                    sponsers.map((val)=>(
                           <div className="grid place-items-center" style={{ width: 'clamp(10rem, 1rem + 40vmin, 30rem)', padding:'calc(clamp(10rem, 1rem + 30vmin, 30rem)/10)'}}>
                               <img key={val.id} className="object-contain w-[100%] h-[100%] border rounded-[0.5rem] aspect-[19/9] px-[5px] py-5" src={val.image} alt="logos here" />
                           </div>  
                    ))
                    }
                    </div>
            </div>
        </div>
    )
}