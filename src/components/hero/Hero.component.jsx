import './hero.styles.css'
import hero2 from '../../assets/hero2.jpg'
import hero3 from '../../assets/hero3.jpg'
import hero4 from '../../assets/hero4.jpg'

const Hero = () => {
    return (
        <div id="carouselExampleCaptions" className="container carousel slide mt-5" data-bs-ride="false">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={hero3} className="d-block w-100 imageSize" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className="titleFirstSlideCustom">Bienvenido a  nuestra tienda virtual</h5>
                            <p>Nuestros productos estan esperando por tí</p>
                        </div>
                </div>
                <div className="carousel-item">
                    <img src={hero2} className="d-block w-100 imageSize" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5></h5>
                            <p></p>
                        </div>
                </div>
                <div className="carousel-item">
                    <img src={hero4} className="d-block w-100 imageSize" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5></h5>
                            <p></p>
                        </div>
                </div>
            </div>
            <button className="buttonCarouselCustom carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button  className="buttonCarouselCustom carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Hero