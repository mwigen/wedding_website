(function() {
  const passkey = 'Kilesand';
  if (sessionStorage.getItem('authenticated') === 'true') {
    return;
  }

  const input = prompt('Skriv inn passord for å få tilgang:');

  if (input === passkey) {
    sessionStorage.setItem('authenticated', 'true');
  } else {
    document.write('<h1>Feil passord</h1>');
  }
})();
