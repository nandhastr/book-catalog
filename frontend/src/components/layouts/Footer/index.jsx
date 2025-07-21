import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#fdf6f2]  py-10 px-6 md:px-20">
            <div className=" mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-sm text-gray-700">
                {/* Brand Column */}
                <div className="md:col-span-1">
                    <h2 className="text-lg font-bold text-black mb-3">Katalog Buku</h2>
                    <p className="mb-4 text-[14px] leading-relaxed">Lorem ipsum dolor sit amet consectetur. Id bibendum id dignissim auctor faucibus ultricies aliquet. Enim quam.</p>
                    <div className="flex space-x-4 text-black text-base">
                        <FaFacebookF className="cursor-pointer hover:text-blue-600" />
                        <FaTwitter className="cursor-pointer hover:text-sky-500" />
                        <FaInstagram className="cursor-pointer hover:text-pink-500" />
                        <FaPinterestP className="cursor-pointer hover:text-red-500" />
                    </div>
                </div>

                {/* About */}
                <div>
                    <h3 className="font-semibold text-black mb-3">Tentang</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="#">Tentang</a>
                        </li>
                        <li>
                            <a href="#">Kontak</a>
                        </li>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                        <li>
                            <a href="#">Affiliasi</a>
                        </li>
                    </ul>
                </div>

                {/* Help */}
                <div>
                    <h3 className="font-semibold text-black mb-3">Help</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="#">FAQ's</a>
                        </li>
                    </ul>
                </div>
            {/* Get in Touch */}
            <div className="max-w-screen-xl mx-auto  text-[14px] text-gray-700">
                <p className="font-semibold">Get in Touch</p>
                <address className="not-italic leading-relaxed mt-1">
                    Kutu Buku.
                    <br />
                    Bogor,
                    <br />
                    Jawa barat
                    <br />
                    Indonesia
                </address>
            </div>
            </div>
        </footer>
    );
};

export default Footer;
