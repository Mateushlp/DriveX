const formContato = document.getElementById('form-contato');
const respostaContato = document.getElementById('resposta-contato');

formContato.addEventListener('submit', (e) => {
  e.preventDefault();

  const nome = formContato.nome.value.trim();
  const email = formContato.email.value.trim();
  const telefone = formContato.telefone.value.trim();
  const mensagem = formContato.mensagem.value.trim();

  if(!nome || !email || !mensagem){
    respostaContato.style.color = 'red';
    respostaContato.textContent = 'Por favor preencha os campos obrigatórios: nome, email e mensagem.';
    return;
  }

  // Aqui você pode fazer um envio via fetch/ajax se quiser ou só mostrar a mensagem de sucesso
  respostaContato.style.color = 'green';
  respostaContato.textContent = `Obrigado ${nome} pelo contato. Responderemos em breve!`;

  formContato.reset();
});
