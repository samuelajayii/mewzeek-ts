/* eslint-disable @typescript-eslint/no-unused-vars */
import { CSSProperties } from "react"

interface Props{
    name: any
    title: string
    edit: string
    background: string
}

const RecentlyAdded = (props: Props) => {
    return(
        <div className={props.background}>
            <img src={props.name} alt="Work of art" className={props.edit}/>
            <h1 className="font-semibold text-center ml-4">{props.title}</h1>
        </div>
    )
}

export default RecentlyAdded