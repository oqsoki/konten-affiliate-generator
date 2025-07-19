function generateContent() {
  const productName = document.getElementById("productName").value.trim();
  const features = document.getElementById("features").value.trim();
  const affiliateLink = document.getElementById("affiliateLink").value.trim();

  if (!productName || !features || !affiliateLink) {
    alert("Harap lengkapi semua kolom input.");
    return;
  }

  const featureList = features
    .split(",")
    .map((item) => `✅ ${item.trim()}`)
    .join("\n");

  const content = `📢 ${productName} Lagi Viral Banget! 😍\n\nKenapa banyak orang suka?\n${featureList}\n\nDapatkan sekarang sebelum kehabisan! 🛒\n👉 ${affiliateLink}\n\n#ShopeeAffiliate #Promo #${productName.split(" ")[0]}`;

  document.getElementById("result").value = content;
}

function copyContent() {
  const result = document.getElementById("result");
  if (!result.value) {
    alert("Belum ada konten untuk disalin.");
    return;
  }
  result.select();
  document.execCommand("copy");
  alert("Konten berhasil disalin!");
}

function generateImage() {
  const productName = document.getElementById("productName").value.trim();
  if (!productName) {
    alert("Masukkan nama produk terlebih dahulu.");
    return;
  }

  const query = encodeURIComponent(productName);
  const imageUrl = `https://source.unsplash.com/600x400/?${query}`;

  const imageDiv = document.getElementById("imageResult");
  imageDiv.innerHTML = `<img src="${imageUrl}" alt="Gambar ${productName}" />`;
}
