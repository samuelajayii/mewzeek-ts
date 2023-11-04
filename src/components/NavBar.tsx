import { faHouse, faLayerGroup, faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

const NavBar = () => {
    return(
        <nav className="fixed bg-gradient-to-t from-black to-transparent from-20% bottom-0 w-full flex text-white flex-row justify-between lg:text-zinc-300 py-3 px-6 md:px-16 font-semibold z-10">
            <Link to="/musicpage" className="flex flex-col items-center hover:text-white duration-200 cursor-pointer">
                <FontAwesomeIcon icon={faHouse} className="text-xl"/>
                <p>Home</p>
            </Link>
            <div className="flex flex-col items-center hover:text-white duration-200 cursor-pointer">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="text-xl"/>
                <p>Search</p>
            </div>
            <div className="flex flex-col items-center hover:text-white duration-200 cursor-pointer">
                <FontAwesomeIcon icon={faLayerGroup} className="text-xl"/>
                <p>Library</p>
            </div>
            <div className="flex flex-col items-center hover:text-white duration-200 cursor-pointer">
                <FontAwesomeIcon icon={faUser} className="text-xl"/>
                <p>Profile</p>
            </div>
        </nav>
    )
}

export default NavBar