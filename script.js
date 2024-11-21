const boxes = document.querySelectorAll(".box");

function checkBox() {
    const trigger = 600;
    boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < trigger) {
            box.classList.add("show")
        } else {
            box.classList.remove("show")
        }
    })
}

window.addEventListener("scroll", checkBox)