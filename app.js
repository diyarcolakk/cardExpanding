const myCardList = document.querySelectorAll(".card")
const panel1 = document.querySelector(".panel1")

myCardList.forEach(element => {
    element.addEventListener("click", function () {
        removeActive()
        element.classList.add("activex")
    })
});
function removeActive() {
    myCardList.forEach(element => {
        element.classList.remove("activex")
    })
}

