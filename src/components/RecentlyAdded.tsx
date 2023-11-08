
interface Props{
    name: any
    title: string
    background: string
}

const RecentlyAdded = (props: Props) => {
    return(
        <div className={`${props.background} rounded-md shadow-black flex p-5 items-center mb-3 shrink-0 mr-3 w-72 mt-3 hover:scale-105 duration-500 cursor-pointer`}>
            <img src={props.name} alt="Work of art" className="h-24 w-24 rounded"/>
            <h1 className="font-semibold text-center ml-4">{props.title}</h1>
        </div>
    )
}

export default RecentlyAdded