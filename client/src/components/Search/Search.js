import SearchImage from "../../assets/icons/search.svg";
import "./Search.scss"

function Search() {
    return (
        <div className="search">
            <input className="search__input" type="search" placeholder="Search" />
                <img  className="search__svg" src={SearchImage} alt="" />            
        </div>
    )
}

export default Search;