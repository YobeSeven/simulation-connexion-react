export default function Contact(props) {
    return (
        <>
            <h1>Contact</h1>
                {
                    props.users.map((element) => {
                        return (
                            <>
                                <ul>
                                    <li>{element.name}</li>
                                    <li>{element.email}</li>
                                    <li>{element.password}</li>
                                </ul>
                            </>
                        )
                    })
                }
        </>
    )
}