import { useRef, useState } from "react"

import Modal from "../components/home/Modal";

export default function Home(props) {

    const [name , setName] = useState("");

    return (
        <>
            <h1>Home</h1>
            <div>
                {
                    props.users.map((element) =>
                        element.connected ? (
                            <>
                                <h4>La personne connecté est :</h4>
                                <p>{element.name}</p>
                            </>
                        ) : null
                    )
                }
            </div>
            <h1>{name}</h1>
            <Modal setName={setName} />
        </>
    )
}