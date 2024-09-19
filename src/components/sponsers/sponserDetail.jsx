
import SponserIcon from './sponsersicons.jsx'
import './animation.css'

export default function SponserDetail(){
    return(
        <div className="w-[100%] h-fit flex items-center justify-center flex-col">
            <div className="vignette flex w-[75rem] select-none overflow-hidden">
                <SponserIcon/>
                <SponserIcon/>
            </div>
        </div>
    )
}