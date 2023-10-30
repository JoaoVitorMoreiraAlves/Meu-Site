let btnMenu = document.getElementById('btn-abrir-menu')
let menuMobile = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu-mobile')



btnMenu.addEventListener('click', ()=>{
    menuMobile.classList.add('abrir-menu-mobile');
})

menuMobile.addEventListener('click', ()=>{
    menuMobile.classList.remove('abrir-menu-mobile');
})

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