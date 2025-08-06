// spinner.js

// Spinner-Container erstellen
const spinner = document.createElement('div');
spinner.id = 'custom-spinner';
spinner.innerHTML = `
  <div class="spinner-overlay">
    <div class="spinner-circle"></div>
  </div>
`;

// CSS-Stile für Spinner definieren
const style = document.createElement('style');
style.textContent = `
.spinner-overlay {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  pointer-events: none;
}

.spinner-circle {
  width: 28px;
  height: 28px;
  border: 3px solid transparent;
  border-top: 3px solid red; /* Hier die Farbe ändern */
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;

// Spinner einfügen, wenn DOM geladen ist
document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(style);
  document.body.appendChild(spinner);
});

// Spinner ausblenden, wenn Seite fertig geladen ist
window.addEventListener('load', () => {
  const el = document.getElementById('custom-spinner');
  if (el) el.remove();
});