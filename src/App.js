// Import useRoutes to create routes :
import { useRoutes } from "react-router-dom";

// Import Pages : 
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Inscription from "./pages/Inscription";
import Connexion from "./pages/Connexion";

// Import Components of Pages :

// Import Others Components :
import Navbar from "./components/others/Navbar";
import { useState } from "react";

export default function App(){

    // Array list of users :
    const [users , setUsers] = useState([]);
    console.log(users);

    // Create Variable to create Routes :
    let routes = useRoutes([
        {
            path : "/",
            element : <Home setUsers={setUsers} users={users}/>,
        },
        {
            path : "/about",
            element : <About />,
        },
        {
            path : "/contact",
            element : <Contact setUsers={setUsers} users={users} />,
        },
        {
            path : "/inscription",
            element : <Inscription setUsers={setUsers} users={users} />,
        },
        {
            path : "/connexion",
            element : <Connexion setUsers={setUsers} users={users} />
        },
    ]);
    
    return (
        <> 
            <div>
                <Navbar setUsers={setUsers} users={users}/>
            </div>
            <div>{routes}</div>
        </>
    )
}