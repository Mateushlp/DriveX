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

// Modal de detalhes
const botoesDetalhes = document.querySelectorAll('.btn-detalhes');
const modal = document.getElementById('modal-detalhes');
const tituloModal = document.getElementById('titulo-modal');
const imgModal = document.getElementById('img-modal');
const descricaoModal = document.getElementById('descricao-modal');
const precoModal = document.getElementById('preco-modal');
const fecharModal = document.getElementById('fechar-modal');

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

    modal.style.display = 'flex';
  });
});

fecharModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
