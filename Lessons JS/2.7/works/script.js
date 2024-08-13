console.log("script funguje")
const input = document.querySelector(".main-input")
const paragraph = document.querySelector(".text")
const checkbox = document.querySelector(`[type="checkbox"]`) //так выбирается type у хтмл

input.addEventListener("input", function(event){
    const value = event.target.value;
    paragraph.textContent = `V policku je tento text: ${value}`;
})

input.addEventListener("change", function(event){
    const value = event.target.value;
    console.log (`V policku je tento text: ${value}`);
})

input.addEventListener("focus", function(){
    console.log (`prisel fokus`);
})

input.addEventListener("blur", function(){
    console.log (`prisel blur`);
})

checkbox.addEventListener("input", function(event){
    console.log(event.target.checked)
})