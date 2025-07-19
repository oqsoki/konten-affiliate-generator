document.getElementById('generateBtn').addEventListener('click', function () {
  const product = document.getElementById('productName').value.trim();
  const features = document.getElementById('features').value.trim();
  const link = document.getElementById('affiliateLink').value.trim();

  if (!product || !features || !link) {
    alert('Silakan isi semua kolom terlebih dahulu!');
    return;
  }

  const featureList = features.split(',').map(f => `✅ ${f.trim()}`).join('\n');

  const result = `📢 ${product} Lagi Viral Banget! 😍

Kenapa banyak orang suka?
${featureList}

Dapatkan sekarang sebelum kehabisan! 🛒
👉 ${link}

#ShopeeAffiliate #Promo #${product.replace(/\s+/g, '')}`;

  document.getElementById('resultText').value = result;
});

document.getElementById('copyBtn').addEventListener('click', function () {
  const textArea = document.getElementById('resultText');
  textArea.select();
  document.execCommand('copy');
  alert('Konten berhasil disalin!');
});

document.getElementById('generateImageBtn').addEventListener('click', function () {
  const product = document.getElementById('productName').value.trim();
  if (!product) {
    alert("Masukkan nama produk terlebih dahulu!");
    return;
  }

  const keyword = encodeURIComponent(product);
  const imageUrl = `https://source.unsplash.com/600x400/?${keyword}`;

  document.getElementById('generatedImage').src = imageUrl;
});
