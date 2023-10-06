import { NavLink } from "react-router-dom"
import SocialMedia from "./SocialMedia"
import './navbar.css'
const Navbar=()=>{
return(
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
    
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/">Work</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/About">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Contact">Contact</NavLink>
          </li>
        </ul>
        <NavLink className="navbar-brand w-75 " to="/">Merola Nessem</NavLink>
      </div>
      <SocialMedia/>
    </div>
  </nav>
)
}
export default Navbar