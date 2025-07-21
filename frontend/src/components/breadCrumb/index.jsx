import React from "react";

const BreadCrumb = () => {
    return (
        <div className="relative w-full h-[200px] flex justify-center items-center overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center blur-sm" style={{ backgroundImage: "url('/bookImg/brcrumb-img.png')" }} />
            <div className="bg-black opacity-70 w-full h-full absolute  "></div>

            <div className="container mx-auto ">
                <p className="text-lg italic text-white absolute -translate-y-1/2  z-10">
                    "Dengan budi pekerti, tiap-tiap manusia berdiri sebagai manusia merdeka (berpribadi), yang dapat memerintah atau menguasai diri sendiri. Inilah manusia beradab dan itulah maksud dan tujuan pendidikan dalam garis besarnya." - Ki Hajar Dewantara. </p>
            </div>
        </div>
    );
};

export default BreadCrumb;
