import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";


export default function RecipeItem({item}){

    const location = useLocation();
    const newPath = location.pathname.replace("/favourites", "/");

    return(
        <div className="flex flex-col w-80 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 border-2 rounded-2xl border-white">

            <div className="h-40 flex justify-center overflow-hidden items-center rounded-xl">
                <img src={item?.image_url} alt="Recipe Item Image" className="block w-full"/>
            </div>

            <div>
                <span className="text-sm text-cyan-700 font-medium">{item?.publisher}</span>
                <h3 className="font-bold text-2xl truncate text-black">{item?.title}</h3>
                <Link to={`${newPath}recipe-item/${item?.id}`} className="text-sm p-3 px-8 mt-5 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white">Recipe Details</Link>
            </div>

        </div>
    )
}