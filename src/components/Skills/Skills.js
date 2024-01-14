import '../../App.css'
//import './Skillstyle.css'
//import './SkillCard.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHtml5,
    faCss3Alt,
    faJs,
    faReact,
    faNodeJs,
    faJava,
    faFigma,
    faCuttlefish,
} from '@fortawesome/free-brands-svg-icons'
import {
    faDatabase,
} from '@fortawesome/free-solid-svg-icons'
const Skills = () => {
    return(
        <div className={"container"}>
            <div className={"container-text"}>
                <h1>Skills</h1>
                <div className={"skills-info"}>
                    <FontAwesomeIcon icon={faHtml5}/><p className={"skills-info-p"}>HTML</p>
                    <FontAwesomeIcon icon={faCss3Alt}/><p className={"skills-info-p"}>CSS</p>
                    <FontAwesomeIcon icon={faJs}/><p className={"skills-info-p"}>Javascript</p>
                    <FontAwesomeIcon icon={faReact}/><p className={"skills-info-p"}>React</p>
                    <FontAwesomeIcon icon={faNodeJs}/><p className={"skills-info-p"}>Node.JS</p>
                    <FontAwesomeIcon icon={faCuttlefish}/>#<p className={"skills-info-p"}>C#</p>
                    <FontAwesomeIcon icon={faCuttlefish}/>++<p className={"skills-info-p"}>C++</p>
                    <FontAwesomeIcon icon={faJava}/><p className={"skills-info-p"}>Java</p>
                    <FontAwesomeIcon icon={faDatabase}/><p className={"skills-info-p"}>SQL</p>
                </div>
                <div className={"skills-info"}>
                <p className={"skills-info-p"}>Figma</p>
                <p className={"skills-info-p"}>Illustrator</p>
                <p className={"skills-info-p"}>Photoshop</p>
                </div>
            </div>

        </div>
    )
}

export default Skills