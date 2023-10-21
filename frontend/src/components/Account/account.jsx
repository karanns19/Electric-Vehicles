import '../styles.css'
import logo from '../assets/zephyr.png'
import { Link } from 'react-router-dom';
import data from '../service.js'
import { useNavigate } from 'react-router-dom'
import { Loading, Notify } from 'notiflix';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Account() {
    const elements = [];
    const navigate = useNavigate()
    const [orderName, setOrderName] = useState([])
    const [ownerName, setOwnerName] = useState([])
    const [address, setAddress] = useState([])
    const [orderColor, setOrderColor] = useState([])
    const [orderDate, setOrderDate] = useState([])

    const getUserDetails = async () => {
        const response = await axios.get('http://localhost:3001/users/' + data.id);
        setOrderName(response.data.modelName)
        setOwnerName(response.data.ownerName)
        setAddress(response.data.address)
        setOrderColor(response.data.modelColor)
        setOrderDate(response.data.orderDate)
    }

    for (let i = 0; i < orderName.length; i++) {
        elements.push(
            <div className='eachOrder' key={i}>
                <span>Model Name : </span><span>{orderName[i]}</span><br />
                <span>Model Color : </span><span>{orderColor[i]}</span><br />
                <span>Owner Name : </span><span>{ownerName[i]}</span><br />
                <span>Address : </span><span>{address[i]}</span><br />
                <span>Order Date : </span><span>{orderDate[i]}</span><br />
            </div>
        );
    }

    useEffect(() => {
        getUserDetails()
    }, [])

    const titleCase = (str) => {
        return str.toLowerCase().split(' ').map(function (word) {
            return (word.charAt(0).toUpperCase() + word.slice(1));
        }).join(' ');
    }

    const logout = () => {
        Loading.hourglass()
        data.email = ''
        navigate('/')
        Loading.remove()
        Notify.success('Logout Successfully !!');
    }

    return (
        <div className="Account">
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
            <div className='accountContent'>
                <h3>Hello <span>{titleCase(data.email.split('@')[0])}</span>, Welcome to Zephyr EV</h3><div className='logout' onClick={logout}>Logout</div>
                <div className='leftAccountTab'>
                    <h4>Order Details</h4>
                    <div className='orderDetails'>
                        {elements}
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Account;