const share = document.querySelector(".avatar_share-img");
const active = document.querySelector(".active");
const iconShare = document.getElementById("icon-share");

share.addEventListener("click", () => {
    active.classList.toggle("activated");
    share.classList.toggle("bg-color");
    iconShare.classList.toggle("bg-color");
});