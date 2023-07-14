import React from "react";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import OurGallery from "./OurGallery";
import Slider from "./Slider";
import Quota from "./Quota";




const Gallery = () => {
    return (
        <>
            <Navbar />
            <OurGallery />
            <Slider />
            <Quota />
            <Footer />
        </  >
    );
};

export default Gallery;