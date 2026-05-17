"use strict";
// File ini adalah entry point aplikasi
// Gunakan file ini untuk menguji implementasi yang sudah dibuat
// Contoh yang bisa dilakukan:
//   1. Import fungsi-fungsi yang sudah dibuat
//   2. Tambahkan beberapa data buku untuk testing
//   3. Uji fungsi listBooks untuk melihat semua data
//   4. Uji fungsi searchBook dengan dan tanpa parameter
// Silakan bereksplorasi untuk memastikan semua fungsi berjalan dengan baik
Object.defineProperty(exports, "__esModule", { value: true });
// Mulai pengujian di bawah ini
// ─────────────────────────────────────────────
// MAIN: Entry point untuk testing
// ─────────────────────────────────────────────
const bookManager_1 = require("./functions/bookManager");
const bookManager_2 = require("./functions/bookManager");
const bookManager_3 = require("./functions/bookManager");
console.log('Book Management Application - Week 6');
console.log('=====================================');
// ── Test addBook ───────────────────────────
(0, bookManager_1.addBook)({
    title: 'Laskar Pelangi',
    author: 'Andrea Hirata',
    publicationYear: 2005,
});
(0, bookManager_1.addBook)({
    title: 'Bumi Manusia',
    author: 'Pramoedya Ananta Toer',
    publicationYear: 1980,
});
(0, bookManager_1.addBook)({
    title: 'Perahu Kertas',
    author: 'Dee Lestari',
    publicationYear: 2009,
});
(0, bookManager_1.addBook)({
    title: 'Laskar Cinta',
    author: 'Asma Nadia',
    publicationYear: 2010,
});
// ── Test listBooks ─────────────────────────
(0, bookManager_2.listBooks)();
// ── Test searchBook dengan keyword ─────────
(0, bookManager_3.searchBook)('Laskar');
// ── Test searchBook tanpa keyword ──────────
// (parameter optional tidak diisi → tampil semua)
(0, bookManager_3.searchBook)();
