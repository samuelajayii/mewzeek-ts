/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'



const Profile = () => {
    return(
            <div className='bg-white text-black dark:bg-black dark:text-white w-screen h-screen z-10 fixed left-0 top-0 '
            >
                <div className="" id="profile">
                    <div className="flex justify-between items-center border-b border-black dark:border-white py-2 px-4 md:text-3xl">
                        <h2 className="font-semibold text-center">User Profile</h2> 
                        <Link to='/musicpage' className="text-3xl md:text-6xl cursor-pointer">&times;</Link>
                    </div> 
                    <div className="flex flex-col justify-between px-4 md:text-3xl">
                        <a href="#" className="my-2 md:my-4">Suscribe to Premium</a>
                        <a href="#" className="my-2 md:my-4">Playlists</a>
                        <Link to='/' className="my-2 md:my-4">Log out<FontAwesomeIcon icon={faRightFromBracket} className="fa-solid fa-right-from-bracket text-white ml-3"/></Link>
                    </div>
                </div>
            </div>
    )
}

export default Profile