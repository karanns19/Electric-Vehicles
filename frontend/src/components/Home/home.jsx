import '../styles.css'
import logo from '../assets/zephyr.png'
import car1 from '../assets/car1.png'
import car2 from '../assets/car2.png'
import car3 from '../assets/car3.png'
import model1 from '../assets/model1.png'
import model2 from '../assets/model2.png'
import linkedin from '../assets/linkedin.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram.png'
import { Link } from 'react-router-dom';
import data from '../service.js'
import { useEffect, useState } from 'react'

function Home() {
    const imgData = {
        img: [car1, car3, car2],
        glassLayout: ["imgContentBox", "imgContentBox1", "imgContentBox2"],
        name1: ["AirX", "Volvo", "Tata"],
        name2: ["Dassault", "C3", "Nexon"],
        power: ["1200 + HP", "1400 + HP", "1000 + HP"],
        range: ["516 Miles", "600 Miles", "455 Miles"],
        charge: ["12 Mins", "21 Mins", "18 Mins"],
        mph: ["2 Seconds", "6 Seconds", "12 Seconds"],
    }


    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                (prevIndex + 1) % 3
            );
        }, 2000);

        return () => {
            clearInterval(interval);
        };
    });

    const titleCase = (str) => {
        return str.toLowerCase().split(' ').map(function (word) {
            return (word.charAt(0).toUpperCase() + word.slice(1));
        }).join(' ');
    }

    const redirectToLinkedIn = () => {
        window.open('https://www.linkedin.com/in/karan-singh-76bb7616b/', '_blank');
    };

    const redirectToTwitter = () => {
        window.open('https://twitter.com/', '_blank');
    };

    const redirectToInstagram = () => {
        window.open('https://www.instagram.com/', '_blank');
    };

    return (
        <div className="Home">
            <div className='Header'>
                <div className='leftHead'>
                    <img src={logo} width={70} height={70} alt="" />
                    <span>Zephyr</span>
                </div>
                <div className='rightHead'>
                    <div className='tabs'>
                        <Link className='links' to="/home">Home</Link>
                    </div>
                    <div className='tabs'>
                        <Link className='links' to="/about">About</Link>
                    </div>
                    <div className='tabs'>
                        <Link className='links' to="/products">Products</Link>
                    </div>
                    <div className='tabs'>
                        <Link className='links' to="/account">{titleCase(data.email.split('@')[0])}</Link>
                    </div>
                </div>
            </div>
            <div className='homeContent'>
                <div className='imgContainer'>
                    <img className='cars' src={imgData.img[[currentImageIndex]]} alt="" />
                    <div className={imgData.glassLayout[[currentImageIndex]]}>
                        <span className='carName'>{imgData.name1[[currentImageIndex]]} </span><span className='modelName'>{imgData.name2[[currentImageIndex]]}</span><br />
                        <ul>
                            <li>Max Power - {imgData.power[[currentImageIndex]]}</li>
                            <li>Estimated Range - {imgData.range[[currentImageIndex]]}</li>
                            <li>Minutes to Charge - {imgData.charge[[currentImageIndex]]}</li>
                            <li>0-60 mph - {imgData.mph[[currentImageIndex]]}</li>
                        </ul>
                    </div>
                </div>
                <div className='outerDown'>
                    <div className='downContent'>
                        <div className='topContent'>
                            <div className='leftSide'>
                                <p>At Zephyr, we believe that true luxury lies in the harmony of power and grace. The Air X encapsulates this philosophy, boasting a sleek and aerodynamic design that commands attention on every road it conquers. Immerse yourself in an environment where exquisite craftsmanship meets cutting-edge technology. Your safety is our utmost priority, and the Air X leaves no stone unturned in delivering a secure driving experience.</p>
                            </div>
                            <div className='rightSide'>
                                <img className='homeImg' src={model1} alt="" />
                            </div>
                        </div>
                        <div className='bottomContent'>
                            <div className='leftSide1'>
                                <img className='homeImg' src={model2} alt="" />
                            </div>
                            <div className='rightSide1'>
                                <p>Our relentless commitment to engineering excellence ensures that each ride is an electrifying adventure. Our design philosophy is rooted in sophistication, elegance, and seamless integration of technology. Its electric powertrain is a symphony of brilliance, effortlessly propelling you forward with instant torque and seamless acceleration.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer'>
                    <div className='follow'>
                        <span>Follow us on </span>
                        <img src={linkedin} onClick={redirectToLinkedIn} alt="" />
                        <img src={twitter} onClick={redirectToTwitter} alt="" />
                        <img src={instagram} onClick={redirectToInstagram} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;