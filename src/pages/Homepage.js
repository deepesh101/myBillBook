import React from 'react'
import TopBar from '../components/TopBar'
import Pricing from '../components/Pricing'
import Footer from '../components/Footer'
import Achievements from '../components/Achievements'
import Login from '../components/Login'

const HomePage = props => {
    
    return (
        <div>
            <TopBar />
            <Login />
            <Achievements />
            <Pricing />
            <Footer />
        </div>
    )
}

export default HomePage