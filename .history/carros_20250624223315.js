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


// Botão ENCOMENDAR
const botoesEncomenda = document.querySelectorAll('.btn-encomenda');

botoesEncomenda.forEach((btn) => {
  btn.addEventListener('click', () => {
    const modelo = btn.getAttribute('data-modelo');
    alert(`🔧 Pedido de encomenda registrado para o modelo: ${modelo}. Entraremos em contato!`);
  });
});

// Botão FAZER OFERTA
const botoesOferta = document.querySelectorAll('.btn-oferta');

botoesOferta.forEach((btn) => {
  btn.addEventListener('click', () => {
    const modelo = btn.getAttribute('data-modelo');
    const oferta = prompt(`💸 Digite o valor que deseja ofertar para o ${modelo}:`);
    
    if (oferta && !isNaN(oferta)) {
      alert(`✅ Oferta de R$ ${Number(oferta).toLocaleString('pt-BR')} enviada para o modelo ${modelo}.`);
    } else if (oferta !== null) {
      alert("⚠️ Valor inválido. Por favor, digite um número.");
    }
  });
});
