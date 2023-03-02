import { useRef } from "react";

export default function Modal(props) {

    const nameRef = useRef("");

    function Add(e){
        e.preventDefault();
        let newName = nameRef.current.value;
        props.setName(newName);
    }

    return (
        <>
            <div>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Launch demo modal
                </button>

                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={Add}>
                                    <div>
                                        <label htmlFor="name">name</label>
                                        <input type="text" name="name" id="name" ref={nameRef} required/>
                                    </div>
                                    <button type="submit" data-bs-dismiss="modal">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}