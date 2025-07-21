import TitlePage from "../titlePage";

const Hero = () => {
  
    return (
        <section className="flex flex-col justify-center relative bg-[#fdf2ec] py-12 px-4 md:px-10">
            <img src="./public/bookImg/buku-buku.png" alt="left shelf" className="hidden md:block absolute left-5 bottom-1/2 h-[20%] object-contain" />

            <img src="./public/bookImg/open-buku.png" alt="right shelf" className="hidden md:block absolute right-5 bottom-1/2 h-[20%] object-contain" />

            <TitlePage title="Selamat Datang di Katalog Buku" subtitle="Temukan buku favoritmu di sini." />

            {/* Book Covers */}
            <div className="mt-10 flex flex-wrap justify-center items-center gap-4 md:gap-8">
                <img src="./public/bookImg/buku1.png" alt="book" className="w-28 md:w-40 shadow-lg object-cover rounded" />
                <img src="./public/bookImg/buku3.png" alt="book" className="w-28 md:w-40 shadow-lg object-cover rounded" />
                <img src="./public/bookImg/buku2.png" alt="book" className="w-28 md:w-40 shadow-lg object-cover rounded" />
            </div>
        </section>
    );
};

export default Hero;
