const navtoggle = document.getElementById("navbartoggle");
const btn = document.getElementById("btntoggle");
const hamberger = document.getElementById("ham");
const close = document.getElementById("close");

function switchClass(x) {
    if (x.matches) {
        navtoggle.classList.add("card");
    } else {
        navtoggle.classList.remove("card");
    }
}
var x = window.matchMedia("(max-width: 550px)")
switchClass(x)
x.addListener(switchClass);

btn.addEventListener("click", changepic);
function changepic() {
    btn.classList.toggle("active");
    if (btn.classList.contains("active")) {
        hamberger.style.display = "none";
        close.style.display = "block";
    } else {
        close.style.display = "none";
        hamberger.style.display = "block";
    }
}