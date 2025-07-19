document.getElementById('generateBtn').addEventListener('click', () => {
  const productLink = document.getElementById('productLink').value.trim();
  if (!productLink) {
    alert("Masukkan link produk Shopee terlebih dahulu.");
    return;
  }

  const content = `
🔥 Promo Spesial Shopee! 🔥

Lagi cari produk keren? Cek produk ini sekarang juga di Shopee! Dijamin gak nyesel ✅

📦 Klik link ini untuk cek produknya langsung:
👉 ${productLink}

Buruan sebelum kehabisan! 🛒💨
  `.trim();

  document.getElementById('output').textContent = content;
});

document.getElementById('copyBtn').addEventListener('click', () => {
  const output = document.getElementById('output').textContent;
  if (!output) {
    alert("Belum ada konten untuk disalin.");
    return;
  }

  navigator.clipboard.writeText(output).then(() => {
    alert("Konten berhasil disalin!");
  });
});

document.getElementById('generateImage').addEventListener('click', () => {
  const imageUrl = document.getElementById('imageUrl').value.trim();
  const imagePreview = document.getElementById('imagePreview');
  imagePreview.innerHTML = ''; // clear sebelumnya

  if (!imageUrl) {
    alert("Masukkan URL gambar terlebih dahulu.");
    return;
  }

  const img = document.createElement('img');
  img.src = imageUrl;
  img.alt = "Preview Gambar Produk";
  img.onerror = () => {
    imagePreview.innerHTML = "<p style='color:red;'>Gagal memuat gambar. Coba periksa URL-nya!</p>";
  };
  imagePreview.appendChild(img);
});
