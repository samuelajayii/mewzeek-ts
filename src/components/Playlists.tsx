
interface Props {
    background: any
    title: string
}

const Playlists = (props: Props ) => {
    return(
        <div className="w-72 h-44 bg-cover my-4 mr-3 shrink-0 hover:scale-105 duration-500 cursor-pointer relative">
            <h1 className="font-semibold text-xl w-fit px-3 bg-slate-400 absolute">
                {props.title}
            </h1>
            <img src={props.background} alt="" className="w-full h-full "/>
        </div>
    )
}

export default Playlists