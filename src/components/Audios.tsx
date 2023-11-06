interface Props {
    name: string
    styling: string
}

const Audios = (props: Props) => {
    return( 
        <div className={props.styling}>
            <h1 className="text-2xl font-semibold">{props.name}</h1>
        </div>
    )
}

export default Audios