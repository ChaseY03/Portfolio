import '../../App.css'
import ninjacharacter from '../../assets/ninja.png'

const Home = () => {
  return(
  <div className={"home-container"}>
    <div className={"home-text"}>
      <h1>Hi, I'm Chase.
        <br/>Developer
      </h1>
      <h2>Software Developer | Frontend Developer</h2>
    </div>
      <img src={ninjacharacter} alt="ninja 3D character" className={"home-character"}/>
  </div>
    )
}

export default Home