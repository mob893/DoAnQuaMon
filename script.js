// Show boxes content 
const boxes = document.querySelectorAll(".box-border")

function checkBox() {
    const trigger = window.innerHeight * 70 / 100;
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
const contentTitle = document.querySelectorAll(".content__title")
const contentTitleBox = document.querySelectorAll(".content__title-box")
function showContentTitle() {
    const trigger = window.innerHeight * 90 / 100
    contentTitle.forEach((title) => {
        const titleTop = title.getBoundingClientRect().top
        if (titleTop < trigger && titleTop > 0) {
            title.classList.add("show")
        } else {
            title.classList.remove("show")
        }
    })

    const trigger1 = window.innerHeight * 85 / 100
    contentTitleBox.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top
        if (boxTop < trigger1 && boxTop > 0) {
            box.classList.add("show")
        } else {
            box.classList.remove("show")
        }
    })
}

window.addEventListener("scroll", showContentTitle)
