import "./Nav.scss"


function Navigator() {
    return(
        <nav className="header__navigator">
            <ul className="header__list">
                <li className="header__list-item">
                    <a className="header__link header__link--active" href="#">HOME</a>
                </li>
                <li className="header__list-item">
                    <a className="header__link" href="#">ABOUT US</a>
                </li>
                <li className="header__list-item">
                    <a className="header__link" href="#create_plan">CREATE YOUR PLAN</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navigator;