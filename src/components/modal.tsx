import React,{ FunctionComponent} from "react";
import '../scss/components/modal.module.scss'

type Modal = {
    className: string
    isOpen: boolean
}

const Modal: FunctionComponent<Modal> = (props) => {
  
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

export default Modal