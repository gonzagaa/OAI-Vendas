
AOS.init(
  {
      duration: 1200,
  }
);

const btnWhatsApp = document.querySelector('.btn-whatsapp-pulse');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const vh70 = window.innerHeight * 0.7;

  if (scrollY > vh70) {
    btnWhatsApp.classList.add('active');
  } else {
    btnWhatsApp.classList.remove('active');
  }
});

const larguraDaTela = window.innerWidth
  
if (larguraDaTela < 800) {
    var swiper3 = new Swiper(".mySwiper3", {
        grabCursor: true,
        loop: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
          },
          effect: "cube",
          cubeEffect: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
} else {
    var swiper3 = new Swiper(".mySwiper3", {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 10,
        loop: true,
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
};

if (larguraDaTela < 800) {
  var swiper4 = new Swiper(".mySwiper4", {
    cssMode: true,
    spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      mousewheel: true,
      keyboard: true,
      loop: true,
  });
} else {
  // Remove as classes do carrossel para desktop
  document.querySelectorAll('.mySwiper4 .swiper, .mySwiper4').forEach(el => {
    el.classList.remove('swiper', 'mySwiper4');
  });

  document.querySelectorAll('.mySwiper4 .swiper-wrapper').forEach(el => {
    el.classList.remove('swiper-wrapper');
  });

  document.querySelectorAll('.mySwiper4 .swiper-slide').forEach(el => {
    el.classList.remove('swiper-slide');
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // Seletores exclusivos para o modal do robô
  const modalOverlayRobo = document.getElementById("modalOverlayRobo");
  const modalRobo = document.getElementById("modalRobo");
  const closeModalButtonRobo = document.getElementById("closeModalRobo");

  const modalTitle = document.getElementById("modalTitle");
  const maxLoss = document.getElementById("maxLoss");
  const taxaAssertividade = document.getElementById("taxaAssertividade");
  const fatorLucro = document.getElementById("fatorLucro");
  const obs = document.getElementById("obs");

  // Botões para abrir o modal do robô
  const openModalButtonsRobo = document.querySelectorAll(".openModalRobo");

  // Carrega o JSON e adiciona eventos aos botões
  fetch("../../robos.json")
    .then((response) => response.json())
    .then((data) => {
      openModalButtonsRobo.forEach((button) => {
        button.addEventListener("click", () => {
          const roboId = button.getAttribute("data-id");
          const robo = data.find((item) => item.id === roboId);

          if (robo) {
            // Preenche os dados do modal
            modalTitle.textContent = robo.nome;
            maxLoss.textContent = robo.maximoLossDiario;
            taxaAssertividade.textContent = robo.taxaAssertividade;
            fatorLucro.textContent = robo.fatorLucro;
            obs.textContent = robo.obs;

            // Abre o modal do robô
            modalOverlayRobo.style.display = "flex";
            setTimeout(() => {
              modalRobo.classList.add("open");
            }, 10);
          }
        });
      });
    })
    .catch((error) => console.error("Erro ao carregar o JSON:", error));

  // Fecha o modal ao clicar no botão de fechar ou na overlay
  closeModalButtonRobo.addEventListener("click", closeModalRobo);
  modalOverlayRobo.addEventListener("click", (e) => {
    if (e.target === modalOverlayRobo) closeModalRobo();
  });

  // Função para fechar o modal do robô
  function closeModalRobo() {
    modalRobo.classList.remove("open");
    setTimeout(() => {
      modalOverlayRobo.style.display = "none";
    }, 300);
  }
});