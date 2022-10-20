export function Carrusel(){
    return(

        <>
        
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="https://firebasestorage.googleapis.com/v0/b/spotifysura-2871b.appspot.com/o/metallica_car3.jpg?alt=media&token=ea2a3dc1-01be-481b-9c8e-d65b79908736" height="1080" className="w-100" alt="foto1"/>
                </div>
                <div className="carousel-item">
                <img src="https://firebasestorage.googleapis.com/v0/b/spotifysura-2871b.appspot.com/o/metallica_car2.jpg?alt=media&token=1b12f999-0311-4fb8-8225-dfb986ce0705" className="w-100" height="1080" alt="foto2"/>
                </div>
                <div className="carousel-item">
                <img src="https://firebasestorage.googleapis.com/v0/b/spotifysura-2871b.appspot.com/o/metallica_car1.jpg?alt=media&token=f296d658-b7ec-4cea-af35-2b7b043fb047" className="w-100" height="1080" alt="foto3"/>
                </div>
                
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>


        </>
    )
}