// Import States to update :
import { useRef, useState } from "react";
// Import Use Navigate to redirect to another page :
import { useNavigate } from "react-router-dom";

export default function Inscription({setUsers , users}) {

    const [form , setForm] = useState({
        name : useRef(""),
        email : useRef(""),
        password : useRef(""),
        connected : false,
    });

    const navigate = useNavigate();

    function Submit(e){
        // Dont let our page loading again
        e.preventDefault();

        // Every variable for every propriety
        let name = form.name.current.value;
        let email = form.email.current.value;
        let password = form.password.current.value;

        // Put data in our Object
        let newForm = { name, email, password, connected: false };
        // Update Data
        setUsers([...users, newForm]);
        // Update to origin
        setForm({ name : "", email : "", password : "", connected : false})
        // Redirection
        navigate("/connexion");
    }

    return (
        <>
            <form onSubmit={Submit}>
                <div>
                    <label htmlFor="name">Nom :</label>
                    <input type="text" name="name" id="name" ref={form.name} required />
                </div>
                <div>
                    <label htmlFor="email">Email :</label>
                    <input type="email" name="email" id="email" ref={form.email} required />
                </div>
                <div>
                    <label htmlFor="password">Mot de passe :</label>
                    <input type="password" name="password" id="password" ref={form.password} required />
                </div>
                <button type="submit">Envoyez</button>
            </form>
        </>
    )
}