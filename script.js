const boxes = document.querySelectorAll(".box")

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

// Menu mobile
const menuBtn = document.querySelector(".navbar__menu")
const navItems = document.querySelector(".navbar-items")
menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active")
    navItems.classList.toggle("active")
})