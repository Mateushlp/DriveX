const formLogin = document.getElementById('formLogin');

formLogin.addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value.toLowerCase();
  const senha = document.getElementById('senha').value;

  const usuario = JSON.parse(localStorage.getItem('usuario_' + email));

  if (!usuario) {
    alert('Usuário não encontrado. Por favor, cadastre-se primeiro.');
    return;
  }

  if (usuario.senha !== senha) {
    alert('Senha incorreta. Tente novamente.');
    return;
  }

  localStorage.setItem('usuarioLogado', email);
  alert('Login realizado com sucesso!');
  window.location.href = 'area-restrita.html';
});
