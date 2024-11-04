let bars = document.getElementById("bars")
let hiddenItems = document.getElementById("hiddenItems")

bars.addEventListener("click", function (){
    hiddenItems.classList.toggle("hidden")
    hiddenItems.classList.toggle("active")
})