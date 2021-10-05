let nav = document.getElementById("nav");
let btnProject = document.getElementById("back-project");
let btn = document.querySelectorAll(".select-reward");
let inputRadio = document.querySelectorAll("[type=radio]");
let contenedor = document.querySelector(".select__modal");
let closeModal = document.querySelector(".select__modal-close");
let succesModal = document.querySelector(".success__modal");


const navHamburguesa = (e) => {
  let icono = document.getElementById("icon-hamburger");
  if (e.target == icono) {
    nav.classList.toggle("nav-activo");
    if (nav.classList[1] == "nav-activo") {
      icono.src = "./images/icon-close-menu.svg";
      document.querySelector("body").classList.add("fondo");
    } else {
      icono.src = "./images/icon-hamburger.svg";
      document.querySelector("body").classList.remove("fondo");
    }
  }
};

inputRadio.forEach((input) => {
  input.addEventListener("click", () => {
    inputRadio.forEach((radio) => {
      let elementoPadre = radio.parentNode.parentNode;
      if (radio.checked) {
        elementoPadre.classList.add("card__plan-activo");
      } else {
        elementoPadre.classList.remove("card__plan-activo");
      }
    });
  });
});

const backProject = () => {
  inputRadio.forEach((input) => {
    input.checked = false;
    let caja = input.parentElement.parentElement;
    caja.classList.remove("card__plan-activo");
  });
  contenedor.classList.toggle("select__modal-activo");
  document.querySelector("body").classList.toggle("fondo");
};

btn.forEach((selectReward) => {
  selectReward.addEventListener("click", (e) => {
    let inputSelect = document.getElementById(`${e.target.name}`);
    inputSelect.checked = true;
    let caja = inputSelect.parentElement.parentElement;
    caja.classList.add("card__plan-activo");
    contenedor.classList.toggle("select__modal-activo");
    document.querySelector("body").classList.toggle("fondo");
  });
})

contenedor.addEventListener("click", (e) => {
    if(e.target.type == "submit"){
        document.querySelector(".select__modal-activo").classList.remove("select__modal-activo");
        document.querySelector(".success__modal").classList.add("success__modal-activo");
    }
})
succesModal.addEventListener("click", (e) => {
    if(e.target.type == "submit"){
        document.querySelector(".success__modal").classList.remove("success__modal-activo");
        document.querySelector("body").classList.remove("fondo")
    }
})


nav.addEventListener("click", navHamburguesa);
btnProject.addEventListener("click", backProject);
closeModal.addEventListener("click", backProject);