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
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign:'center'
         }}>

          
           <img src={Logo} className="logo" alt="Hospital logo" /> Welcome to sudoEMR
        </div>
        </>
      );
    }

export default Home;
