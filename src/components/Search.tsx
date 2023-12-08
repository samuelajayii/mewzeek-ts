/* eslint-disable @typescript-eslint/no-unused-vars */
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import SearchItem from "./SearchItem"
import React from "react"


const Search = () => {
    const [text, setText] =  React.useState('')

    return (
        <div className="dark:bg-black dark:text-white bg-white text-black h-screen flex flex-col items-center">
            <div className="mt-5 flex flex-row items-center">
                <form className="border-solid border-white border rounded flex items-center bg-white text-black font-bold justify-between h-max w-[30rem]">
                    <div>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="ml-2.5" />
                        <input type="text" name="" placeholder=" Search for music or podcasts"  className="border-none outline-none shadow-none py-2 px-2.5" value={text} onChange={e => setText(e.target.value)}/>
                    </div>
                    <h1 className="text-3xl cursor-pointer mb-1.5 mr-2" id="close-search-btn">&times;</h1>
                </form>
                <button className="text-black bg-white rounded-sm p-[0.61rem] ml-5 font-bold">Search</button>
            </div>
            <SearchItem />
        </div>
    )
}

export default Search