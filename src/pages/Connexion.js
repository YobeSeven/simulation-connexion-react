// Import States to update :
import { useRef , useState } from "react";
// Import Use Navigate to redirect to another page :
import { useNavigate } from "react-router-dom";

export default function Connexion({setUsers , users}) {

    const email = useRef("");
    const password = useRef("");

    const navigate = useNavigate();

    function ToConnect(e){
        e.preventDefault();
        let newUsers = [...users];
        // To find the first element in array who have the same email and password
        let user = newUsers.find((element) => element.email === email.current.value && element.password === password.current.value);
    
        // If user exist :
        if (user) {
            user.connected = true;
            setUsers(newUsers);
            // To redirect to another page
            navigate("/");
        } else {
            alert("Une erreur a été commise");
        }
    }
    return (
        <>
            <h1>Connexion</h1>
            <form onSubmit={ToConnect}>
                <div>
                    <label htmlFor="email">email</label>
                    <input type="email" name="email" id="email" ref={email} required/>
                </div>
                <div>
                    <label htmlFor="password">password</label>
                    <input type="password" name="password" id="password" ref={password} required/>
                </div>
                <button type="submit">Se connecter</button>
            </form>
        </>
    )
}