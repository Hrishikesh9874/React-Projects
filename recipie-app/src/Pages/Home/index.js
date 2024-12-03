import { useContext } from "react";
import { GlobalContext } from "../../Context";
import RecipeItem from '../../Components/Recipe-Item/index.js';


export default function Home(){

    const {loading, recipeList} = useContext(GlobalContext);

    if(loading){
        return(
            <>Loading...Please Wait!</>
        )
    }

    return(
        <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
            {
                recipeList && recipeList.length > 0
                ? recipeList.map((item) => <RecipeItem item={item} />)
                : <div><p className="lg:text-4xl text-xl text-center text-black font-extrabold">Nothing to show, Please search Something</p></div>
            }
        </div>
    )
}