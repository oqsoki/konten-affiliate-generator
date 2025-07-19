
function generateContent() {
  const productName = document.getElementById('productName').value;
  const features = document.getElementById('productFeatures').value;
  const affiliateLink = document.getElementById('affiliateLink').value;

  const featuresList = features.split(',').map(f => `✅ ${f.trim()}`).join('\n');
  const content = `📢 ${productName} Lagi Viral Banget! 😍\n\nKenapa banyak orang suka?\n${featuresList}\n\nDapatkan sekarang sebelum kehabisan! 🛒\n👉 ${affiliateLink}\n\n#ShopeeAffiliate #Promo #${productName.replace(/\s+/g, '')}`;

  document.getElementById('generatedContent').value = content;
}

function copyContent() {
  const content = document.getElementById('generatedContent');
  content.select();
  document.execCommand('copy');
  alert('Konten berhasil disalin!');
}

function generateImage() {
  const productName = document.getElementById('productName').value;
  const imageUrl = `https://via.placeholder.com/600x400.png?text=${encodeURIComponent(productName)}`;
  
  const imageContainer = document.getElementById('generatedImageContainer');
  imageContainer.innerHTML = `<img src="\${imageUrl}" alt="Gambar Produk" style="max-width: 100%; border-radius: 10px;" />`;
}
