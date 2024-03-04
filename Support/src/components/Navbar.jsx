import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Navbar() {
    // On récupère la valeur de l'username dans le store
    const username = useSelector((state) => state.user.value);
    return(<nav>
        <p>Bonjour { username }</p>
        <ul>
          <li>
            <Link to="/">Homepage</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/api">Test API</Link>
          </li>
          <li>
            <Link to="/username">Change username</Link>
          </li>
        </ul>
      </nav>)
}

export default Navbar;