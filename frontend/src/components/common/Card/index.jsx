import { APIEndpoint } from "../../../../enum/APIendPoint";
import { useNavigate } from "react-router-dom";

const CardBook = ({ data, loading , limit, onClickCard  }) => {
    const navigate = useNavigate();

    const handleClick = (id) => {
        if (onClickCard) {
            onClickCard(id);
        } else {
            navigate(`${APIEndpoint.BOOK_BY_ID(id)}`);
        }
    };

   const displayedBooks = Array.isArray(data) ? (limit ? data.slice(0, limit) : data) : [];


    return (
        <div className="flex flex-wrap justify-center gap-4 mt-10">
            {loading ? (
                <p>Loading...</p>
            ) : displayedBooks?.length > 0 ? (
                displayedBooks.map((book) => (
                    <div key={book.id} onClick={() => handleClick(book.id)} className="card flex flex-col justify-between items-center pb-2 w-40 h-70 bg-white rounded-t-md rounded-b-none shadow-lg hover:shadow-xl transition duration-300 relative hover:cursor-pointer group">
                       
                            <div className="absolute right-0 top-0 bg-[#fdf2ec] p-1">
                                <p className="text-[0.5rem] text-gray-600">{book.category?.name_category || "Kategori"}</p>
                            </div>

                        <div className="overflow-hidden p-2">
                            <img src={book.imgUrl ? `${APIEndpoint.IMAGE_URL}/${book.imgUrl}`:""} alt={book.title} className="w-full h-50 object-cover group-hover:scale-105 transition-all duration-700 ease-in-out rounded mb-2" />
                        </div>
                        <h2 className="px-2 text-[0.7rem] font-semibold">{book.title}</h2>
                        <p className="px-2 text-[0.6rem] text-gray-600">{book.author}</p>
                    </div>
                ))
            ) : (
                <p>Tidak ada data buku.</p>
            )}
        </div>
    );
};

export default CardBook;
