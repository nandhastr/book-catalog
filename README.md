Project ini adalah aplikasi katalog buku yang dibangun menggunakan React.js di bagian frontend dan Express.js + MySQL di bagian backend. Fitur utama mencakup login, register, manajemen buku dan kategori, serta upload gambar yang disimpan secara lokal.

Untuk menjalankan aplikasi ini secara lokal, ikuti langkah-langkah berikut:

Clone repository ini terlebih dahulu:
git clone https://github.com/nandhastr/book-catalog.git
cd book-catalog-app

Masuk ke folder backend, lalu install semua dependensi dengan perintah:

cd backend
npm install

Buat file .env di dalam folder backend dengan isi seperti berikut:

PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=book_catalog

ACCESS_TOKEN=your_seret
REFRESH_TOKEN=your_secret

Setelah itu, buat database book_catalog di MySQL:

CREATE DATABASE book_catalog;

npm run dev

Server backend akan berjalan di http://localhost:3000.

dan akan otomatis membuatkan tabel tabel di database.

Lanjut ke folder frontend, lalu install dependensi:
masuk ke direktori frontend

cd ../frontend
npm install

Pastikan file konfigurasi endpoint API di frontend (misalnya APIendPoint.js) sudah mengarah ke http://localhost:3000/api.

Jalankan aplikasi frontend menggunakan:

npm run dev

Aplikasi akan berjalan di http://localhost:5173.

Pastikan backend dijalankan terlebih dahulu sebelum menjalankan frontend. Folder backend/assets/img digunakan untuk menyimpan gambar hasil upload, jadi pastikan folder tersebut tersedia agar proses upload tidak gagal. Selain itu, aplikasi ini menggunakan token JWT yang disimpan di localStorage untuk autentikasi user setelah login.

Jika ingin melakukan pengujian endpoint secara manual bisa menggunakan Postman.