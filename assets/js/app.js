function copyEmail() {
    navigator.clipboard.writeText("gabrielklebern@gmail.com").then(() => {
        alert("Email Copiado");
    })
}