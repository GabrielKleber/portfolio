let newX_about = 0, newY_about = 0, startX_about = 0, startY_about = 0;
let newX_projects = 0, newY_projects = 0, startX_projects = 0, startY_projects = 0;
let newX_softskills = 0, newY_softskills = 0, startX_softskills = 0, startY_softskills = 0;
let newX_contact = 0, newY_contact = 0, startX_contact = 0, startY_contact = 0;
let z_index = 2;

function show(id) {
    document.querySelector("section#" + id).style.display = "block";
    document.querySelector("section#" + id).style.zIndex = z_index;
    z_index ++;
}

function close_window(id) {
    document.querySelector("section#" + id).style.display = "none";
}

let about_card = document.querySelector("section#about");
let projects_card = document.querySelector("section#projects");
let softskills_card = document.querySelector("section#softskills");
let contact_card = document.querySelector("section#contact");

about_card.addEventListener("mousedown", mouseDown_about);
projects_card.addEventListener("mousedown", mouseDown_projects);
softskills_card.addEventListener("mousedown", mouseDown_softskills);
contact_card.addEventListener("mousedown", mouseDown_contact);

// Mouse Down Start

function mouseDown_about(e) {
    startX_about = e.clientX;
    startY_about = e.clientY;
    
    about_card.style.zIndex = z_index;
    z_index ++;

    document.addEventListener('mousemove', mouseMove_about);
    document.addEventListener('mouseup', mouseUp_about);
}

function mouseDown_projects(e) {
    startX_projects = e.clientX;
    startY_projects = e.clientY;

    projects_card.style.zIndex = z_index;
    z_index ++;

    document.addEventListener('mousemove', mouseMove_projects);
    document.addEventListener('mouseup', mouseUp_projects);
}

function mouseDown_softskills(e) {
    startX_softskills = e.clientX;
    startY_softskills = e.clientY;

    softskills_card.style.zIndex = z_index;
    z_index ++;

    document.addEventListener('mousemove', mouseMove_softskills);
    document.addEventListener('mouseup', mouseUp_softskills);
}

function mouseDown_contact(e) {
    startX_contact = e.clientX;
    startY_contact = e.clientY;

    contact_card.style.zIndex = z_index;
    z_index ++;

    document.addEventListener('mousemove', mouseMove_contact);
    document.addEventListener('mouseup', mouseUp_contact);
}

// Mouse Down End

// Mouse Move Start

function mouseMove_about(e) {
    newX_about = startX_about - e.clientX;
    newY_about = startY_about - e.clientY;

    startX_about = e.clientX;
    startY_about = e.clientY;
    about_card.style.top = (about_card.offsetTop - newY_about) + "px";
    about_card.style.left = (about_card.offsetLeft - newX_about) + "px";
}

function mouseMove_projects(e) {
    newX_projects = startX_projects - e.clientX;
    newY_projects = startY_projects - e.clientY;

    startX_projects = e.clientX;
    startY_projects = e.clientY;
    projects_card.style.top = (projects_card.offsetTop - newY_projects) + "px";
    projects_card.style.left = (projects_card.offsetLeft - newX_projects) + "px";
}

function mouseMove_softskills(e) {
    newX_softskills = startX_softskills - e.clientX;
    newY_softskills = startY_softskills - e.clientY;

    startX_softskills = e.clientX;
    startY_softskills = e.clientY;
    softskills_card.style.top = (softskills_card.offsetTop - newY_softskills) + "px";
    softskills_card.style.left = (softskills_card.offsetLeft - newX_softskills) + "px";
}

function mouseMove_contact(e) {
    newX_contact = startX_contact - e.clientX;
    newY_contact = startY_contact - e.clientY;

    startX_contact = e.clientX;
    startY_contact = e.clientY;
    contact_card.style.top = (contact_card.offsetTop - newY_contact) + "px";
    contact_card.style.left = (contact_card.offsetLeft - newX_contact) + "px";
}

// Mouse Move End

// Mouse Up Start

function mouseUp_about(e) {
    document.removeEventListener('mousemove', mouseMove_about);
}

function mouseUp_projects(e) {
    document.removeEventListener('mousemove', mouseMove_projects);
}

function mouseUp_softskills(e) {
    document.removeEventListener('mousemove', mouseMove_softskills);
}

function mouseUp_contact(e) {
    document.removeEventListener('mousemove', mouseMove_contact);
}

// Mouse Up End