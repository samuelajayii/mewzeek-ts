/* eslint-disable @typescript-eslint/no-unused-vars */
import { motion } from "framer-motion"
import NavBar from "./NavBar"
import TopBar from "./TopBar"
import golden from "../img/jungkook.avif"
import RecentlyAdded from "./RecentlyAdded"
import workOfArt from "../img/work.webp"
import hfmh from '../img/home for my heart.png'
import rvg from '../img/ravage.jpeg'
import rnb from '../img/rhythm and blues.png'
import harry from '../img/harrys house.webp'
import sasageyo from '../img/sasageyo.jpeg'
import split from '../img/split.png'
import uify from '../img/UIFY.jpeg'
import Playlists from "./Playlists"
import rema from '../img/rema.jpg'
import silksonic from '../img/silk.jpeg'
import davido from '../img/davido.png'
import eminem from '../img/eminem.jpg'
import mayor from '../img/mayor.jpeg'
import bts from '../img/bts.jpg'
import coldplay from '../img/coldplay.jpg'
import Audios from "./Audios"
import Favourites from "./Favourites"
import ngozi from '../img/ngozi.png'
import cupid from '../img/cupid.png'
import jvke from '../img/jvke.jpg'
import obapluto from '../img/obapluto.jpg'
import { Link } from "react-router-dom"
import { Routes, Route } from "react-router-dom"
const MusicPage = () => {
    return(
        <motion.div className="bg-white text-black dark:bg-black dark:text-white">
            <NavBar />
            <TopBar />
            <div className="flex lg:flex-row flex-col items-center m-10 bg-cover cursor-pointer bg-gradient-to-bl from-transparent to-gray-500 w-fit p-8 justify-center rounded-xl hover:scale-105 duration-500">
                <img src={golden} alt="Seven" className="object-cover md:h-80 rounded-md md:rounded-xl"/>
                <div className="font-semibold md:pl-10 mt-2 md:mt-4 text-center">
                    <h1 className="font-semibold md:text-4xl">Listen to Jungkook of BTS' debut album</h1>
                    <h1 className="md:text-4xl md:mt-4 text-[gold] font-thin ">GOLDEN</h1>
                </div>
            </div>
            <h1 className="font-bold text-white ml-3">New Releases</h1>
            <div className="mx-3 my-4 flex flex-row overflow-x-scroll overflow-y-hidden" id="scroll">
                <RecentlyAdded name={workOfArt} title={"Work of Art"} background={" bg-gradient-to-r from-zinc-50 to-gray-400 text-black"}/>
                <RecentlyAdded name={rvg} title={"Ravage EP"} background={"bg-gradient-to-r from-zinc-50 to-red-500"}/>
                <RecentlyAdded name={hfmh} title={"Home For My Heart"} background={" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"}/>
                <RecentlyAdded name={harry} title={"Harry's House"} background={"bg-gradient-to-br from-indigo-500 from-10% via-brown-500 via-30% to-emerald-500 to-90%"}/>
                <RecentlyAdded name={rnb} title={"Rhythm and Blues"} background={"bg-gradient-to-r from-cyan-500 to-blue-500"}/>
                <RecentlyAdded name={sasageyo} title={"Shinzou Wo Sasageyo"} background={"bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"}/>
                <RecentlyAdded name={split} title={"Split Decisions"} background={"bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"}/>
                <RecentlyAdded name={uify} title={"Until I Found You"} background={"bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"}/>
            </div>
            
            <div className="flex flex-col justify-center mb-14">
                <h1 className="font-semibold text-3xl text-center">Playlists for you</h1>
                <div className="flex flex-row overflow-x-scroll overflow-y-hidden mx-3" id="scroll">
                    <Playlists background={silksonic} title={"Chill Mix"}/>
                    <Playlists background={davido} title={"Afrobeats"}/>
                    <Playlists background={eminem} title={"Rap"}/>
                    <Playlists background={bts} title={"K-Pop"}/>
                    <Playlists background={rema} title={"Rema Mix"}/>
                    <Playlists background={mayor} title={"Gbedu"}/>
                    <Playlists background={coldplay} title={"2000s"}/>
                </div>
            </div>
            <div className="flex flex-col w-full mb-10 px-3">
                <h1 className="text-center font-semibold text-3xl mb-3">
                    Listen to a wide range of audio 
                </h1>
                <div className="grid-cols-[repeat(auto-fill,_minmax(18rem,_1fr))] grid gap-2 mb-5 overflow-hidden py-10">
                    <Audios name={"Podcasts"} styling={"bg-gradient-to-tl from-yellow-500 to-pink-500"}/>
                    <Audios name={"New Releases"} styling={"bg-gradient-to-tl from-cyan-500 to-blue-500"}/>
                    <Audios name={"Afro"} styling={"bg-gradient-to-tl from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"}/>
                    <Audios name={"Hip-Hop"} styling={"bg-gradient-to-tl from-blue-500 to-pink-500"}/>
                    {/* <Audios name={"Live Events"} styling={"bg-gradient-to-tl from-zinc-50 to-gray-600"}/> */}
                    {/* <Audios name={"Gospel"} styling={"bg-gradient-to-tl from-red-400 to-blue-500"}/>
                    <Audios name={"Radio"} styling={"bg-gradient-to-tl from-green-500 to-white text-black"}/>
                    <Audios name={"Trending"} styling={"bg-gradient-to-tl from-purple-500 to-pink-500"}/>
                    <Audios name={"Workout"} styling={"bg-gradient-to-tl from-orange-500 to-white text-black"}/>
                    <Audios name={"Anime"} styling={"bg-gradient-to-tl from-blue-500 to-white text-black"}/>
                    <Audios name={"Made For You"} styling={"bg-gradient-to-tl from-cyan-700 to-white text-black"}/> */}
                </div>
                <Link to='/search' className="text-black bg-white rounded-sm p-[0.61rem] font-bold w-fit mx-auto -mt-6">Search for more</Link>
            </div>
            <div className="flex flex-col items-center justify-center mb-20 mx-3">
                <h1 className="text-center font-semibold text-3xl">My Favourites</h1>
                <Favourites image={sasageyo} name={"Shinzou wo Sasageyo"} time={"5:41"}/>
                <Favourites image={ngozi} name={"Ngozi"} time={"3:41"}/>
                <Favourites image={cupid} name={"Fifty Fifty"} time={"2:54"}/>
                <Favourites image={jvke} name={"this is what falling in love feels like"} time={"2:00"}/>
                <Favourites image={obapluto} name={"Obapluto"} time={"2:50"}/>
            </div>
        </motion.div>
    )
}

export default MusicPage