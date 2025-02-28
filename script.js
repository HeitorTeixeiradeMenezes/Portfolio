let socialLinks = document.querySelectorAll(".social img")
socialLinks[0].addEventListener("click", function(){
    window.open("https://github.com/HeitorTeixeiradeMenezes");
})
socialLinks[1].addEventListener("click", function(){
    window.open("https://www.linkedin.com/in/heitorteixeiramenezes/");
})
socialLinks[2].addEventListener("click", function(){
    window.open("mailto:heitortdm@gmail.com");
})
socialLinks[3].addEventListener("click", function(){
    window.open("https://www.instagram.com/heitortdm/");
})
socialLinks[4].addEventListener("click", function(){
    window.open("https://wa.me/5534997905066?text=");
})
socialLinks[5].addEventListener("click", function(){
    window.open("https://criarmeulink.com.br/u/1740771830");
})
let objProjects = [
    {
        imagem: "./mainImages/Project1.png",
        nome: "Carsh",
        paragrafo: "Carsh é um site de aluguel de carros de luxo que fez parte de um projeto pessoal onde testei meus conhecimentos de design para um publico de nicho.",
        link: "https://heitorteixeirademenezes.github.io/personalProjects/Carsh/public/index.html"
    },
    {
        imagem: "./mainImages/Project2.png",
        nome: "Portifolio",
        paragrafo: "Criei meu portfólio web para mostrar meus projetos, habilidades e experiências como desenvolvedor front-end. Ele tem um design moderno, é responsivo e inclui seções como sobre mim, projetos, contato e links para minhas redes.",
        link: "https://heitorteixeirademenezes.github.io/Portfolio/main.html"
    }
]
const nomeProjeto = document.querySelector("#nomeProjeto")
const paragrafoProjeto = document.querySelector("#paragrafoProjeto")
const imagemProjeto = document.querySelector("#imagemProjeto")

let carregarProjeto =  function(){
    imagemProjeto.src = objProjects[0].imagem
    imagemProjeto.dataset.link = objProjects[0].link
    paragrafoProjeto.innerHTML = objProjects[0].paragrafo
    nomeProjeto.innerHTML = objProjects[0].nome
}
carregarProjeto()
let projetoAtual = 1
let trocarProjeto = function(){
    if(projetoAtual + 1 <= objProjects.length){
        projetoAtual++
        imagemProjeto.src = objProjects[projetoAtual - 1].imagem
        imagemProjeto.dataset.link = objProjects[projetoAtual - 1].link
        paragrafoProjeto.innerHTML = objProjects[projetoAtual - 1].paragrafo
        nomeProjeto.innerHTML = objProjects[projetoAtual - 1].nome
    }else{
        projetoAtual = 1
        imagemProjeto.dataset.link = objProjects[projetoAtual - 1].link
        imagemProjeto.src = objProjects[projetoAtual - 1].imagem
        paragrafoProjeto.innerHTML = objProjects[projetoAtual - 1].paragrafo
        nomeProjeto.innerHTML = objProjects[projetoAtual - 1].nome
    }
}
let arrowRigth = document.querySelector("#arrowRigth")
arrowRigth.addEventListener("click", function(){
    trocarProjeto()
})

imagemProjeto.addEventListener("click", function(){
    const link = imagemProjeto.dataset.link;
    if (link) {
        window.open(link);  // Abre o link em uma nova aba
    } else {
        console.error("Link não encontrado!");
    }
})

const menuButton = document.querySelector("#menuButton")
const navMenu = document.querySelector(".navMenu")
const xButton = document.querySelector("#xButton")
menuButton.addEventListener("click", function(){
    navMenu.style.display = "block"
})
xButton.addEventListener("click", function(){
    navMenu.style.display = "none"
})

let navMenuDesktop = document.querySelectorAll("nav li")
let navMenuPhone = document.querySelectorAll(".navMenu li")
navMenuDesktop[0].addEventListener("click", function(){
    document.getElementById("sobreMim").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
})
navMenuDesktop[1].addEventListener("click", function(){
    document.getElementById("habilidades").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
})
navMenuDesktop[2].addEventListener("click", function(){
    document.getElementById("projetos").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
})
navMenuPhone[0].addEventListener("click", function(){
    document.getElementById("sobreMim").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
})
navMenuPhone[1].addEventListener("click", function(){
    document.getElementById("habilidades").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
})
navMenuPhone[2].addEventListener("click", function(){
    document.getElementById("projetos").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
})
