// This documment shows the menuitems(links) in the app's main navigation menu
// Implemented by app.js.
import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <nav>
            <NavLink to="/" end>
                Home
            </NavLink>
            <NavLink to="/create">Create</NavLink>
            <NavLink to="/about">About</NavLink>
        </nav>
    );
}
