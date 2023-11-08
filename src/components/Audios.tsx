interface Props {
    name: string
    styling: string
}

const Audios = (props: Props) => {
    return( 
        <div className={`${props.styling} h-40 p-4 rounded-md cursor-pointer hover:scale-95 duration-500 active:scale-100`}>
            <h1 className="text-2xl font-semibold">{props.name}</h1>
        </div>
    )
}

export default Audios