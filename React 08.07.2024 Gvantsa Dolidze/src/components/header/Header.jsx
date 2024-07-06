import "./Header.css";
const Header = ({ version, logo, nav_en_1, nav_en_2, nav_en_3, nav_en_4, nav_ka_1, nav_ka_2, nav_ka_3, nav_ka_4 }) => {

    if( version === "en"){
  return (
    <header>
      <h2>{logo}</h2>
      <nav className="header_nav">
        <a href="/link">{nav_en_1}</a>
        <a href="/link">{nav_en_2}</a>
        <a href="/link">{nav_en_3}</a>
        <a href="/link">{nav_en_4}</a>
      </nav>
    </header>
  );
} else if(version === "ka") {
    return (
        <header>
      <h2>{logo}</h2>
      <nav className="header_nav">
        <a href="/link">{nav_ka_1}</a>
        <a href="/link">{nav_ka_2}</a>
        <a href="/link">{nav_ka_3}</a>
        <a href="/link">{nav_ka_4}</a>
      </nav>
    </header>
    )
} else {
    return(
        <h3 className="text-danger">Header not found 404</h3>
    )
}
};
export default Header;
