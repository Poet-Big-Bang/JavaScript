console.log("jede")

const input = document.getElementById("novy-ukol");
const button = document.querySelector(".create");
const list = document.querySelector(".seznam-ukolu");

function vytvorNovyUkol(popisUkolu){
    const li = document.createElement("li")
    li.classList.add("polozka")

    const div = document.createElement("div")
    const span = document.createElement("span")
    span.textContent = popisUkolu
    const input = document.createElement("input")
    input.type = "checkbox"
    input.addEventListener("change", function(event){
        const target = event.target;
        const li = target.closest(".polozka")
        li.remove();
    })
    div.append(span)
    div.append(input)
    li.append(div)
    list.append(li);
}

button.addEventListener("click", function(){
    const ukol = input.value;
    input.value = ""
    console.log(ukol)
    vytvorNovyUkol(ukol)
})