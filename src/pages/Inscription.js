// Import States to update :
import { useRef, useState } from "react";
// Import Use Navigate to redirect to another page :
import { useNavigate } from "react-router-dom";

export default function Inscription({setUsers , users}) {

    const [form , setForm] = useState({
        name : useRef(""),
        email : useRef(""),
        password : useRef(""),
        confirm_password : useRef(""),
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
        let confirm_password = form.confirm_password.current.value;

        let user = users.find((element) => element.email === form.email.current.value);

        if (user) {
            alert("You have already an account") ;
        } else {
            if (password == confirm_password) {
                // Put data in our Object
                let newForm = { name, email, password, connected: false };
                // Update Data
                setUsers([...users, newForm]);
                // Update to origin
                setForm({ name : "", email : "", password : "", confirm_password : "", connected : false});
                // Redirection
                navigate("/connexion");
                
            } else {
                alert("Its not the same password");
            }
        }

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
                <div>
                    <label htmlFor="password">Confirmation mot de passe</label>
                    <input type="password" name="confirm_password" id="confirm_password" ref={form.confirm_password} required/>
                </div>
                <button type="submit">Envoyez</button>
            </form>
        </>
    )
}