const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

const forgotPasswordLink = document.getElementById("forgot-password-link");
const forgotPasswordModal = document.getElementById("forgot-password-modal");
const closeModal = document.getElementById("close-modal");
const sendRecovery = document.getElementById("send-recovery");

forgotPasswordLink.addEventListener("click", (e) => {
    e.preventDefault();
    forgotPasswordModal.style.display = "block";
});

closeModal.addEventListener("click", () => {
    forgotPasswordModal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === forgotPasswordModal) {
        forgotPasswordModal.style.display = "none";
    }
});

sendRecovery.addEventListener("click", () => {
    const email = document.getElementById("email-recovery").value;
    if (email) {
        alert(`E-mail de recuperação enviado para ${email}.`);
        forgotPasswordModal.style.display = "none";
    } else {
        alert("Por favor, insira um e-mail válido.");
    }
});

