const usernav = document.getElementById("usernav");
const close = document.getElementById("close");

let username = JSON.parse(localStorage.getItem("user"));

if (username != null) {
    usernav.innerHTML =
        '<a href="#" id="close" class="nav-item nav-link active">' +
        username[0].felhasznalo +
        "</a>";
} else {
    usernav.innerHTML =
        '<a href="index.html" id="close" class="nav-item nav-link active">Belépés</a>';
}
close.addEventListener("click", function () {
    localStorage.clear("user");
    location.href = "index.html";
});
//console.log(username);
