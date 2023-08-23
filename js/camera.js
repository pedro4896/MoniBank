const botaoIniciarCamera = document.querySelector("[data-video-botao]");
const campoCamera = document.querySelector("[data-camera]");
const video = document.querySelector("[data-video]");
const botaoTirarFoto = document.querySelector("[data-tirar-foto]");
const canvas = document.querySelector("[data-video-canvas]");
const mensagem = document.querySelector("[data-mensagem]");
const botaoEnviarFoto = document.querySelector("[data-enviar]");
let imagemURL = "";

botaoIniciarCamera.addEventListener("click", async function() {
    //metódo padrão que pede ao navegador para iniciar a câmera
    const iniciarVideo = await navigator.mediaDevices.getUserMedia({video:true, audio:false})
    //.getDisplayMedia: compartilha a sua tela

    botaoIniciarCamera.style.display = "none";
    campoCamera.style.display = "block";

    video.srcObject = iniciarVideo;//atribui iniciarVideo como origem da tag video(HTML)
})

botaoTirarFoto.addEventListener("click", function(){
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height)

    imagemURL = canvas.toDataURL("image/jpeg")

    campoCamera.style.display = "none"
    mensagem.style.display = "block"
})

botaoEnviarFoto.addEventListener("click", () => {
    //retornou o objeto cadastro dentro do localStorage
    const recerberDadosExistentes = localStorage.getItem("cadastro");
    //converte o retorno para JSON
    const converteRetorno = JSON.parse(recerberDadosExistentes);

    //cria um novo atributo chamada imagem dentro do objeto e atribui a imagem a ele
    converteRetorno.imagem = imagemURL;

    //insere dentro do objeto cadastro e converte para JSON
    localStorage.setItem('cadastro', JSON.stringify(converteRetorno));

    window.location.href = './abrir-conta-form-3.html'

})