// Show boxes content 
const boxes = document.querySelectorAll(".box-border")

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

// Show content title
const contentTitle = document.querySelector(".content__title")
function showContentTitle() {
    const trigger = window.innerHeight * 90 / 100
    const titleTop = contentTitle.getBoundingClientRect().top
    if (titleTop < trigger && titleTop > 0) {
        contentTitle.classList.add("show")
    } else {
        contentTitle.classList.remove("show")
    }
}

window.addEventListener("scroll", showContentTitle)
