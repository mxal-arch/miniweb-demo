// Abrir modal
const btns = [document.getElementById("btnCita"), document.getElementById("btnCita2")];
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");


btns.forEach(btn => btn.addEventListener("click", () => {
modal.style.display = "flex";
}));


// Cerrar modal
closeModal.addEventListener("click", () => {
modal.style.display = "none";
});


// Cerrar haciendo click afuera
window.addEventListener("click", e => {
if (e.target === modal) modal.style.display = "none";
});


// Enviar formulario de contacto
const formCita = document.getElementById("formCita");
ormCita.addEventListener("submit", (e) => {
e.preventDefault();
alert("¡Cita enviada! Te contactaremos pronto.");
modal.style.display = "none";
});


// Form de contacto principal
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", (e) => {
e.preventDefault();
alert("Mensaje enviado. Te responderemos en pocos minutos.");
contactForm.reset();
});