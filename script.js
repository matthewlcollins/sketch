const container = document.querySelector(".container")
const button = document.querySelector(".button")

function onStartUp() {
    for (i = 0; i < (16*16); i++) {
        const box = document.createElement("div")
        box.classList.add("box")
        box.style.cssText = `border: 2px solid; background-color: white; height: ${(800/16)}px; aspect-ratio: 1`
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = "black"
        })
        container.appendChild(box)
    }
}

onStartUp();


button.addEventListener("click", () => {
    const divChildren = document.querySelectorAll(".box")
    for (i = 0; i < divChildren.length; i++) {
        divChildren[i].style.backgroundColor = "white"
    }
})
