import { useRef } from "react"



export default function ScrollToSection(){

    const SectionRef = useRef(null);

    const data = [
        {
            card: 'first',
            style:{
                width: '100%',
                height: '600px',
                background: 'green'
            }
        },
        {
            card: 'second',
            style:{
                width: '100%',
                height: '600px',
                background: 'orange'
            }
        },
        {
            card: 'third',
            style:{
                width: '100%',
                height: '600px',
                background: 'blue'
            }
        },
        {
            card: 'fourth',
            style:{
                width: '100%',
                height: '600px',
                background: 'black'
            }
        },
        {
            card: 'fifth',
            style:{
                width: '100%',
                height: '600px',
                background: 'pink'
            }
        },
        
    ]

    function handleScrollToSection(){
        SectionRef.current.scrollIntoView({behavior: 'smooth'})

        
        // let pos = SectionRef.current.getBoundingClientRect().top;

        // window.scrollTo({
        //     top: pos,
        //     behavior: 'smooth'
        // })
    }

    return(
        <>
            <h1>Scroll to a Particular Section</h1>
            <button onClick={handleScrollToSection}>Click to Scroll</button>
            {
                data.map((dataItem, index)=> <div ref={index === 2 ? SectionRef : null} style={dataItem.style}>
                    <h3>{dataItem.card}</h3>
                </div> )
            }
        </>
    )
}