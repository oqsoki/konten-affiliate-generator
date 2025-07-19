document.getElementById('generateBtn').addEventListener('click', function () {
  const contohKonten = [
    "🔥 Temukan produk terbaik ini sekarang juga! Klik link-nya dan rasakan sendiri keunggulannya!",
    "💡 Produk pilihan yang bikin hidup kamu lebih praktis. Cek sekarang dan dapatkan diskon spesial!",
    "🎯 Lagi cari produk berkualitas? Ini jawabannya! Langsung klik link ini sekarang!"
  ];
  const konten = contohKonten[Math.floor(Math.random() * contohKonten.length)];
  document.getElementById('output').value = konten;
});

document.getElementById('copyBtn').addEventListener('click', function () {
  const output = document.getElementById('output');
  output.select();
  document.execCommand('copy');
  alert('Konten berhasil disalin!');
});

document.getElementById('generateImgBtn').addEventListener('click', function () {
  const img = document.getElementById('generatedImg');
  const width = 400;
  const height = 300;
  const randomId = Math.floor(Math.random() * 1000); // agar gambar selalu berbeda
  img.src = `https://picsum.photos/seed/${randomId}/${width}/${height}`;
});
