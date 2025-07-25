import React, { useEffect, useState } from "react";
import TitlePage from "./../common/titlePage/index";
import CardBook from "../common/Card";
import useBookStore from "../../store/bookStore";

const NewRillis = () => {
    const [showAll, setShowlAll] = useState(false);
    const { books, fetchBooks, loading } = useBookStore();

    useEffect(() => {
        fetchBooks();
    }, [fetchBooks]);

    const handleLihatSemua = () => {
        setShowlAll(true);
    };
    return (
        <>
            <div className="container mx-auto ">
                <TitlePage title="Daftar Buku-Buku " subtitle="Temukan buku favoritmu di sini." />

                <div className="flex flex-grow justify-center relative">
                    <CardBook limit={showAll ? null : 10} data={books} loading={loading} />

                    <button onClick={handleLihatSemua} className="absolute top-0 right-0 px-1 py-1 bg-green-600 text-white text-[0.5rem] rounded hover:bg-[#fdf2ec]  hover:text-gray-500 transition-all duration-500">
                        Lihat Semua
                    </button>
                </div>
            </div>
        </>
    );
};

export default NewRillis;
