import profilePicture from '../assets/profile-picture.png'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import '../styles/Header.css'

function Header() {
  return (
    <header>
        <div className="header-jumbotron">
            <img src={profilePicture}/>
            <h3>Renardi Aifandi</h3>
            <p>Programmer - Researcher</p>
            <div className="socialMedia">
                <a href=""><FaInstagram /></a>
                <a href=""><FaFacebookF /></a>
                <a href=""><FaTwitter /></a>
            </div>
        </div>
    </header>
  )
}

export default Header