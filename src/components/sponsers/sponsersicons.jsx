import './animation.css'
import { sponsers } from "../../data/data";
import Tilt from 'react-parallax-tilt';

export default function  SponserIcon(){
    return(
     

        <div className="scrollDiv flex-shrink-0 flex items-center justify-center w-[100%]">
        {
            sponsers.map((val)=>(
                <Tilt tiltMaxAngleX={"9"} tiltMaxAngleY={"9"}>
                <div className="grid place-items-center" style={{ width: 'clamp(10rem, 1rem + 40vmin, 30rem)', padding:'calc(clamp(10rem, 1rem + 30vmin, 30rem)/10)'}}>
                       <img key={val.id} className="object-contain w-[100%] h-[100%] rounded-lg shadow-lg bg-gray-400 bg-clip-padding bg-opacity-10  backdrop-filter backdrop-blur-sm aspect-[19/9] px-[5px] py-5" src={val.image} alt="logos here" />
                   </div>    </Tilt>
            ))
            }
            </div> 
              
    )
}