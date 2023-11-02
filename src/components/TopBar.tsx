const TopBar = () => {
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let timeFunction: Function


    

    return(
        <header className="flex items-center justify-between bg-gradient-to-b py-3">
            <h1 id="time" className="font-bold text-2xl md:text-5xl  py-2 px-2">Hello</h1>
            <div className="flex justify-betweeen items-center justify-between mt-2">
                <i className="fa-regular fa-bell  cursor-pointer mr-4 lg:text-5xl lg:mr-16 md:mr-12 md:text-3xl"></i>
                <i className="fa-solid fa-clock-rotate-left  mr-4 cursor-pointer lg:text-5xl lg:mr-16 md:mr-12 md:text-3xl"></i>
                <i className="fa-solid fa-gears cursor-pointer  mr-4 lg:text-5xl md:mr-12 md:text-3xl"></i>
            </div>
        </header>
        
    )
}

export default TopBar