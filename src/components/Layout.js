import { Outlet } from 'react-router-dom'
import Navbar from "./Navbar"
import '../App.css'
//import Background from "./Background";


const Layout = () => {
    return (
            <div className={"background-gradient"}>
                <Navbar />
                <Outlet />
            </div>
    )
}

export default Layout