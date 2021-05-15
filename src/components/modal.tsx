import React,{ FunctionComponent} from "react";

type Modal = {
    className: string
    isOpen: boolean
}

export const Modal: FunctionComponent<Modal> = (props) => {
  
    return (
        <div className={'modal ' + props.className + (props.isOpen ? " active " : "")}>
            <div className={'modal__background '}>

            </div>
            <div className="model__content">
                {props.children}
            </div>
        </div>

    )
}