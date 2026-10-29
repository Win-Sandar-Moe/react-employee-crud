import {Link} from "react-router-dom";

export default function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-dark bg-primary text-white">
                <Link to="/" className="navbar-brand px-3">Employee</Link>
            </nav>
        </>
    );
}
