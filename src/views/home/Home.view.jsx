import Navbar from '../../components/navbar/Navbar.component'
import Hero from '../../components/hero/Hero.component'
import Shop from '../../components/shop/shop.component'
import Footer from '../../components/footer/Footer.component'

const Home = () => {
    return(
        <div>
            <Navbar />
            <Hero />
            <Shop />
            <Footer/>
        </div>
    )
}

export default Home