const avaliacoes = [
    {
        nome: "João",
        estrelas: "★★★★★",
        texto: "Muito bom! Serviço excelente."
    },
    {
        nome: "Maria",
        estrelas: "★★★★☆",
        texto: "Gostei bastante, recomendo!"
    },
    {
        nome: "Carlos",
        estrelas: "★★★★★",
        texto: "Atendimento rápido e eficiente."
    },
    {
        nome: "Ana",
        estrelas: "★★★★☆",
        texto: "Muito bonito e organizado."
    }
];

const container = document.getElementById("avaliacoes");

avaliacoes.forEach(avaliacao => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <div class="nome">${avaliacao.nome}</div>
        <div class="estrelas">${avaliacao.estrelas}</div>
        <div class="texto">${avaliacao.texto}</div>
    `;

    container.appendChild(card);
});