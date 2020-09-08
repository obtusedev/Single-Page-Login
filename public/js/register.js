//checks if password enter matches
function check() {
    let submit = document.getElementById("submit");
    submit.setAttribute("disabled", "");
    let pwd = document.getElementById("password").value;
    let pwd_c = document.getElementById("confirm-password").value;
    if (pwd === pwd_c) {
        submit.removeAttribute("disabled");
    }
}