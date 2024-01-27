import '../../App.css'
import Carousel from 'react-bootstrap/Carousel';
//import './ProjectsCarousel.scss'
//import 'bootstrap/dist/css/bootstrap.css';
import CareNexaCarouselImg from '../../assets/chaselogo.png'
import FasthostsCarouselImg from '../../assets/chaselogo.png'

// <ExampleCarouselImage text="First slide" />
/*                <div className={""}>
                    <h3>CareNexa</h3>
                    <p className={"container-text-p"}>A data management system that was deployed on Google Cloud Platform
                        connecting to a Google CloudMySQL database</p>
                </div>*/
const Projects = () => {
    return(
        <div className={"container"}>
            <div className={"container-text"}>
                <h1>Projects</h1>
                <div>
                    <h3>CareNexa - University project</h3>
                    <p className={"container-text-p"}>A react app data management system, deployed on Google Cloud Platform and
                        connecting to a Google Cloud MySQL database</p>
                    <h3>Platformer game - University project</h3>
                    <p className={"container-text-p"}>Cartoon styled multi-level platformer game, created in Java</p>
                    <h3>Fasthosts - College project</h3>
                    <p className={"container-text-p"}>Recreated Fasthosts website using ASP.NET and MSSQL</p>
                    <h3>Golden Rhino - College project</h3>
                    <p className={"container-text-p"}>A mobile application that displayed news for games, created using Xamarin</p>


                    <h3>CareNexa - University project</h3>
                    <p className={"container-text-p"}>A react app data management system, deployed on Google Cloud Platform and
                        connecting to a Google Cloud MySQL database</p>
                    <h3>Platformer game - University project</h3>
                    <p className={"container-text-p"}>Cartoon styled multi-level platformer game, created in Java</p>
                    <h3>Fasthosts - College project</h3>
                    <p className={"container-text-p"}>Recreated Fasthosts website using ASP.NET and MSSQL</p>
                    <h3>Golden Rhino - College project</h3>
                    <p className={"container-text-p"}>A mobile application that displayed news for games, created using Xamarin</p>

                    <h3>CareNexa - University project</h3>
                    <p className={"container-text-p"}>A react app data management system, deployed on Google Cloud Platform and
                        connecting to a Google Cloud MySQL database</p>
                    <h3>Platformer game - University project</h3>
                    <p className={"container-text-p"}>Cartoon styled multi-level platformer game, created in Java</p>
                    <h3>Fasthosts - College project</h3>
                    <p className={"container-text-p"}>Recreated Fasthosts website using ASP.NET and MSSQL</p>
                    <h3>Golden Rhino - College project</h3>
                    <p className={"container-text-p"}>A mobile application that displayed news for games, created using Xamarin</p>

                </div>
            </div>

        </div>

    )
}

export default Projects