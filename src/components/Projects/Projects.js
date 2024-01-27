import '../../App.css'

const Projects = () => {
    return(
        <div className={"container"}>
            <div className={"container-text"}>
                <h1>Projects</h1>
                <div>
                    <h3>CareNexa - University project</h3>
                    <p className={"container-text-p"}>A React app data management system, deployed on Google Cloud Platform and
                        connecting to a Google Cloud MySQL database with Node</p>
                    <a href={"https://github.com/ChaseY03/CareNexa"} target={"_blank"} className={"container-text-a"}>Github repo here</a>
                    <h3>Platformer game - University project</h3>
                    <p className={"container-text-p"}>Multi-level platformer game, created in Java</p>
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