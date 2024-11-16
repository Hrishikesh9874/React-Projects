import { useRef, useState } from "react"
import UseOutsideClick from "./UseOutsideClick";



export default function UseOnClickOutsideTest(){

    const [showContent, setShowContent] = useState(false);
    const ref = useRef();
    UseOutsideClick(ref, ()=>setShowContent(false));

    return(
        <div>
            {
                showContent ? <div ref={ref} >
                    <h1>This is a random Content</h1>
                    <p>Please click outside of this to close this. It won't close if you click inside of this content</p>
                </div> : <button onClick={()=> setShowContent(true)}>ShowContent</button>
            }
        </div>
    )
}