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

//Script para mudar o idioma do site
function toggleLanguagePopup() {
    var popup = document.getElementById('language-popup');
    if (popup.style.display === 'none' || popup.style.display === '') {
        popup.style.display = 'block';
    } else {
        popup.style.display = 'none';
    }
}

function changeLanguage(lang) {
    var elements = document.querySelectorAll('[data-lang]');
    elements.forEach(function(element) {
        element.innerHTML = element.getAttribute('data-lang-' + lang);
    });
    var placeholders = document.querySelectorAll('[data-lang-placeholder]');
      placeholders.forEach(function(element) {
          element.placeholder = element.getAttribute('data-lang-placeholder-' + lang);
      });
    
    var titles = document.querySelectorAll('[data-lang-title]');
    titles.forEach(function(element) {
        element.title = element.getAttribute('data-lang-title-' + lang);
    });

    var inputs = document.querySelectorAll('[data-lang]');
    inputs.forEach(function(element) {
        if (element.tagName.toLowerCase() === 'input' && element.type === 'submit') {
            element.value = element.getAttribute('data-lang-' + lang);
        }
    });
    // Atualizar a bandeira ativa
    var activeFlag = document.getElementById('active-flag');
    if (lang === 'pt-br') {
        activeFlag.style.backgroundImage = "url('./images/pt-bandeira.png')"; //Imagem da bandeira brasileira
        document.title = "Portifólio - João Vitor"; // Título em português
    } else if (lang === 'en') {
        activeFlag.style.backgroundImage = "url('./images/en-bandeira.png')"; // Imagem da bandeira americana
        document.title = "Portfolio - João Vitor"; // Título em inglês
    }

    // Fechar o popup após a seleção
    document.getElementById('language-popup').style.display = 'none';
}

//Baixar curriculo da lingua certa
function baixa_cv() {
    // Verifica o valor do atributo data-lang do título do botão de download
    const lang = document.querySelector('.btn-download').getAttribute('title') === 'Download Curriculum Vitae' ? 'en' : 'pt-br';

    // Define os caminhos dos arquivos com base no idioma
    let cvFile = "";
    let fileName = "";
    
    if (lang === "en") {
        cvFile = "Curriculo/CurriculoENG_JoãoVitorMoreiraAlves_2025.rar"; // Caminho do arquivo
        fileName = "CurriculumVitae_JoãoVitorMoreiraAlves.rar"; // Nome personalizado para download
    } else {
        cvFile = "Curriculo/CurriculoPTBR_JoãoVitorMoreiraAlves_2025.rar"; // Caminho do arquivo
        fileName = "Curriculo_JoãoVitorMoreiraAlves.rar"; // Nome personalizado para download
    }
    
    // Cria um link para download
    const link = document.createElement("a");
    link.href = cvFile;
    link.download = fileName; // Define o nome personalizado do arquivo
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}