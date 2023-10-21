import '../styles.css'
import logo from '../assets/zephyr.png'
import abtImg1 from '../assets/abtImg1.png'
import abtImg2 from '../assets/abtImg2.png'
import abtImg3 from '../assets/abtImg3.png'
import linkedin from '../assets/linkedin.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram.png'
import { Link } from 'react-router-dom';
import data from '../service.js'

function About() {
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
        <div className="About">
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
            <div className='aboutContent'>
                <h1 className='text-center text-4xl mt-10 mb-10'>The Future is Sustainable</h1>
                <div className='about1'>
                    <img src={abtImg1} width={500} alt="" />
                    <span>Welcome to Zephyr, your trusted resource for all things electric cars. At Zephyr, we're driving the future of sustainable transportation, and we're committed to providing you with the latest information, cutting-edge electric car models, and a wealth of resources to make your transition to a cleaner, greener mode of transport seamless. Our vehicles are some of the safest in the world. After safety, our goal is to make every Tesla the most fun you could possibly have in a vehicle. </span>
                </div>
                <div className='about2'>
                    <span>Using a first-principles approach, we solve some of the world’s biggest problems. If you’ve done exceptional work, join us in tackling the next generation of engineering, manufacturing and operational challenges. We build features that make being in your vehicle more enjoyable—from gaming to movies, easter eggs and more. With over-the-air software updates, we regularly introduce features at the push of a button.</span>
                    <img src={abtImg2} width={500} alt="" />
                </div>
                <div className='about1'>
                    <img src={abtImg3} width={500} alt="" />
                    <span>Zephyr is on a mission to accelerate the global shift towards electric vehicles by equipping consumers with the knowledge and tools they need to make informed choices. We envision a world where eco-friendly mobility isn't just an option, but the standard. Our dedicated team is working tirelessly to turn this vision into a reality. Our team of electric car enthusiasts and experts keeps abreast of the latest trends and technology to ensure you have the most up-to-date and reliable information at your disposal.</span>
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
    );
}

export default About;