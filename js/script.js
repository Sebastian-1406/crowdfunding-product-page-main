let nav = document.getElementById("nav");
let btn = document.querySelectorAll(".btn");
let inputRadio = document.querySelectorAll("[type=radio]");
let contenedor = document.querySelector(".select__modal");
let closeModal = document.querySelector(".select__modal-close");

//nav

const navHamburguesa = (e) => {
    let icono = document.getElementById("icon-hamburger");
    if(e.target == icono){
        nav.classList.toggle("nav-activo")
        if(nav.classList[1] == "nav-activo"){
            icono.src = "./images/icon-close-menu.svg";    
            document.querySelector("body").classList.add("fondo")
        }else{
            icono.src = "./images/icon-hamburger.svg";    
            document.querySelector("body").classList.remove("fondo");
        }
    }

}


//Select Plege
inputRadio.forEach(input => {
    input.addEventListener("click", () => {
        inputRadio.forEach(radio => {
            let elementoPadre = radio.parentNode.parentNode;
            if(radio.checked){
                elementoPadre.classList.add("card__plan-activo")
            }else{
                elementoPadre.classList.remove("card__plan-activo")
            }
        })
    })
})

const backProject = () => {
    if(contenedor.classList.length == 1){
        contenedor.classList.toggle("select__modal-activo");
        document.querySelector("body").classList.add("fondo")
    }else{
        document.querySelector("body").classList.remove("fondo")
        contenedor.classList.toggle("select__modal-activo");
    }
}
btn.forEach(btnProject => {
    btnProject.addEventListener("click", backProject);
})  

nav.addEventListener("click", navHamburguesa);
closeModal.addEventListener("click", backProject);