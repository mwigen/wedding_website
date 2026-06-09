(function() {
  const passkey = 'Kilesand';

  if (sessionStorage.getItem('authenticated') === 'true') {
    return;
  }

  const input = prompt('Skriv inn passord for å få tilgang:');

  if (input === passkey) {
    sessionStorage.setItem('authenticated', 'true');
    return;
  }

  sessionStorage.removeItem('authenticated');
  alert('Tilgang nektet. Riktig passord kreves for å åpne siden.');
  window.location.replace('about:blank');
})();
