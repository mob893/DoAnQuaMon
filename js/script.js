// Show boxes content 
const boxes = document.querySelectorAll(".box-border")
const posts = document.querySelectorAll(".post-container")

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
    posts.forEach((post) => {
        const postTop = post.getBoundingClientRect().top;
        if (postTop < trigger) {
            post.classList.add("show")
        } else {
            post.classList.remove("show")
        }
    })
}

window.addEventListener("scroll", checkBox)

// Header navbar
const header = document.querySelector(".header")
const headerNavbar = document.querySelector(".header-navbar")
window.addEventListener("scroll", function () {
    const headerBottom = header.getBoundingClientRect().bottom
    if (headerBottom < 0) {
        headerNavbar.classList.add("show")
    } else {
        headerNavbar.classList.remove("show")
    }
})

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

// Time Line
const timeLine = document.querySelector(".time-line")
const timeLineText = document.querySelectorAll(".time-line-text")
const textTitle = document.querySelectorAll(".text__title")
const textDesc = document.querySelectorAll(".text__description")
const textImg = document.querySelectorAll(".text__img")
const timeLineTextContainer = document.querySelectorAll(".time-line-text__container")
const textImgSource = document.querySelectorAll(".text__img-source")

function showTimeLine() {
    const trigger = window.innerHeight * 80 / 100

    const timeLineTop = timeLine.getBoundingClientRect().top
    if (timeLineTop < trigger) {
        timeLine.classList.add("show")
    } else {
        timeLine.classList.remove("show")
    }

    textTitle.forEach((text) => {
        const textTop = text.getBoundingClientRect().top
        if (textTop < trigger) {
            text.classList.add("show")
        } else {
            text.classList.remove("show")
        }
    })

    textDesc.forEach((text) => {
        const textDescTop = text.getBoundingClientRect().top
        if (textDescTop < trigger) {
            text.classList.add("show")
        } else {
            text.classList.remove("show")
        }
    })

    textImg.forEach((img) => {
        const textImgTop = img.getBoundingClientRect().top
        if (textImgTop < trigger) {
            img.classList.add("show")
        } else {
            img.classList.remove("show")
        }
    })

    timeLineText.forEach((element) => {
        const timeLineTextTop = element.getBoundingClientRect().top
        if (timeLineTextTop < trigger) {
            element.classList.add("show")
        } else {
            element.classList.remove("show")
        }
    })

    timeLineTextContainer.forEach((element) => {
        const timeLineTextContainerTop = element.getBoundingClientRect().top
        if (timeLineTextContainerTop < trigger) {
            element.classList.add("show")
        } else {
            element.classList.remove("show")
        }
    })

    textImgSource.forEach((element) => {
        const textImgSourceTop = element.getBoundingClientRect().top
        if (textImgSourceTop < trigger) {
            element.classList.add("show")
        } else {
            element.classList.remove("show")
        }
    })


}
window.addEventListener("scroll", showTimeLine)



