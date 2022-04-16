document.querySelector("#sideMenu\\:openBtn").addEventListener("click", openSideMenu);
document.querySelector("#sideMenu\\:closeBtn").addEventListener("click", closeSideMenu);

function openSideMenu() {
    document.querySelector("#sideMenu").classList.add("open")
    document.querySelector("#main").style.marginLeft = "250px";
}

function closeSideMenu() {
    document.querySelector("#sideMenu").classList.remove("open");
    document.querySelector("#main").style.marginLeft = "0";
}