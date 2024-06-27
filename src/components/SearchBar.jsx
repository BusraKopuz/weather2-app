import React from "react"
import searchIcon from '../assets/images/search.png';
import './SearchBar.css';

const SearchBar=({city, setCity, onSearch})=>{
    return(
        <form className="search-bar" onSubmit={onSearch}>
            <input 
                type="text" 
                value={city} 
                placeholder="Şehir Giriniz"
                onChange={(e)=> setCity(e.target.value)} 
            />
            <button type="submit">
                <img src={searchIcon} alt="Search"/>
            </button>   
        </form>
    )
}

export default SearchBar