document.querySelector("#sideMenu\\:openBtn").addEventListener("click", openSideMenu);
document.querySelector("#sideMenu\\:closeBtn").addEventListener("click", closeSideMenu);

function openSideMenu() {
    document.querySelector("#sideMenu\\:openBtn").style.opacity = "0";
    document.querySelector("#sideMenu").classList.add("open")
    document.querySelector("#content").style.marginLeft = "250px";
    document.querySelector("header").style.marginLeft = "250px";
}

function closeSideMenu() {
    document.querySelector("#sideMenu\\:openBtn").style.opacity = "1";
    document.querySelector("#sideMenu").classList.remove("open");
    document.querySelector("#content").style.marginLeft = "0";
    document.querySelector("header").style.marginLeft = "0";
}