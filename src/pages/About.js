export default function About() {

    let images = [];

    let image_fma = process.env.PUBLIC_URL + "./images/fma.jpg";
    let image_ledZeppelin = process.env.PUBLIC_URL + "./images/led-zeppelin.jpg";
    images.push(image_fma , image_ledZeppelin);
    
    return (
        <>
            <h1 className="text-center">About</h1>

            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {
                        images.map((element , index) => (
                            <div className={`carousel-item ${index === 0 ? "active" : null}`} >
                                <img src={element} className="d-block w-100" alt="" />
                            </div>
                        ))
                    }
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="visually-hidden">Next</span>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                </button>
            </div>
        </>
    )
}