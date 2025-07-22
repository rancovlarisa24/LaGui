import "./NavBar.css";

export default function Navbar() {
    return (
        <header className="nav">
            <h1 className="nav__logo">La Gui</h1>

            <nav className="nav__links">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
}
