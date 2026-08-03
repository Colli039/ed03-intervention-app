import {Link} from "react-router-dom"
import "../css/nav-bar.css"

function NavBar() {
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/">Home</Link>
        </div>
    </nav>
}

export default NavBar