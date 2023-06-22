import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import './styles/Root.css'

export default function Root(){
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}