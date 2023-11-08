import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faPlay } from "@fortawesome/free-solid-svg-icons"

interface Props{
    image: any;
    name: string;
    time: string;

}

const Favourites = (props: Props) => {
    return(
        <div className="flex flex-col items-center justify-between w-full">
            <div className="flex flex-row justify-between items-center w-full border-b border-black dark:border-white py-5">
                <div className="flex items-center flex-row w-60 text-center">
                    <img src={props.image} alt="sasageyo" className="w-16 rounded"/>
                    <h1 className="md:ml-7 w-40 ml-2">{props.name}</h1>
                </div>
                <FontAwesomeIcon icon={faPlay} className="text-2xl mr-5 cursor-pointer active:scale-90"/>
                <h1 className="mr-2">{props.time}</h1>
                <FontAwesomeIcon id="heart" icon={faHeart} className="text-2xl mr-5 cursor-pointer active:scale-90"/>
            </div>
        </div>
    )
}

export default Favourites