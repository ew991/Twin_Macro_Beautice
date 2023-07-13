import React from "react";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import OurGallery from "./OurGallery";
import Slider from "./Slider";




const Gallery = () => {
    return (
        <>
            <Navbar />
            <OurGallery />
            <Slider />
            <Footer />
        </  >
    );
};

export default Gallery;