const formCadastro = document.getElementById('formCadastro');

formCadastro.addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value.toLowerCase();
  const senha = document.getElementById('senha').value;
  const senhaConfirma = document.getElementById('senhaConfirma').value;

  if (senha !== senhaConfirma) {
    alert('As senhas não coincidem.');
    return;
  }

  if (localStorage.getItem('usuario_' + email)) {
    alert('Usuário já existe.');
    return;
  }

  const usuario = { email, senha };
  localStorage.setItem('usuario_' + email, JSON.stringify(usuario));

  alert('Cadastro realizado com sucesso! Faça login.');
  window.location.href = 'login.html';
});
