import React from "react";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import SectionTitle from "./SectionTitle";
import BlockBlog from "./Block";




const Blog = () => {
    return (
        <>
            <Navbar />
            <SectionTitle />
            <BlockBlog />

            <Footer />
        </  >
    );
};

export default Blog;