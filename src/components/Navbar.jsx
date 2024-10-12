import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import '../styles/Navbar.css'
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';


function Navbar() {
    const [statusTampil, setStatusTampil] = useState('')
    function tampilHandler() {
        if (statusTampil == '') {
            setStatusTampil('tampil')
        } else {
            setStatusTampil('')
        }
    }
    return (
        <nav>
            <div className="wrapper">
                <div className="logo">
                    <a href="">My Portfolio</a>
                </div>
                <button onClick={tampilHandler}>
                    {
                        statusTampil == 'tampil' ? (<IoMdClose />) : (<FaBars />)
                    }
                </button>
                <div className={`menu ${statusTampil}`} onClick={tampilHandler}>
                    <ul>
                        <li><HashLink to="/#portfolio">Portfolio</HashLink></li>
                        <li><HashLink to="/#about">About</HashLink></li>
                        <li><Link to="/experience">Experience</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar