const inputText = document.getElementById('inputText');
const btnManual = document.getElementById('btnManual');
const btnAuto = document.getElementById('btnAuto');
const quoteArea = document.getElementById('quoteArea');
const download = document.getElementById('download');

const fetchRandomQuote = async () => {
  const res = await fetch('https://type.fit/api/quotes');
  const data = await res.json();
  return data[Math.floor(Math.random() * data.length)].text;
};

const renderQuote = (text) => {
  quoteArea.innerHTML = '';
  const p = document.createElement('p');
  p.textContent = text;
  p.style.fontSize = '1.5em';
  quoteArea.appendChild(p);
};

btnManual.addEventListener('click', () => {
  const text = inputText.value.trim();
  if (!text) { alert('Isi teks dulu ya 😊'); return; }
  renderQuote(text);
});

btnAuto.addEventListener('click', async () => {
  const text = await fetchRandomQuote();
  renderQuote(text);
});

download.addEventListener('click', () => {
  html2canvas(quoteArea).then(canvas => {
    const link = document.createElement('a');
    link.download = 'quote-digi-centers.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  });
});
