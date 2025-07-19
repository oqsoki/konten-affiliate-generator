function generateContent() {
    const url = document.getElementById("product-url").value.trim();
    const contentDiv = document.getElementById("generated-content");

    if (!url) {
        contentDiv.innerText = "Masukkan URL produk terlebih dahulu.";
        return;
    }

    const konten = `🔥 Produk Laris di Shopee! 🔥\n\nCek produk ini sekarang juga sebelum kehabisan!\n👉 ${url} 👈\n\nJangan sampai menyesal!`;
    contentDiv.innerText = konten;
}

function copyContent() {
    const content = document.getElementById("generated-content").innerText;
    if (!content) return;

    navigator.clipboard.writeText(content).then(() => {
        alert("Konten berhasil disalin!");
    });
}

function showImage() {
    const imageUrl = document.getElementById("image-url").value.trim();
    const imageDisplay = document.getElementById("image-display");

    if (!imageUrl) {
        imageDisplay.innerText = "Masukkan URL gambar terlebih dahulu.";
        return;
    }

    imageDisplay.innerHTML = `<img src="\${imageUrl}" alt="Gambar Produk">`;
}
