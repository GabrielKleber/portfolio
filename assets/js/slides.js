let count;

function show_modal(id) {
    document.querySelector("div#" + id).style.display = "flex";
    document.querySelector("div#" + id + " > div.slider > div.first").style.marginLeft = "0%";
    count = 0;
}

function close_modal(id) {
    document.querySelector("div#" + id).style.display = "none";
}

function pass_slide(id) {
    let first_slide = document.querySelector("div#" + id + " > div.slider > div.first");
    if (id === "fynder" && count > 8) {
        count = 0;
        first_slide.style.marginLeft = "0%";
    } else if (id === "automind" && count > 8) {
        count = 0;
        first_slide.style.marginLeft = "0%";
    } else if (id === "lista" && count > 8) {
        count = 0;
        first_slide.style.marginLeft = "0%";
    } else {
        count ++;
        first_slide.style.marginLeft = -(100 * count) + "%";
    }
}

function back_slide(id) {
    let first_slide = document.querySelector("div#" + id + " > div.slider > div.first");
    count --;
    if (id === "fynder" && count < 1 && count != 0) {
        count = 9;
    } else if (id === "automind" && count < 1 && count != 0) {
        count = 9;
    } else if (id === "lista" && count < 1 && count != 0) {
        count = 9;
    }
    first_slide.style.marginLeft = -(100 * count) + "%";
}