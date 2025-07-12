const evilButton = document.getElementById("evilButton");
const skeleton = document.getElementById("skeleton");

skeleton.style.display = "none";

evilButton.addEventListener("click", event => {

    if(skeleton.style.display === "none") {
        skeleton.style.display = "block";
    }
    else{
        skeleton.style.display = "none";
    }
});
