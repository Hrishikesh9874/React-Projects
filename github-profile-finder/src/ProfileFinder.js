import { useEffect, useState } from "react";
import User from "./User";
import './Styles.css';



export default function ProfileFinder(){

    const [userName, setUserName] = useState('Hrishikesh9874');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    function handleSubmit(){
        fetchGithubUserData();
    }

    async function fetchGithubUserData(){

        setLoading(true);
        const response = await fetch(`https://api.github.com/users/${userName}`);
        const data = await response.json();

        if(data){
            setUserData(data);
            setLoading(false);
            setUserName("");
        }
    }

    useEffect(()=>{
        fetchGithubUserData();
    }, []);

    if(loading){
        return(
            <h1>Loading Data! Please Wait..</h1>
        )
    }

    return(
        <div className="github-profile-container">
            <div className="input-wrapper">
                <input
                    type="text"
                    name="search-by-username"
                    placeholder="Search Github Username.."
                    value={userName}
                    onChange={(event)=> setUserName(event.target.value)}
                />
                <button onClick={handleSubmit}>Search</button>
            </div>
            {
                userData !== null ? <User user={userData}></User> : null
            }
        </div>
    )
}