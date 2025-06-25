// Filtro de busca
const inputFiltro = document.getElementById('filtro-carros');
const cards = document.querySelectorAll('.card-carro');

inputFiltro.addEventListener('input', function () {
  const termo = this.value.toLowerCase();

  cards.forEach((card) => {
    const nomeCarro = card.querySelector('h3').textContent.toLowerCase();
    if (nomeCarro.includes(termo)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});

// Modal de detalhes (se quiser manter)
const botoesDetalhes = document.querySelectorAll('.btn-detalhes');
const modal = document.getElementById('modal-detalhes');
const tituloModal = document.getElementById('titulo-modal');
const imgModal = document.getElementById('img-modal');
const descricaoModal = document.getElementById('descricao-modal');
const precoModal = document.getElementById('preco-modal');
const fecharModal = document.getElementById('fechar-modal');

if (botoesDetalhes) {
  botoesDetalhes.forEach((btn) => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.card-carro');
      const nome = card.querySelector('h3').textContent;
      const imagem = card.querySelector('img').src;
      const descricao = card.querySelector('p').textContent;
      const preco = card.querySelector('strong').textContent;

      tituloModal.textContent = nome;
      imgModal.src = imagem;
      imgModal.alt = nome;
      descricaoModal.textContent = descricao;
      precoModal.textContent = preco;

      modal.classList.add('show');
    });
  });

  fecharModal.addEventListener('click', () => {
    modal.classList.remove('show');
  });

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.classList.remove('show');
    }
  });
}

// Botão ENCOMENDAR (Comprar)
const botoesEncomenda = document.querySelectorAll('.btn-encomenda');

botoesEncomenda.forEach((btn) => {
  btn.addEventListener('click', () => {
    const modelo = btn.getAttribute('data-modelo');
    alert(`✅ Pedido registrado para o modelo: ${modelo}. Em breve entraremos em contato.`);
  });
});

// Botão FAZER OFERTA -> Redireciona para página de contato com modelo no link
const botoesOferta = document.querySelectorAll('.btn-oferta');

botoesOferta.forEach((btn) => {
  btn.addEventListener('click', () => {
    const modelo = btn.getAttribute('data-modelo');
    const url = `contato.html?modelo=${encodeURIComponent(modelo)}`;
    window.location.href = url;
  });
});



  const usuarioLogado = localStorage.getItem('usuarioLogado');
  const linkLogin = document.getElementById('link-login');
  const linkArea = document.getElementById('link-area');
  const btnLogout = document.getElementById('btn-logout');

  if (usuarioLogado) {
    linkLogin.style.display = 'none';
    linkArea.style.display = 'inline-block';
    btnLogout.style.display = 'inline-block';
  } else {
    linkLogin.style.display = 'inline-block';
    linkArea.style.display = 'none';
    btnLogout.style.display = 'none';
  }

  btnLogout.querySelector('button').addEventListener('click', () => {
    localStorage.removeItem('usuarioLogado');
    alert('Você saiu.');
    // Atualiza o menu para mostrar login novamente
    linkLogin.style.display = 'inline-block';
    linkArea.style.display = 'none';
    btnLogout.style.display = 'none';
    window.location.href = 'index.html'; // ou onde quiser redirecionar após logout
  });