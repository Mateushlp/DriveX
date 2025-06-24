function scrollToCars() {
  document.getElementById('carros').scrollIntoView({ behavior: 'smooth' });
}

const modal = document.getElementById("modal-detalhes");
const fecharModal = document.getElementById("fechar-modal");
const tituloModal = document.getElementById("titulo-modal");
const imgModal = document.getElementById("img-modal");
const descricaoModal = document.getElementById("descricao-modal");
const precoModal = document.getElementById("preco-modal");

const carrosDados = {
  "Ferrari 488 Spider": {
    descricao: "A Ferrari 488 Spider combina desempenho excepcional com design italiano sofisticado. Equipada com um motor V8 biturbo de 670 cv, atinge 0 a 100 km/h em apenas 3 segundos. É um conversível que oferece emoção pura e luxo absoluto.",
    preco: "R$ 1.200.000",
    img: "./img/ferrari.png",
  },
  "Mercedes C300": {
    descricao: "Luxo, tecnologia e performance. Motor turbo de 258cv, interior com acabamento premium, painel digital MBUX, assistente de voz e iluminação ambiente. Segurança com frenagem automática e piloto adaptativo.",
    preco: "R$ 350.000",
    img: "./img/ChatGPT Image 19 de jun. de 2025, 23_14_08.png",
  },
  "BMW serie 3": {
    descricao: "Design esportivo e tecnologia de ponta. Motor turbo de 258cv, tração traseira, câmbio automático de 8 marchas e modos de condução inteligentes. Interior refinado com tela curva, assistente pessoal e conectividade total. Dirigibilidade e conforto que definem o segmento premium.",
    preco: "R$ 450.000",
    img: "./img/serie 3.png",
  },

    "nivus": {
    descricao: "O Volkswagen Nivus é um crossover compacto com design coupé, desenvolvido no Brasil e lançado em 2020. Ele se destaca pelo visual moderno e pela tecnologia embarcada, como o painel Active Info Display e a central multimídia VW Play",
    preco: "R$ 120.000",
    img: "./img/nivus.jpg",
  },
  
  // Pode adicionar mais carros aqui
};

function abrirModal(modelo) {
  const dados = carrosDados[modelo];
  if (dados) {
    tituloModal.textContent = modelo;
    descricaoModal.textContent = dados.descricao;
    precoModal.textContent = dados.preco;
    imgModal.src = dados.img;
    imgModal.alt = modelo;
    modal.classList.add("show");
    modal.style.display = "flex";
    // animação suave
    modal.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 300, fill: "forwards" });
  }
}

function fecharModalFunc() {
  // animação de saída
  const anim = modal.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 300, fill: "forwards" });
  anim.onfinish = () => {
    modal.style.display = "none";
    modal.classList.remove("show");
  };
}

document.querySelectorAll(".btn-detalhes").forEach((button) => {
  button.addEventListener("click", () => {
    abrirModal(button.dataset.modelo);
  });
});

if (fecharModal) {
  fecharModal.addEventListener("click", fecharModalFunc);
}

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    fecharModalFunc();
  }
});




