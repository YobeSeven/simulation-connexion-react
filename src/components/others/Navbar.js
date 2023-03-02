// Import Link & NavLink ( Navlink understand directly our class "active")
import { Link, NavLink } from "react-router-dom";

export default function Navbar({ setUsers, users }) {

    function Deconnexion(element) {
        let newUsers = [...users];
        let user = newUsers.find((user) => user.email === element.email);
        user.connected = false ;
        setUsers(newUsers);
    }

    let inscriptionLink = <NavLink to="/inscription">inscription</NavLink>
    let connexionLink = <NavLink to="/connexion">connexion</NavLink>

    if (users.length > 0) {
        // To find the first element in array who element.connected is True :
        let connectedUser = users.find((element) => element.connected);

        // If he is connected :
        if (connectedUser) {
            inscriptionLink = "";
            connexionLink = (
                <button onClick={() => Deconnexion(connectedUser)}>Deconnexion</button>
            );
        } 
        
    }
    return (
        <>
            <nav>
                <ul className="d-flex justify-content-between list-unstyled">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                    <li>{inscriptionLink}</li>
                    <li>{connexionLink}</li>
                </ul>
            </nav>
        </>
    )
}