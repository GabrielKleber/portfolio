function copyEmail() {
    let divCopy = document.querySelector("#email > abbr > .copy");
    navigator.clipboard.writeText("gabrielklebern@gmail.com").then(() => {
        setTimeout(() => {
            divCopy.innerHTML = "<i class='bi bi-clipboard'></i>";
        }, 500);
        divCopy.innerHTML = "<i class='bi bi-check2-all'></i>";
    })
}