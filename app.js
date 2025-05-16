const botao = document.getElementById('doido');

botao.addEventListener('click', function() {

    alert("Tá doidão de ácido mané???? Ce é besta ein!");
    
    const img = document.createElement('img');
    img.src = 'https://i.ytimg.com/vi/RlI-VyUOPQY/maxresdefault.jpg';
    img.alt = 'Burro';
    img.style.width = '1000px';
    img.style.margin = '20px auto';
    img.style.display = 'block';
    img.style.borderRadius = '10px';
    img.style.border = '3px solid #ffd83d';
    
    document.body.appendChild(img);
    
    img.style.animation = 'pulse 0.5s 3';
});