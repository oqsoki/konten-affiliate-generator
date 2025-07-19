document.getElementById('generateImageBtn').addEventListener('click', () => {
  const produk = document.getElementById('productName').value;
  const fitur = document.getElementById('productFeatures').value.split(',');
  const link = document.getElementById('affiliateLink').value;

  const canvas = document.getElementById('promoCanvas');
  const ctx = canvas.getContext('2d');
  canvas.width = 800;
  canvas.height = 600;

  // Background
  ctx.fillStyle = '#f2f2f2';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Judul
  ctx.fillStyle = '#333';
  ctx.font = 'bold 30px Arial';
  ctx.fillText('📢 PROMO AFFILIATE', 40, 60);

  // Nama Produk
  ctx.font = 'bold 24px Arial';
  ctx.fillText(produk, 40, 120);

  // Fitur
  ctx.font = '20px Arial';
  ctx.fillStyle = '#000';
  fitur.forEach((f, i) => {
    ctx.fillText('✅ ' + f.trim(), 40, 170 + i * 30);
  });

  // Link
  ctx.fillStyle = 'blue';
  ctx.font = '16px Arial';
  ctx.fillText(link, 40, 300);

  // Tampilkan canvas dan buat download link
  canvas.style.display = 'block';
  const downloadLink = document.getElementById('downloadLink');
  downloadLink.href = canvas.toDataURL();
  downloadLink.download = 'konten-affiliate.png';
  downloadLink.style.display = 'inline-block';
});
