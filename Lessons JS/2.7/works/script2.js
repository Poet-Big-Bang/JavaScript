console.log("script funguje")

const form = document.querySelector(".main-form")

form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log("formular byl odeslan.")
    console.log(event.target.elements.jmeno.value);
    console.log(event.target.elements.heslo.value);
    console.log(event.target.elements.email.value);
})