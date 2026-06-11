(function() {
  const passkey = 'Kilesand';
  const root = document.documentElement;
  const authStyle = document.createElement('style');

  authStyle.textContent = 'html.auth-pending body { display: none !important; }';
  document.head.appendChild(authStyle);
  root.classList.add('auth-pending');

  function grantAccess() {
    sessionStorage.setItem('authenticated', 'true');
    root.classList.remove('auth-pending');
    authStyle.remove();
  }

  function denyAccess() {
    sessionStorage.removeItem('authenticated');
    alert('Tilgang nektet. Riktig passord kreves for å åpne siden.');
    window.location.replace('about:blank');
  }

  if (sessionStorage.getItem('authenticated') === 'true') {
    grantAccess();
    return;
  }

  const input = prompt('Skriv inn passord for å få tilgang:');

  if (input === passkey) {
    grantAccess();
    return;
  }

  denyAccess();
})();
