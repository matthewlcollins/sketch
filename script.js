const container = document.querySelector(".container")
const button = document.querySelector(".button")
const slideRange = document.getElementById("myRange")

function onStartUp() {
    document.getElementById("myRange").value = 16
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

function clearBoxes() {
    while (container.firstChild) {
        container.firstChild.remove()
    }
}

button.addEventListener("click", () => {
    const divChildren = document.querySelectorAll(".box")
    for (i = 0; i < divChildren.length; i++) {
        divChildren[i].style.backgroundColor = "white"
    }
})

function slider() {
    clearBoxes()
    const multiNum = document.getElementById("myRange").value
    document.getElementById("boxnum").textContent = multiNum + " x " + multiNum + " grid"
    for (i = 0; i < (multiNum*multiNum); i++) {
        const box = document.createElement("div")
        box.classList.add("box")
        box.style.cssText = `border: 2px solid; background-color: white; height: ${(800/multiNum)}px; aspect-ratio: 1`
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = "black"
        })
        container.appendChild(box)
    }
}

slideRange.addEventListener("input", slider)

