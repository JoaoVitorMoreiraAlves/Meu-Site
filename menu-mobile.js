let btnMenu = document.getElementById('btn-abrir-menu')
let menuMobile = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu-mobile')


//Evento para Abrir o Menu Mobile quando for clicado no icone que o representa
btnMenu.addEventListener('click', ()=>{
    menuMobile.classList.add('abrir-menu-mobile');
})

//Evento para Abrir o Menu Mobile quando for clicado no icone que o representa
menuMobile.addEventListener('click', ()=>{
    menuMobile.classList.remove('abrir-menu-mobile');
})

//Evento para Abrir o Overlay quando for clicado no icone que o representa
overlay.addEventListener('click', () => {
    menuMobile.classList.remove('abrir-menu-mobile');
});

//Enviando o email sem acessar o site formspree através do AJAX
const formulario = document.getElementById('form');

formulario.addEventListener('submit', function (e) {
  e.preventDefault();

  // Obtenha os dados do formulário
  const formData = new FormData(formulario);

  // Use AJAX para enviar os dados
  fetch(formulario.action, {
    method: formulario.method,
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {

      alert("Mensagem enviada com sucesso!")

    // Limpe os campos do formulário
    formulario.reset();
  })
  .catch(error => {
    // Lidar com erros, se necessário
    console.error(error);
  });
});