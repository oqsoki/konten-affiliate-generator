const templates = [
  "Lagi cari {product}? Nih, aku punya rekomendasinya! Langsung cek ya: {link}",
  "Produk favorit banyak orang: {product}! Buruan cek di sini: {link}",
  "Gak nyangka nemu {product} sekeren ini. Cek langsung sebelum kehabisan: {link}",
  "Butuh {product} yang bagus & harga ramah? Nih linknya: {link}",
  "Auto checkout! Produk ini bikin jatuh hati: {product}. Langsung klik: {link}",
  "Cobain deh {product} ini. Banyak yang udah buktiin! Cek di sini: {link}",
  "Best deal hari ini: {product}! Jangan sampai kehabisan: {link}",
  "Rekomendasi pribadi nih, {product}! Linknya ada di sini: {link}",
  "Yang lagi viral: {product}! Kamu harus punya juga. Klik sekarang: {link}",
  "Paling worth it buat dibeli bulan ini: {product}! Linknya: {link}",
  "Kualitas mantap, harga hemat. Cek {product} ini: {link}",
  "Udah liat {product} ini belum? Banyak yang puas loh! Cek di sini: {link}",
  "Susah cari yang pas? Nih, coba cek {product}: {link}",
  "Ngonten makin keren pake {product} ini! Lihat di Shopee: {link}",
  "Banyak yang repeat order! {product} ini emang top! Klik: {link}",
  "Biar gak FOMO, buruan beli {product} di sini: {link}",
  "Solusi kebutuhan kamu, langsung klik {product} di: {link}",
  "Produk kece buat kamu! Cek {product} di sini: {link}",
  "Gak mau rugi? Langsung amankan {product} lewat link ini: {link}",
  "Belanja cerdas itu pilih {product} kayak gini. Cek yuk: {link}"
];

function getRandomTemplate(product, link) {
  const template = templates[Math.floor(Math.random() * templates.length)];
  return template.replace("{product}", product).replace("{link}", link);
}

function generateContent() {
  const productName = document.getElementById("productName").value.trim();
  const affiliateLink = document.getElementById("affiliateLink").value.trim();
  const imageUrl = document.getElementById("imageUrl").value.trim();

  if (!productName || !affiliateLink) {
    alert("Nama produk dan link affiliate wajib diisi!");
    return;
  }

  const content = getRandomTemplate(productName, affiliateLink);
  document.getElementById("resultContent").value = content;

  // tampilkan gambar jika ada
  const img = document.getElementById("productImage");
  if (imageUrl) {
    img.src = imageUrl;
    img.style.display = "block";
  } else {
    img.style.display = "none";
  }
}

function copyContent() {
  const textArea = document.getElementById("resultContent");
  textArea.select();
  textArea.setSelectionRange(0, 99999); // untuk mobile
  document.execCommand("copy");
  alert("Konten berhasil dicopy!");
}
