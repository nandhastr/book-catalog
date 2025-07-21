const BASE_URL = "http://localhost:3000/api";

export const APIEndpoint = {

    BASE_URL, 
    
    //  Books
    BOOK: "books",
    BOOKS: "books",
    BOOK_BY_ID: (id = ":id") => `books/${id}`,
    IMAGE_URL: `${BASE_URL}/img`,

    //  User
    USER: "user",
    LOGIN: "login",
    REGISTER: "register",
    LOGOUT: "logout",

    // Categories
    CATEGORIES: "categories",
    CATEGORY_BY_ID: (id = ":id") => `categories/${id}`,
};
