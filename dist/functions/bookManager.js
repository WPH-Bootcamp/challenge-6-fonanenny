"use strict";
// Tugas 3: Implementasikan fungsi-fungsi manajemen buku
Object.defineProperty(exports, "__esModule", { value: true });
exports.addBook = addBook;
exports.listBooks = listBooks;
exports.searchBook = searchBook;
const books_1 = require("../data/books");
// ── 1. addBook ─────────────────────────────
// Menerima parameter bertipe Book, menambahkan
// buku ke array, lalu menampilkan konfirmasi.
// Return type: void (tidak mengembalikan nilai)
function addBook(book) {
    books_1.books.push(book);
    console.log(`\n✅ Buku berhasil ditambahkan!`);
    console.log(`   Judul  : ${book.title}`);
    console.log(`   Penulis: ${book.author}`);
    console.log(`   Tahun  : ${book.publicationYear}`);
}
// ── 2. listBooks ───────────────────────────
// Menampilkan semua buku yang tersimpan
// di dalam array books.
// Return type: void
function listBooks() {
    console.log('\n📚 Daftar Semua Buku');
    console.log('─'.repeat(40));
    if (books_1.books.length === 0) {
        console.log('   Belum ada buku yang tersimpan.');
        return;
    }
    books_1.books.forEach((book, index) => {
        console.log(`\n   [${index + 1}] ${book.title}`);
        console.log(`       Penulis : ${book.author}`);
        console.log(`       Tahun   : ${book.publicationYear}`);
    });
    console.log('\n' + '─'.repeat(40));
    console.log(`   Total: ${books_1.books.length} buku`);
}
// ── 3. searchBook ──────────────────────────
// Mencari buku berdasarkan judul (title).
// Parameter title bersifat optional (?).
// Jika tidak diberikan → tampilkan semua buku.
// Return type: void
function searchBook(title) {
    // Jika tidak ada keyword → tampilkan semua
    if (!title || title.trim() === '') {
        console.log('\n🔍 Tidak ada keyword, menampilkan semua buku:');
        listBooks();
        return;
    }
    const keyword = title.trim().toLowerCase();
    const hasil = books_1.books.filter((book) => book.title.toLowerCase().includes(keyword));
    console.log(`\n🔍 Hasil pencarian: "${title}"`);
    console.log('─'.repeat(40));
    if (hasil.length === 0) {
        console.log(`   Tidak ada buku dengan judul yang mengandung "${title}".`);
        return;
    }
    hasil.forEach((book, index) => {
        console.log(`\n   [${index + 1}] ${book.title}`);
        console.log(`       Penulis : ${book.author}`);
        console.log(`       Tahun   : ${book.publicationYear}`);
    });
    console.log('\n' + '─'.repeat(40));
    console.log(`   Ditemukan: ${hasil.length} buku`);
}
