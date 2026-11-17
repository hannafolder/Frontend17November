import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ChatWidget from './components/ChatWidget.jsx';

import Home from './pages/Home.jsx';
import HomeTwo from './pages/HomeTwo.jsx';
import OurYachts from './pages/OurYachts.jsx';
import PopularDestinations from './pages/PopularDestinations.jsx';
import DestinationsDetails from './pages/DestinationsDetails.jsx';
import Blog from './pages/Blog.jsx';
import BlogDetail from './pages/BlogDetail.jsx';
import Contact from './pages/Contact.jsx';

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, [pathname]);

    return null;
}

function ScrollUpButton() {
    function handleScrollUp() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <button
            type="button"
            className="scroll-up-button"
            onClick={handleScrollUp}
            aria-label="Scroll to top"
            title="Back to top"
        >
            <i className="bi bi-arrow-up" />
        </button>
    );
}

export default function App() {
    return (
        <>
            <ScrollToTop />
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home-two" element={<HomeTwo />} />
                <Route path="/our-yachts" element={<OurYachts />} />
                <Route path="/popular-destinations" element={<PopularDestinations />} />
                <Route path="/destinations-details" element={<DestinationsDetails />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogDetail />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Home />} />
            </Routes>

            <Footer />
            <ChatWidget />
            <ScrollUpButton />
        </>
    );
}
