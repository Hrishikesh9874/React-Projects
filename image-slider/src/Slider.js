import { useEffect, useState } from 'react';
import './Slider.css';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export default function Slider({url, limit=5, page=1}){

    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errMessage, setErrMessage] = useState(null);
    const [loading, setLoading] = useState(false);


    function handlePrevious(){
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    }

    function handleNext(){
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    }

    async function fetchImages(getUrl) {
        try {

            setLoading(true);
            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            const data = await response.json();

            if(data){
                setImages(data);
                setLoading(false);
            }

        } catch (error) {
            setErrMessage(error.message);
            setLoading(false);
        }
    }

    useEffect(()=>{
        if(url !== "") fetchImages(url);
    }, [url]);


    if(loading){
        return <div>Loading Data! Please Wait</div>
    }

    if(errMessage !== null){
        return <div>Error Ocurred! {errMessage}</div>
    }

    return(
        <div className='container'>

            <BsArrowLeftCircleFill onClick={handlePrevious} className="arrow arrow-left"/>
            {
                images && images.length
                ? images.map((imageItem, index) =>(
                    <img
                        src={imageItem.download_url}
                        alt={imageItem.download_url}
                        ket={imageItem.id}
                        className={currentSlide === index ? "current-image": "current-image hide-current-image"}
                    />
                ))
                : null
            }

            <BsArrowRightCircleFill onClick={handleNext} className="arrow arrow-right"/>
            <span className='circle-indicators'>
            {
                images && images.length
                ? images.map((_, index)=>(
                    <button
                    key={index}
                    className={currentSlide === index ? "current-indicator" : "current-indicator inactive-indicator"}
                    onClick={()=> setCurrentSlide(index)}
                    ></button>
                ))
                : null
            }
            </span>
        </div>
    )
}

