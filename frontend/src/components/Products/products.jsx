import '../styles.css'
import logo from '../assets/zephyr.png'
import p1 from '../assets/p1.png'
import p2 from '../assets/p2.png'
import p3 from '../assets/p3.png'
import p4 from '../assets/p4.png'
import p5 from '../assets/p5.png'
import p6 from '../assets/p6.png'
import p7 from '../assets/p7.png'
import p8 from '../assets/p8.png'
import p9 from '../assets/p9.png'
import linkedin from '../assets/linkedin.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram.png'
import { Link } from 'react-router-dom';
import data from '../service.js'
import Specific from '../SpecificProduct/specific'
import { useState } from 'react'
import axios from 'axios';
import Notiflix from 'notiflix'

function Products() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [modelName, setModelName] = useState('')
    const [modelColor, setModelColor] = useState('')
    const [ownerName, setOwnerName] = useState('')
    const [address, setAddress] = useState('')

    const orderNow = async () => {
        await axios.put('http://localhost:3001/users/update/'+ data.id, {modelName,modelColor,ownerName,address});
        setIsDialogOpen(false);
        Notiflix.Notify.success("Order Placed Successfully !!!")
    };

    const selectProduct = (id) => {
        setModelName(id)
    }

    const openDialog = () => {
        setIsDialogOpen(true);
    };

    const closeDialog = () => {
        setIsDialogOpen(false);
    };
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
        <div className="Products">
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
            <div className='productsContent pl-10'>
                <h1 className='text-left text-2xl ml-10 mt-10 mb-10'>AirX EV Series</h1>
                <div className='productsLayout ml-10'>
                    <div className='productImages'>
                        <img className='img1' onClick={() => { openDialog(); selectProduct('Vintage'); }} src={p1} alt="" />
                        <img className='img2' onClick={() => { openDialog(); selectProduct('Ioniq 5S'); }} src={p2} alt="" />
                        <img className='img3' onClick={() => { openDialog(); selectProduct('Nexon'); }} src={p3} alt="" />
                    </div>
                    <div className='productCosts'>
                        <div className='costBox' onClick={() => { openDialog(); selectProduct('Vintage'); }}>
                            Vintage - $25000
                        </div>
                        <div className='costBox' onClick={() => { openDialog(); selectProduct('Ioniq 5S'); }}>
                            Ioniq 5S - $45000
                        </div>
                        <div className='costBox' onClick={() => { openDialog(); selectProduct('Nexon'); }}>
                            Nexon - $65000
                        </div>
                    </div>
                </div>
                <h1 className='text-left text-2xl ml-10 mt-10 mb-10'>Tesla EV Series</h1>
                <div className='productsLayout ml-10'>
                    <div className='productImages'>
                        <img className='img1' onClick={() => { openDialog(); selectProduct('Model X'); }} src={p4} alt="" />
                        <img className='img2' onClick={() => { openDialog(); selectProduct('Model Y'); }} src={p5} alt="" />
                        <img className='img3' onClick={() => { openDialog(); selectProduct('Model S'); }} src={p6} alt="" />
                    </div>
                    <div className='productCosts'>
                        <div className='costBox' onClick={() => { openDialog(); selectProduct('Model X'); }}>
                            Model X - $32000
                        </div>
                        <div className='costBox' onClick={() => { openDialog(); selectProduct('Model Y'); }}>
                            Model Y - $50000
                        </div>
                        <div className='costBox' onClick={() => { openDialog(); selectProduct('Model S'); }}>
                            Model S - $53000
                        </div>
                    </div>
                </div>
                <h1 className='text-left text-2xl ml-10 mt-10 mb-10'>Charging Station</h1>
                <div className='productsLayout ml-10'>
                    <div className='productImages'>
                        <img className='img1' onClick={() => { openDialog(); selectProduct('eCharge 3S '); }} src={p7} alt="" />
                        <img className='img2' onClick={() => { openDialog(); selectProduct('eCharge 4S'); }} src={p8} alt="" />
                        <img className='img3' onClick={() => { openDialog(); selectProduct('Tesla Charge'); }} src={p9} alt="" />
                    </div>
                    <div className='productCosts'>
                        <div className='costBox' onClick={() => { openDialog(); selectProduct('eCharge 3S'); }}>
                            eCharge 3S  - $80000
                        </div>
                        <div className='costBox' onClick={() => { openDialog(); selectProduct('eCharge 4S'); }}>
                            eCharge 4S  - $70000
                        </div>
                        <div className='costBox' onClick={() => { openDialog(); selectProduct('Tesla Charge'); }}>
                            Tesla Charge - $90000
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer mt-10'>
                <div className='follow'>
                    <span>Follow us on </span>
                    <img src={linkedin} onClick={redirectToLinkedIn} alt="" />
                    <img src={twitter} onClick={redirectToTwitter} alt="" />
                    <img src={instagram} onClick={redirectToInstagram} alt="" />
                </div>
            </div>
            <Specific isOpen={isDialogOpen} onClose={closeDialog}>
                <h2 className="text-2xl text-center">Order Details</h2>
                <div className='flex items-center mt-5'>
                    <span className='spanTag'>Model Name : </span>
                    <span className='spanTag1'>{modelName}</span>
                </div>
                <div className='flex items-center mt-5'>
                    <span className='spanTag'>Model Color : </span>
                    <select
                        id="dropdown"
                        value={modelColor}
                        onChange={(e)=>setModelColor(e.target.value)}
                    >   <option value="">Select Color</option>
                        <option value="Blue">Blue</option>
                        <option value="Red">Red</option>
                        <option value="Black">Black</option>
                        <option value="White">White</option>
                    </select>
                </div>
                <div className='flex items-center mt-5'>
                    <span className='spanTag'>Owner's Name : </span>
                    <input type="text" value={ownerName} onChange={(e)=>setOwnerName(e.target.value)} />
                </div>
                <div className='flex items-center mt-5'>
                    <span className='spanTag'>Address : </span>
                    <input type="text" value={address} onChange={(e)=>setAddress(e.target.value)}/>
                </div>
                <p className='payment'>A payment link will be sent to your email address.</p>
                <div className='dialogBtns'>
                    <button className='order' onClick={orderNow}>Order Now</button>
                    <button
                        onClick={closeDialog}
                        className="closeBtn rounded"
                    >Close
                    </button>
                </div>
            </Specific>
        </div>
    );
}

export default Products;