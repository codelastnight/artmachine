import React,{ FunctionComponent} from "react";
import Modal from "./modal";
type Collect = {
    className: string
    isOpen: boolean
}

export const Collection: FunctionComponent<Collect> = (props) => {
  
    return (
        <article className="">
           <button>Your Collection</button>

        </article>

    )
}