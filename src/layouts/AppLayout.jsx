import { Outlet, ScrollRestoration } from "react-router-dom"
import Navbar from "../components/navbar/Navbar"
import Footer from "@/components/Footer"


const AppLayout = () => {
  return (
    <div>
        <ScrollRestoration/>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default AppLayout