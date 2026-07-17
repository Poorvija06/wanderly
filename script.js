function login(event) {

    event.preventDefault();

    document.getElementById("successPopup").classList.add("show");

    setTimeout(closePopup, 3000);

}

function closePopup() {

    document.getElementById("successPopup").classList.remove("show");

    window.location.href = "../index.html";

}
window.onload = function(){

    setTimeout(function(){

        document.getElementById("loader").style.display="none";

        document.getElementById("content").style.display="block";

    },2000);

}
