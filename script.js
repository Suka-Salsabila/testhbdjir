document.getElementById("openLetter").addEventListener("click", function() {
    document.querySelector(".letter").style.top = "-180px";
    document.querySelector(".flap").style.transform = "rotateX(180deg)";
    document.getElementById("openLetter").classList.add("hidden");
    document.getElementById("closeLetter").classList.remove("hidden");
});

document.getElementById("closeLetter").addEventListener("click", function() {
    document.querySelector(".letter").style.top = "100%";
    document.querySelector(".flap").style.transform = "rotateX(0deg)";
    document.getElementById("openLetter").classList.remove("hidden");
    document.getElementById("closeLetter").classList.add("hidden");
});

document.getElementById("loveButton").addEventListener("click", function() {
    document.getElementById("music").play();
});
