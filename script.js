document.getElementById('generateContent').addEventListener('click', () => {
  const productLink = document.getElementById('productLink').value.trim();
  const imageUrl = document.getElementById('productImage').value.trim();
  const resultContent = document.getElementById('resultContent');
  const imagePreview = document.getElementById('imagePreview');

  if (!productLink || !imageUrl) {
    alert('Mohon isi link produk dan URL gambar terlebih dahulu.');
    return;
  }

  // Tampilkan gambar
  imagePreview.innerHTML = `<img src="${imageUrl}" alt="Gambar Produk">`;

  // Generate konten
  const content = `
🔥 Produk Menarik di Shopee! 🔥

Lihat produk ini, kualitasnya top banget dan harganya bersahabat. Kamu wajib cek sekarang juga sebelum kehabisan!

✅ Link Produk: ${productLink}

🎯 Segera checkout sebelum kehabisan!
  `.trim();

  resultContent.value = content;
});

document.getElementById('copyContent').addEventListener('click', () => {
  const resultContent = document.getElementById('resultContent');
  resultContent.select();
  document.execCommand('copy');
  alert('Konten berhasil disalin!');
});
