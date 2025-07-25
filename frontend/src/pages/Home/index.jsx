import React from "react";
import Hero from "../../components/common/Hero";
import NewRillis from "../../components/newRilisBook";
import BreadCrumb from "../../components/breadCrumb";
import CategoryBook from "../../components/categoryBook";

const Home = () => {
    return (
        <>
            <Hero />
            <NewRillis />
            <BreadCrumb />
            <CategoryBook />
        </>
    );
};
export default Home;
