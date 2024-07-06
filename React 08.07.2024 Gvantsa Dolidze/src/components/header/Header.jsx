import './Header.css'

const Header = ({logo, nav1, nav2, nav3, nav4}) => {


    return(
        <header>
            <h2>{logo}</h2>
            <nav className="header_nav">
                <a href="">{nav1}</a>
                <a href="">{nav2}</a>
                <a href="">{nav3}</a>
                <a href="">{nav4}</a>
            </nav>
        </header>
    )
}

export default Header;