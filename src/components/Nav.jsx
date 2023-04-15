import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Nav = ({onSearch, setAccess}) => {

    const handleLogOut = () => {
        setAccess(false)
    }

    return (
        <nav>
            <SearchBar onSearch={onSearch}/>
            <button>
                <Link to='/about'>ABOUT</Link>
            </button>
            <button>
                <Link to='/home'>HOME</Link>
            </button>
            <button>
                <Link to='/favorites'>FAVORITES</Link>
            </button>
            <button onClick={handleLogOut}>LOG OUT</button>
        </nav>
    )
}

export default Nav;