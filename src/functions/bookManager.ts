// Tugas 3: Implementasikan fungsi-fungsi manajemen buku

// Fungsi addBook
// Fungsi ini digunakan untuk menambahkan buku baru ke dalam koleksi
// Parameter yang dibutuhkan: data buku sesuai tipe Book
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: pikirkan bagaimana cara menambahkan buku ke array yang sudah disediakan

// Fungsi listBooks
// Fungsi ini digunakan untuk menampilkan semua buku yang tersimpan
// Tidak memerlukan parameter
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: pikirkan cara menampilkan data buku dengan format yang mudah dibaca

// Fungsi searchBook
// Fungsi ini digunakan untuk mencari buku berdasarkan judul
// Parameter title bersifat opsional (bisa ada atau tidak)
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: jika parameter title diberikan, cari buku yang cocok
//           jika tidak diberikan, tampilkan semua buku atau berikan informasi yang sesuai

// ─────────────────────────────────────────────
// FUNCTIONS: Book Manager
// Berisi tiga fungsi utama aplikasi
// ─────────────────────────────────────────────

import { Book } from '../types/index';
import { books } from '../data/books';

// ── 1. addBook ─────────────────────────────
// Menerima parameter bertipe Book, menambahkan
// buku ke array, lalu menampilkan konfirmasi.
// Return type: void (tidak mengembalikan nilai)

export function addBook(book: Book): void {
  books.push(book);
  console.log(`\n✅ Buku berhasil ditambahkan!`);
  console.log(`   Judul  : ${book.title}`);
  console.log(`   Penulis: ${book.author}`);
  console.log(`   Tahun  : ${book.publicationYear}`);
}

// ── 2. listBooks ───────────────────────────
// Menampilkan semua buku yang tersimpan
// di dalam array books.
// Return type: void

export function listBooks(): void {
  console.log('\n📚 Daftar Semua Buku');
  console.log('─'.repeat(40));

  if (books.length === 0) {
    console.log('   Belum ada buku yang tersimpan.');
    return;
  }

  books.forEach((book: Book, index: number) => {
    console.log(`\n   [${index + 1}] ${book.title}`);
    console.log(`       Penulis : ${book.author}`);
    console.log(`       Tahun   : ${book.publicationYear}`);
  });

  console.log('\n' + '─'.repeat(40));
  console.log(`   Total: ${books.length} buku`);
}

// ── 3. searchBook ──────────────────────────
// Mencari buku berdasarkan judul (title).
// Parameter title bersifat optional (?).
// Jika tidak diberikan → tampilkan semua buku.
// Return type: void

export function searchBook(title?: string): void {
  // Jika tidak ada keyword → tampilkan semua
  if (!title || title.trim() === '') {
    console.log('\n🔍 Tidak ada keyword, menampilkan semua buku:');
    listBooks();
    return;
  }

  const keyword = title.trim().toLowerCase();
  const hasil = books.filter((book: Book) =>
    book.title.toLowerCase().includes(keyword)
  );

  console.log(`\n🔍 Hasil pencarian: "${title}"`);
  console.log('─'.repeat(40));

  if (hasil.length === 0) {
    console.log(`   Tidak ada buku dengan judul yang mengandung "${title}".`);
    return;
  }

  hasil.forEach((book: Book, index: number) => {
    console.log(`\n   [${index + 1}] ${book.title}`);
    console.log(`       Penulis : ${book.author}`);
    console.log(`       Tahun   : ${book.publicationYear}`);
  });

  console.log('\n' + '─'.repeat(40));
  console.log(`   Ditemukan: ${hasil.length} buku`);
}
