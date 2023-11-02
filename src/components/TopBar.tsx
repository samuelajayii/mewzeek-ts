/* eslint-disable @typescript-eslint/no-unused-vars */
import { faBell } from "@fortawesome/free-regular-svg-icons"
import { faClockRotateLeft, faGears } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const TopBar = () => {

    const d = new Date()
    let time: string = ""
    if(d.getHours() < 12){
        time = "Good Morning"
    } else if (d.getHours() === 12){
        time = "It's Noon!"
    } else if (d.getHours() <= 17){
        time = "Good Afternoon"
    } else if (d.getHours() >= 18){
        time = "Good Evening"
    }
    

    return(
        <header className="flex items-center justify-between bg-gradient-to-b">
            <h1 id="time" className="font-bold text-2xl md:text-5xl  py-2 px-2">{time}</h1>
            <div className="flex justify-betweeen items-center justify-between mt-2">
                <FontAwesomeIcon icon={faBell} className="cursor-pointer mr-4 lg:text-5xl lg:mr-16 md:mr-12 md:text-3xl"/>
                <FontAwesomeIcon icon={faClockRotateLeft} className="cursor-pointer mr-4 lg:text-5xl lg:mr-16 md:mr-12 md:text-3xl"/>
                <FontAwesomeIcon icon={faGears} className="cursor-pointer mr-4 lg:text-5xl md:mr-12 md:text-3xl"/>
            </div>
        </header>
        
    )
}

export default TopBar