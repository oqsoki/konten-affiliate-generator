// Daftar template kalimat promosi acak
const kalimatPromosi = [
  "Lagi cari produk keren? Cek yang satu ini, kualitas dan harganya bikin puas!",
  "Auto checkout setelah lihat ini! Buruan sebelum kehabisan stoknya.",
  "Ini dia produk yang lagi viral, jangan sampai ketinggalan juga ya.",
  "Udah banyak yang beli dan review-nya bagus-bagus, kamu kapan?",
  "Gak nyesel beli ini, apalagi lagi banyak promo di Shopee!",
  "Rekomendasi terbaik buat kamu yang lagi cari produk berkualitas dengan harga hemat.",
  "Klik link-nya dan temukan produk kece yang bikin hidup makin mudah.",
  "Promo terbatas! Yuk manfaatkan sebelum harga naik lagi.",
  "Sumpah ini produk beneran bagus, cocok banget buat kamu!",
  "Biar makin gaya dan nggak boros, produk ini solusinya!",
  "Langsung klik dan checkout! Banyak diskon dan gratis ongkir menanti.",
  "Produk wajib punya di rumah, banyak manfaatnya lho!",
  "Shopee lagi banyak diskon, dan ini salah satu produk yang paling worth it.",
  "Udah lama pengen beli? Ini saat yang tepat, klik sekarang!",
  "Cek sendiri review-nya deh, dijamin gak bakal nyesel.",
  "Lagi butuh ini? Gak usah bingung, aku udah siapin link-nya.",
  "Produk kece + harga hemat = klik sekarang juga!",
  "Gak perlu nunggu diskon, produk ini udah murah dari sananya.",
  "Buat hidup lebih simple dan stylish, produk ini jawabannya.",
  "Lagi rame banget yang beli ini, jangan sampe kamu jadi yang terakhir!"
];

// Fungsi untuk mendapatkan kalimat acak
function getRandomPromosi() {
  const index = Math.floor(Math.random() * kalimatPromosi.length);
  return kalimatPromosi[index];
}

// Ubah handler tombol Generate Konten
document.getElementById("generateButton").addEventListener("click", function () {
  const namaProduk = document.getElementById("namaProduk").value.trim();
  const linkProduk = document.getElementById("linkProduk").value.trim();
  const urlGambar = document.getElementById("urlGambar").value.trim();

  if (!namaProduk || !linkProduk || !urlGambar) {
    alert("Harap isi semua kolom input.");
    return;
  }

  const randomKalimat = getRandomPromosi();

  const konten = `${randomKalimat}

Nama Produk: ${namaProduk}
Link Shopee: ${linkProduk}
Gambar Produk:
${urlGambar}`;

  document.getElementById("output").value = konten;
});
