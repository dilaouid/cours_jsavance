import { Link } from "react-router-dom"
import './Navbar.css'

function Navbar() {
    return(
    <nav>
        <ul>
            <li>
                <Link to="/">Homepage</Link>
            </li>
            <li>
                <Link to="/posts">Posts</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </ul>
    </nav>)
}

export default Navbar