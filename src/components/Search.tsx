/* eslint-disable @typescript-eslint/no-unused-vars */
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import SearchItem from "./SearchItem"
import React from "react"


const Search: React.FC = () => {
    const [text, setText] = React.useState('')
    const searchItem = [
        {
            item: 'Made For You'
        },
        {
            item: 'Live Events'
        },
        {
            item: 'Radio'
        },
        {
            item: 'Trending'
        },
        {
            item: 'Workout'
        },
        {
            item: 'Anime'
        },
        {
            item: 'Trending'
        },
        {
            item: 'Party'
        },
        {
            item: 'Educational'
        },
        {
            item: 'True Crime'
        },
        {
            item: 'Comedy'
        },
        {
            item: 'Sleep'
        },
        {
            item: 'Dsicover'
        },
        {
            item: 'Radio'
        },
        {
            item: 'Focus'
        },
        {
            item: 'Throwback'
        },
        {
            item: 'Soul'
        },
        {
            item: 'Gaming'
        },
        {
            item: 'Love'
        },
        {
            item: 'Focus'
        },
        {
            item: 'Jazz'
        },
        {
            item: 'K-pop'
        },
        {
            item: 'Raggae'
        },
        {
            item: 'Classical'
        },
        {
            item: 'Country'
        },
        {
            item: 'Latin'
        },
        {
            item: 'Punk'
        },
        {
            item: 'Metal'
        },
        {
            item: 'Acoustic'
        },
        {
            item: 'Disco'
        },
        {
            item: 'Alternative'
        }
    ]

    return (
        <div className="dark:bg-black dark:text-white bg-white text-black h-screen flex flex-col items-center">
            <div className="mt-5 flex flex-col md:flex-row items-center flex-wrap">
                <form className="border-solid border-white border rounded flex items-center bg-white text-black font-bold justify-between h-max min-w-[19rem]">
                    <div>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="ml-2.5" />
                        <input type="text" name="" placeholder=" Search for music or podcasts" className="border-none outline-none shadow-none py-2 px-2.5" value={text} onChange={e => setText(e.target.value)} />
                    </div>
                    <h1 className="text-3xl cursor-pointer mb-1.5 mr-2" id="close-search-btn">&times;</h1>
                </form>
                <button className="text-black bg-white rounded-sm p-[0.61rem] ml-5 font-bold mt-4 md:mt-0">Search</button>
            </div>
            <SearchItem />
        </div>
    )
}

export default Search