// Sidemenu show hide code

const sideMenu = document.getElementById("sideMenu");

function openMenu(){
    sideMenu.style.transform = 'translateX(-16rem)';
}

function hideMenu(){
    sideMenu.style.transform = 'translateX(16rem)';
}