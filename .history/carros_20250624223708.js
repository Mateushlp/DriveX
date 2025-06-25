// Filtro de busca
const inputFiltro = document.getElementById('filtro-carros');
const cards = document.querySelectorAll('.card-carro');

inputFiltro.addEventListener('input', function () {
  const termo = this.value.toLowerCase();

  cards.forEach((card) => {
    const nomeCarro = card.querySelector('h3').textContent.toLowerCase();
    card.style.display = nomeCarro.includes(termo) ? 'block' : 'none';
  });
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
