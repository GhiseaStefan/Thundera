import React from 'react'
import { GlobalStyle, MainContent } from './AppStyles'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const AppLayout = ({ userLoading, children }) => {
    if (userLoading) return null;

    return (
        <>
            <GlobalStyle />
            <Navbar />
            <MainContent>
                {children}
            </MainContent>
            <Footer />
        </>
    )
}

export default AppLayout