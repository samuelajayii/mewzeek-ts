
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import NavBar from "./NavBar"

const Search = () => {
    const genres = [
        {
            name: 'Made For You'
        },
        {
            name: 'Live Events'
        },
        {
            name: 'Radio'
        },
        {
            name: 'Trending'
        },
        {
            name: 'Workout'
        },
        {
            name: 'Anime'
        },
        {
            name: 'Trending'
        },
        {
            name: 'Party'
        },
        {
            name: 'Educational'
        },
        {
            name: 'True Crime'
        },
        {
            name: 'Comedy'
        },
        {
            name: 'Sleep'
        },
        {
            name: 'Dsicover'
        },
        {
            name: 'Focus'
        },
        {
            name: 'Throwback'
        },
        {
            name: 'Soul'
        },
        {
            name: 'Gaming'
        },
        {
            name: 'Love'
        },
        {
            name: 'Focus'
        },
        {
            name: 'Jazz'
        },
        {
            name: 'K-pop'
        },
        {
            name: 'Raggae'
        },
        {
            name: 'Classical'
        },
        {
            name: 'Country'
        },
        {
            name: 'Latin'
        },
        {
            name: 'Punk'
        },
        {
            name: 'Metal'
        },
        {
            name: 'Acoustic'
        },
        {
            name: 'Disco'
        },
        {
            name: 'Alternative'
        }
    ]


    const [genreList, setGenreList] = useState<{name: string}[] | undefined>(genres)
    const [text, setText] = useState('')

    const handleClick = () => {
        const findGenres = genreList && genreList?.length > 0 ? genreList?.filter(n => n?.name === text) : undefined;
        setGenreList(findGenres)
    }

    const change = (e: React.FormEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value);
        setGenreList(genres)
    }
    
    return (
        <div className="dark:bg-black dark:text-white bg-white text-black h-full flex flex-col items-center">
            <NavBar />
            <div className=" flex flex-col md:flex-row items-center justify-center flex-wrap w-full bg-gray-400 py-3 top-0 fixed">
                <div className="border-solid border-white border rounded flex items-center bg-white text-black font-bold justify-between h-max min-w-[30rem]">
                    <div>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="ml-2.5" />
                        <input type="text" name="" placeholder=" Search for music or podcasts" className="border-none outline-none shadow-none py-2 px-2.5" value={text} onChange={change} />
                    </div>
                    <button type="submit" onClick={handleClick} className="text-white bg-black rounded-sm p-[0.61rem] font-bold cursor-pointer" >Search</button>
                </div>
                
            </div>
            <div className="grid-cols-[repeat(auto-fill,_minmax(28rem,_1fr))] grid gap-2 mb-5 overflow-hidden py-10 mt-10">
                {genreList && genreList?.length > 0 && genreList?.map(genre => {
                    return (
                        <h1 className="p-5 border border-white cursor-pointer hover:scale-95 transition-all duration-100">{genre?.name}</h1>
                    )
                })}
            </div>
        </div>
    )
}

export default Search