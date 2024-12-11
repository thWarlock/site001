document.addEventListener('DOMContentLoaded', () => {
    const imagens = document.querySelectorAll('.imagensgaleria img');
    const espacamento = 170; // Espaçamento em leque

    imagens.forEach((imagem, index) => {
        // Distribui as imagens sobrepondo parcialmente
        imagem.style.left = `${index * espacamento}px`;

        imagem.addEventListener('mouseover', () => {
            // Garante destaque quando estiver em cima da imagem
            imagem.style.transform = 'scale(1.2)';
            imagem.style.zIndex = 10; // Coloca no topo ao estar com hover
        });

        imagem.addEventListener('mouseout', () => {
            // Reseta escala e ordem
            imagem.style.transform = 'scale(1)';
            imagem.style.zIndex = index; // Reaplica a ordem original
        });
    });
});