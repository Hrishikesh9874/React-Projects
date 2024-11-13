import { useEffect, useState } from 'react';
import './Style.css';
import Suggesstions from './Suggesstions';


export default function Search(){

    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [searchParams, setSearchParams] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const [filteredUsers, setFilteredUsers] = useState([]);
    

    async function fetchListOfUsers() {
        try {
            setLoading(true);
            const response = await fetch('https://dummyjson.com/users');
            const data = await response.json();

            if(data && data.users && data.users.length){
                setUsers(data.users.map((userItem)=> userItem.firstName));
                setLoading(false);
                setError(null);
            }

        } catch (error) {
            setLoading(false);
            console.log(error);
            setError(error);
        }
    }

    useEffect(()=>{
        fetchListOfUsers();
    }, [])

    function handleChange(event){
        const query = event.target.value.toLowerCase();
        setSearchParams(query);
        if(query.length > 1){
            const filteredData = users && users.length ? users.filter(item => item.toLowerCase().indexOf(query) > -1) : [];
            setFilteredUsers(filteredData);
            setShowDropdown(true);
        }else{
            setShowDropdown(false);
        }
    }

    function handleClick(event){
        setShowDropdown(false);
        setSearchParams(event.target.innerText);
        setFilteredUsers([]);
    }

    if(error !== null){
        return <div>Error Ocurred! {error}</div>
    }

    return(
        <div className='search-autocomplete-container'>
            {
                loading 
                ? <h1>Data is Loading...</h1>
                : <input onChange={handleChange} value={searchParams} name="search-users" placeholder='Search Users Here...' />
            }
            {
                showDropdown && <Suggesstions handleClick={handleClick} data={filteredUsers} />
            }
        </div>
    )
}