function generateKonten() {
  const nama = document.getElementById("namaProduk").value.trim();
  const fitur = document.getElementById("fiturProduk").value.trim();
  const link = document.getElementById("linkAffiliate").value.trim();
  const output = document.getElementById("hasilKonten");

  if (!nama || !fitur || !link) {
    output.innerHTML = "<p style='color:red;'>Semua kolom wajib diisi.</p>";
    return;
  }

  const konten = `
📢 ${nama} Lagi Viral Banget! 😍<br><br>
Kenapa banyak orang suka?<br>
✅ ${fitur.split(',').map(f => f.trim()).join('<br>✅ ')}<br><br>
Dapatkan sekarang sebelum kehabisan! 🛒<br>
👉 <a href="${link}" target="_blank">${link}</a><br><br>
#ShopeeAffiliate #Promo #${nama.replace(/\s+/g, '')}
  `;

  output.innerHTML = konten;
}

function copyToClipboard() {
  const tempElement = document.createElement("textarea");
  tempElement.style.position = "fixed";
  tempElement.style.opacity = "0";
  tempElement.value = document.getElementById("hasilKonten").innerText;

  document.body.appendChild(tempElement);
  tempElement.select();
  document.execCommand("copy");
  document.body.removeChild(tempElement);

  alert("Konten berhasil disalin!");
}
