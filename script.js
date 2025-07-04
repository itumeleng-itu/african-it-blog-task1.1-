const form = document.getElementById("myForm");
const fullname = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const updates = document.querySelector('input[name="updates"]:checked');

form.addEventListener("submit", function (e) {
    
    const fullname = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const updates = document.querySelector('input[name="updates"]:checked');

    if (fullname === "" || email === "" || !updates) {
        alert("Please enter your details correctly.");
    } else {
        alert("Sign-up successful, you will nou recieve updates everyting we upload content!");
    }
});
