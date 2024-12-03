import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export  default function GlobalState({children}){

    const [searchParam, setSearchParam] = useState("");
    const [loading, setLoading] = useState(false);
    const [recipeList, setRecipeList] = useState([]);
    const [recipeDetailData, setRecipeDetailData] = useState(null);
    const [favouriteList, setFavouriteList] = useState([]);

    const navigate = useNavigate();

    async function handleSubmit(event){
        event.preventDefault();
        setLoading(true);
        try{
            const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`);
            const data = await res.json();

            if(data?.data?.recipes){
                setRecipeList(data?.data?.recipes);
                setLoading(false);
                setSearchParam('');
                navigate('/');
            }
        }catch(e){
            console.group(e);
            setLoading(false);
            setSearchParam('');
        }
    }

    function handleAddToFavourite(getCurrentItem){
        let cpyFavList = [...favouriteList];
        const index = cpyFavList.findIndex(item=> item.id === getCurrentItem.id);
        if(index === -1){
            cpyFavList.push(getCurrentItem);
        }else{
            cpyFavList.splice(index, 1);
        }
        setFavouriteList(cpyFavList);
    }

    console.log(favouriteList);

    return(
        <GlobalContext.Provider value={{searchParam, setSearchParam, handleSubmit, loading, recipeList, recipeDetailData, setRecipeDetailData, handleAddToFavourite, favouriteList}}>{children}</GlobalContext.Provider>
    )
}