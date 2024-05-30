import React from 'react'
import Logo from "../assets/icon.ico"


const Home = () => {
    return (
        <>
        <div style={{ 
        color: 'blue',
        fontSize: '2.5rem',
        backgroundColor: '#f0f8ff',
        fontFamily: 'Arial, sans-serif',
        height: 700,
        width: 1300,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
         }}>

          
           <img src={Logo} className="logo" alt="Hospital logo" /> Welcome to sudoEMR
        </div>
        </>
      );
    }

export default Home;
