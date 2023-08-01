import {Navigate, createBrowserRouter}from "react-router-dom";
import NavBar from './components/NavBar';
import Nosotros from "./views/nosotros/Nosotros";
import Inicio from "./views/inicio/Inicio";
const router=createBrowserRouter([
{
    path:'/',
    element:<NavBar/>,
    children:[
        {
            path:'/Dashboard',
            element:<Navigate to="/"/>
        },
        {
            path:'/',
            element:<Inicio/>
        },
        {
            path:'/Nosotros',
            element:<Nosotros/>
        }
    ]
}
])
export default router;