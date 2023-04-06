/* VALIDACIÓN CAMPOS MODAL */

/* MAIL */

let validarMailModal = document.getElementById("inputMailModal");
let mensajeErrorMail = document.getElementById("errorMailInput");

validarMailModal.addEventListener("input", validacionMail);

function validacionMail() {
    let mailInput = validarMailModal.value.trim();
    let mailTipo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!mailTipo.test(mailInput)) {
        validarMailModal.style.borderColor = "red";
        mensajeErrorMail.innerHTML = "Wrong format. Should be an email adress";
        mensajeErrorMail.style.color = "red";
        mensajeErrorMail.style.display = "block";
        mensajeErrorMail.style.fontSize = "small";
    } else {
        validarMailModal.style.borderColor = "";
        mensajeErrorMail.innerHTML = "";
        mensajeErrorMail.style.display = "none";
    }
}

/* PASSWORD */

let validarPasswordModal = document.getElementById("inputPasswordModal");
let mensajeErrorPassword = document.getElementById("errorPasswordInput");

validarPasswordModal.addEventListener("input", validacionPassword);

function validacionPassword() {
    let passwordInput = validarPasswordModal.value.trim();
    let passwordTipo = /^(?=.*\w).{8,}$/;
    if (!passwordTipo.test(passwordInput)) {
        validarPasswordModal.style.borderColor = "red";
        mensajeErrorPassword.innerHTML = "Should have at least 8 characters";
        mensajeErrorPassword.style.color = "red";
        mensajeErrorPassword.style.display = "block";
        mensajeErrorPassword.style.fontSize = "small";
    } else {
        validarPasswordModal.style.borderColor = "";
        mensajeErrorPassword.innerHTML = "";
        mensajeErrorPassword.style.display = "none";
    }
}

/* ABRIR Y CERRAR MODAL */

let modal = document.getElementById("myModal");
let openModal = document.getElementById("modalAccess");
let closeModal = document.querySelector(".closeModal");

openModal.onclick = function () {
    modal.style.display = "flex";
    desplegarMenu();
}

closeModal.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/* MEDIA QUERY PARA LAS ANCLAS Y BOTONES DEL NAV AL HACER CLICK EN EL ICONO DE MENÚ */

let menuOpen = document.getElementById("menuIconNav");
let dropdown = document.querySelector(".dropdownNav");

let isMenuOpen = false;

menuOpen.addEventListener("click", desplegarMenu);

function desplegarMenu() {
    if (isMenuOpen) {
        dropdown.style.display = "none";
        isMenuOpen = false;
    } else {
        dropdown.style.display = "flex";
        isMenuOpen = true;
    }
}