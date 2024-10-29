import { useEffect, useState } from 'react';
import './LoadMore.css';

export default function LoadMore(){

    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [disableBtn, setDisableBtn] = useState(false);


    async function fetchProducts() {
        try {
            setLoading(true);
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`);
            const result = await response.json();
            
            if(result && result.products && result.products.length){
                setProducts((prevData)=>[...prevData, ...result.products]);
                setLoading(false);
            }

        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(()=>{
        fetchProducts();
    }, [count]);

    useEffect(()=>{
        if(products && products.length === 100) setDisableBtn(true);
    }, [products]);


    if(loading){
        return <div>Loading Data! Please Wait.</div>
    }
    return(
        <div className='container'>
            <div className='product-container'>
                {
                    products && products.length
                    ? products.map((item)=>(
                        <div className='product' key={item.id}>
                            <img src={item.thumbnail} alt={item.title}/>
                            <p>{item.title}</p>
                        </div>
                    ))
                    : null
                }
            </div>
            <div className='btn-container'>
                <button disabled={disableBtn} onClick={()=> setCount(count + 1)} type="button">Load More Products</button>
                {
                    disableBtn ? <p>You have reached to 100 Products</p> : null
                }
            </div>
        </div>
    )
}