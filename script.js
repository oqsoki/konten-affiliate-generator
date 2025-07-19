document.getElementById("generateBtn").addEventListener("click", function () {
  const productName = document.getElementById("productName").value;
  const features = document.getElementById("features").value;
  const affiliateLink = document.getElementById("affiliateLink").value;

  if (!productName || !features || !affiliateLink) {
    alert("Semua kolom harus diisi!");
    return;
  }

  const featureList = features.split(",").map(item => `✅ ${item.trim()}`).join("\n");

  const content = `📢 ${productName} Lagi Viral Banget! 😍

Kenapa banyak orang suka?
${featureList}

Dapatkan sekarang sebelum kehabisan! 🛒
👉 ${affiliateLink}

#ShopeeAffiliate #Promo #${productName.split(" ")[0]}`;

  document.getElementById("result").value = content;
});

document.getElementById("copyBtn").addEventListener("click", function () {
  const result = document.getElementById("result");
  result.select();
  document.execCommand("copy");
  alert("Konten berhasil disalin!");
});

document.getElementById("generateImageBtn").addEventListener("click", function () {
  const productName = document.getElementById("productName").value.trim();
  const features = document.getElementById("features").value.trim();

  if (!productName || !features) {
    alert("Masukkan nama produk dan fitur!");
    return;
  }

  // Gunakan Unsplash API gratis
  const imageUrl = `https://source.unsplash.com/600x400/?${encodeURIComponent(productName + "," + features)}`;
  
  const img = document.createElement("img");
  img.src = imageUrl;
  img.alt = productName;
  img.onload = function () {
    const container = document.getElementById("imageContainer");
    container.innerHTML = ""; // Bersihkan sebelumnya
    container.appendChild(img);
  };
});
