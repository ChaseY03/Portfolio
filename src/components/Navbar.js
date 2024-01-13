import {Link, NavLink} from 'react-router-dom'
import '../App.css'
import CLogo from '../assets/chaselogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faGithub,
} from '@fortawesome/free-brands-svg-icons'
const Navigation = () => {
    return (
        <div className={"nav-bar d-flex"}>
            <Link to={"/"} className={"logo"}>
                <img src={CLogo} alt="brand logo"/>
            </Link>
                <nav>
                       <NavLink exact="true" to="/" >Home</NavLink>
                       <NavLink to="/about" >About</NavLink>
                       <NavLink to="/skills" >Skills</NavLink>
                       <NavLink to="/projects" >Projects</NavLink>
                       <NavLink to="/contact" >Contact</NavLink>
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