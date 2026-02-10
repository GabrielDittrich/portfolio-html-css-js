// 1️⃣ Carrossel automático na Home
let slideIndex = 0;
const slides = document.querySelectorAll(".slides img");
function showSlides() {
    slides.forEach(s => s.style.display = "none");
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].style.display = "block";
}
setInterval(showSlides, 3000);

// 2️⃣ Modal de Projetos
const modal = document.getElementById("modal");
const abrirModal = document.querySelectorAll(".abrir-modal");
const fechar = document.querySelector(".fechar");

const modalTitulo = document.getElementById("modal-titulo");
const modalDescricao = document.getElementById("modal-descricao");
const modalLink = document.getElementById("modal-link");

const projetosInfo = {
    "loja-instrumental": {
        titulo: "Loja Instrumental React",
        descricao: "Loja virtual feita em React com Bootstrap 5, componentes reutilizáveis, gerenciamento de estado e design responsivo. Projeto pessoal voltado ao aprendizado de front-end moderno.",
        link: "https://github.com/GabrielDittrich/loja-instrumental-react"
    },
    "petshop": {
        titulo: "Gerenciamento de Petshop",
        descricao: "Sistema de gerenciamento de petshop desenvolvido em C# com .NET e React, integrado ao banco de dados MySQL.",
        link: "https://github.com/GabrielDittrich/gerenciamento-petshop-api"
    },
    "catalogo-filmes": {
        titulo: "Catálogo de Filmes",
        descricao: "Aplicativo Android desenvolvido em Kotlin com Jetpack Compose, consumo de API e integração com Firebase.",
        link: "https://github.com/GabrielDittrich/KotlinTmdbCatalogoApp"
    },
    "folha-pagamento": {
        titulo: "Folha de Pagamento",
        descricao: "Este projeto é uma API RESTful desenvolvida em C# usando o ASP.NET Core e Entity Framework + React. O objetivo é gerenciar informações sobre funcionários e suas respectivas folhas de pagamento.",
        link: "https://github.com/GabrielDittrich/TaskManagerAPI"
    }
};

abrirModal.forEach(btn => {
    btn.addEventListener("click", () => {
        const id = btn.dataset.projeto;
        const projeto = projetosInfo[id];

        modalTitulo.textContent = projeto.titulo;
        modalDescricao.textContent = projeto.descricao;
        modalLink.href = projeto.link;

        modal.style.display = "block";
    });
});

fechar.addEventListener("click", () => modal.style.display = "none");
window.addEventListener("click", e => {
    if (e.target === modal) modal.style.display = "none";
});