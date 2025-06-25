const usuarioLogado = localStorage.getItem('usuarioLogado');
const pUsuario = document.getElementById('usuarioLogado');
const btnLogout = document.getElementById('btnLogout');

if (!usuarioLogado) {
  alert('Você precisa fazer login primeiro.');
  window.location.href = 'login.html';
} else {
  pUsuario.textContent = 'Logado como: ' + usuarioLogado;
}

btnLogout.addEventListener('click', () => {
  localStorage.removeItem('usuarioLogado');
  alert('Você saiu.');
  window.location.href = 'login.html';
});
