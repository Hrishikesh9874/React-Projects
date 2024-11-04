import { useState } from "react";
import Modal from "./modal";


export default function ModalTest(){

    const [showModelPopup, setShowModelPopup] = useState(false);

    function handleToggleModalPopup(){
        setShowModelPopup(!showModelPopup);
    }

    function onClose(){
        setShowModelPopup(false);
    }

    return(
        <div>
            <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
            {
                showModelPopup ? <Modal
                    body={ <div>Customized Body</div> }
                    footer={ <div>Customized Footer</div> }
                    onClose={onClose}
                ></Modal> : null
            }
        </div>
    )
}