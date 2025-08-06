// spinner.js

// Blauen nativen Pull-to-Refresh verhindern
document.addEventListener('touchmove', function (e) {
  if (window.scrollY === 0 && e.touches[0].clientY > 0) {
    e.preventDefault();
  }
}, { passive: false });

// Spinner-Container erstellen
const spinner = document.createElement('div');
spinner.id = 'custom-spinner';
spinner.innerHTML = `
  <div class="spinner-overlay">
    <div class="spinner-circle"></div>
  </div>
`;

// CSS-Stile für Spinner als <style>-Element einfügen
const style = document.createElement('style');
style.textContent = `
/* Scrollverhalten kontrollieren */
html, body {
  overscroll-behavior-y: contain;
  touch-action: pan-x pan-y;
}

/* Spinner Overlay */
.spinner-overlay {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  pointer-events: none;
}

/* Roter Kreis-Spinner */
.spinner-circle {
  width: 28px;
  height: 28px;
  border: 3px solid transparent;
  border-top: 3px solid red; /* Hier kannst du die Farbe anpassen */
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

/* Animations-Definition */
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;

// Spinner und Styles einfügen, wenn DOM geladen ist
document.addEventListener('DOMContentLoaded', () => {
  document.head.appendChild(style);
  document.body.appendChild(spinner);
});

// Spinner entfernen, wenn Seite fertig geladen ist
window.addEventListener('load', () => {
  const el = document.getElementById('custom-spinner');
  if (el) el.remove();
});