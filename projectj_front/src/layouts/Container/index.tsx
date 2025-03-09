import { Outlet } from "react-router-dom";
import Header from "../Header";
import Sidebar from "../Sidebar";

export default function Container(){
    return(
        <>
        <Header/>
        <div style={{ display: "flex"}}>
            <Sidebar />
            <Outlet />
        </div>
        </>
    )
}