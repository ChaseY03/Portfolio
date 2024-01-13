import {Link, NavLink} from 'react-router-dom'
import '../App.css'
import CLogo from '../assets/chaselogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faGithub,
} from '@fortawesome/free-brands-svg-icons'
import {
    faBars,
    faClose,
} from '@fortawesome/free-solid-svg-icons'
import {useState} from "react";
const Navigation = () => {
    const [showNav, setShowNav] = useState(false)

    return (
        <div className={"nav-bar"}>
            <Link to={"/"} className={"logo"} onClick={() => setShowNav(false)}>
                <img src={CLogo} alt="brand logo"/>
            </Link>
            <nav className={showNav ? 'mobile-show' : ''}>
                <NavLink exact="true" to="/" onClick={() => setShowNav(false)}>Home</NavLink>
                <NavLink to="/about" onClick={() => setShowNav(false)}>About</NavLink>
                <NavLink to="/skills" onClick={() => setShowNav(false)}>Skills</NavLink>
                <NavLink to="/projects" onClick={() => setShowNav(false)}>Projects</NavLink>
                <NavLink to="/contact" onClick={() => setShowNav(false)}>Contact</NavLink>
                <FontAwesomeIcon
                    onClick={() => setShowNav(false)}
                    icon={faClose}
                    color="#ffd700"
                    size="3x"
                    className='close-icon' />
            </nav>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/chase-yang/"
                       target="_blank" rel="noreferrer">
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            color="#4d4d4e"
                            className="anchor-icon"/></a>
                </li>
                <li>
                    <a
                        href="https://github.com/ChaseY03"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon
                            icon={faGithub}
                            color="#4d4d4e"
                            className="anchor-icon"
                        />
                    </a>
                </li>
            </ul>
            <FontAwesomeIcon
                onClick={() => setShowNav(true)}
                icon={faBars}
                color="#c10005"
                size="3x"
                className='hamburger-icon' />
        </div>
    )
}

export default Navigation

/*
 <Navbar fixed="left" expand="md">
            <Container>
            <Navbar.Brand href="/" className={"d-flex"}>
                <img src={CLogo} alt="brand logo" className={"img-fluid logo"}/>
            </Navbar.Brand>
            <Nav.Item>
                <Nav.Link as={Link} to="/about" >To About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/skills" >To Skills</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/projects" >To Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/contact" >To Contact</Nav.Link>
            </Nav.Item>
            </Container>
        </Navbar>
*/