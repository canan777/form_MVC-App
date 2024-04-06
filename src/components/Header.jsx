import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
        <h1>Forum</h1>
       <NavLink to={"/"}>Gönderiler</NavLink>
       <NavLink to={"/add-post"}>Gönderi Ekle</NavLink>
    </header>
  )
}

export default Header
