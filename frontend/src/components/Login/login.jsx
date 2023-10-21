import '../styles.css'
import logo from '../assets/zephyr.png'
import user from '../assets/user.png'
import lock from '../assets/lock.png'
import google from '../assets/google.png'
import linkedin from '../assets/linkedin.png'
import { useState } from 'react'
import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { useNavigate } from 'react-router-dom'
import data from '../service.js'

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [signUp, setSignUp] = useState(true);
    const navigate = useNavigate()

    const validateEmail = (input) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(input);
    };

    const handleRegistration = async () => {
        const response = await axios.get('http://localhost:3001/users');
        let emails = response.data.map((item) => { return item.email })
        if (!emails.includes(email)) {
            if (validateEmail(email)) {
                if(password.length >=8 && password.length <=20){
                    try {
                        Loading.hourglass()
                        const response = await axios.post('http://localhost:3001/users/new', {
                            email,
                            password,
                        });
                        Loading.remove()
                        Notify.success('Registered Successfully !!');
                        setSignUp(true)
                        console.log(response)
                    } catch (error) {
                    }
                }else{
                    Notify.failure("Password length should be greater or equal to 8 ")
                }
                
            } else {
                Notify.failure("Please enter valid Email Id")
            }
        } else {
            Notify.failure("You have already registered with this Email Id, Please login to Continue")
        }

    };

    const handleLogin = async () => {
        if (validateEmail(email)) {
            try {
                Loading.hourglass()
                const response = await axios.get('http://localhost:3001/users');
                let emails = response.data.map((item) => { return item.email })
                let passwords = response.data.map((item) => { return item.password })
                let ids = response.data.map((item) => { return item._id })
                if (emails.includes(email)) {
                    console.log("data", email, password, emails, passwords)
                    let index = emails.indexOf(email)
                    if (password === passwords[index]) {
                        Loading.remove()
                        Notify.success('Login Successfully !!');
                        data.email = email
                        data.id = ids[index] 
                        navigate('/home')
                    }
                    else {
                        Loading.remove()
                        Notify.failure('Password Incorrect !!');
                    }
                } else {
                    Loading.remove()
                    Notify.failure('EmailId not registered !!');
                }
            } catch (error) {
            }
        }
        else {
            Notify.failure("Please enter valid Email Id")
        }
    };

    return (
        <div className="Login">
            <div className='base'>
                <div className='left'>
                    <img className='companyLogo' src={logo} width={150} height={150} alt="" />
                </div>
                <div className='right'>
                    {signUp ? <span>Login to Continue</span> : <span>Register to Continue</span>}
                    <div className='emailInput'>
                        <div className='outer'>
                            <div className='inputs1'>
                                <div className='inner'>
                                    <img className='lock' src={user} width={15} height={15} alt="" />
                                </div>
                            </div>
                            <div className='inputs2'>
                                <div className='inner'>
                                    {signUp ? <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' /> : <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Please Enter Your Email Id' />}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='passwordInput'>
                        <div className='outer'>
                            <div className='inputs1'>
                                <div className='inner'>
                                    <img className='lock' src={lock} width={20} height={20} alt="" />
                                </div>
                            </div>
                            <div className='inputs2'>
                                <div className='inner'>
                                    {signUp ? <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' /> : <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Set New Password' />}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='loginBtn'>
                        {signUp ? <div className='innerBtn' onClick={handleLogin}>Login</div> : <div className='innerBtn' onClick={handleRegistration}>Register</div>}
                    </div>
                    {signUp ? <p className='pTag' onClick={() => setSignUp(false)}>Sign Up</p> : <p className='pTag' onClick={() => setSignUp(true)}>Login</p>}
                    <div className='options'>
                        <span>Sign in with</span>
                        <img src={google} width={40} height={40} alt="" />
                        <img src={linkedin} width={40} height={40} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;