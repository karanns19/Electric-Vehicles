import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/home';
import About from './components/About/about';
import Login from './components/Login/login';
import Products from './components/Products/products';
import Account from './components/Account/account';
import { useState } from 'react';
import chatbot from './components/assets/chatbot.png'

function App() {
  const [chatbots, setChatBots] = useState(false)

  const openChatBot = () =>{
    setChatBots(!chatbots)
  }
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Login />} />
          <Route path="/products" element={<Products />} />
          <Route path="/account" element={<Account />} />
        </Routes>
        <div className='ChatBot'>
          {chatbots ? <iframe width="350" className='chatbox' height="430" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/775be7b4-883e-4a84-80f3-916319ecc8a5"></iframe> :<></>}
          <img src={chatbot} width={80} className='float-right' onClick={openChatBot} alt="" />
        </div>
      </div>
    </Router>
  );
}

export default App;
