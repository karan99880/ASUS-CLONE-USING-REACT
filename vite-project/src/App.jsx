import { useState, useEffect } from 'react'
import './App.css'
import Navigation from './Navigation'
import Home from './Home'
import Footer from './Footer'
import { Route, Routes } from 'react-router-dom'
import  ProductList from './ProductList'

function App() {

  const [Dark, setDark] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const handleClick = () => setDark(!Dark);

  const backgroundColor = Dark ? 'black' : 'white';
  const textColor = Dark ? 'white' : 'black';

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {

    return (
      <div>
        <video
          src="https://dlcdnwebimgs.asus.com/files/media/982b43f2-03f0-4780-b552-cf2a58d515bf/v1/videos/Web_1_IDAppearance-transcode.mp4"
          autoPlay
          muted
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
    );
  }
  return (
  
     
      <div style={{ backgroundColor, color: textColor }}>
        <Navigation handleClick={handleClick} isDark={Dark} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Products" element={<ProductList/>}></Route>

        </Routes >
        <Footer />
      </div >
       
  )
}

export default App







