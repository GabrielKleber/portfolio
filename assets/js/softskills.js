function show_description(div) {
    let softskill = div.parentElement;
    let description = softskill.children[1];
    if (description.style.display == "block") {
        description.style.display = "none";
        div.children[0].children[0].classList.add("bi-caret-down");
        div.children[0].children[0].classList.remove("bi-caret-up");
    } else {
        description.style.display = "block";
        div.children[0].children[0].classList.add("bi-caret-up");
        div.children[0].children[0].classList.remove("bi-caret-down");
    }
}