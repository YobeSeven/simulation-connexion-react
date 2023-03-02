export default function Home(props) {
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
        </>
    )
}