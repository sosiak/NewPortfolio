const navIcon = document.querySelector(".nav-icon");
const menuLink = document.querySelectorAll(".menu-link");
const menuA = document.querySelectorAll(".menu-item a");
const firstSpan = document.querySelector("#first");
const secondSpan = document.querySelector("#second");
const thirdSpan = document.querySelector("#third");
const socialMediaIcons = document.querySelectorAll(".fab");




//menu

let flagaMenu = true;
navIcon.addEventListener("mouseover", () => {
    if (navIcon.className == "nav-icon") {
        thirdSpan.style.width = "100%";
        thirdSpan.style.transition = ".2s ease-in-out";
    }
})
navIcon.addEventListener("mouseout", () => {
    if (navIcon.className == "nav-icon") {
        thirdSpan.style.width = "60%";
        thirdSpan.style.transition = ".2s ease-in-out";
    }
})

const navIconAnimation = () => {
    if (navIcon.className == "nav-icon active") {
        navIcon.className = "nav-icon";
        // icon animation
        firstSpan.style.transform = "";
        firstSpan.style.transformOrigin = "";
        firstSpan.style.left = "";
        firstSpan.style.width = "100%";
        secondSpan.style.width = "100%";
        thirdSpan.style.transform = "";
        thirdSpan.style.transformOrigin = "";
        thirdSpan.style.left = "";
        thirdSpan.style.width = "60%";
        flagaMenu = true;
        console.log(flagaMenu);
        // menuLink animation
        menuLink.forEach((e) => {
            setTimeout(() => {
                menuA.forEach((e) => {
                    if (flagaMenu == true) {
                        e.style.display = "none";
                    }
                })
            }, 700);
            e.style.opacity = "0";
            e.style.transform = "matrix(1, 0, 0, 1, 50, 0)";
        })
    } else {
        // icon animation
        navIcon.className = "nav-icon active";
        firstSpan.style.width = "60%";
        firstSpan.style.transform = "rotate(45deg)";
        firstSpan.style.transformOrigin = "left center";
        firstSpan.style.left = "8px";
        secondSpan.style.width = "0";
        thirdSpan.style.width = "60%";
        thirdSpan.style.transition = "transform .2s ease-in-out";
        thirdSpan.style.transformOrigin = "left center";
        thirdSpan.style.transform = "rotate(-45deg)";
        thirdSpan.style.left = "8px";
        flagaMenu = false;
        console.log(flagaMenu);
        // menuLink animation
        menuLink.forEach((e) => {
            menuA.forEach((e) => {
                if (flagaMenu == false) {
                    e.style.display = "block";
                }
            })
            e.style.opacity = "1";
            e.style.transform = "matrix(1, 0, 0, 1, 0, 0)";
        })
    }
}

navIcon.addEventListener("click", navIconAnimation);

//slogans

const spanDynamicText = document.querySelector(".dynamic-text");
const spanCursor = document.querySelector(".cursor");
const slogans = ["tu SIOFO ", "tu Sławomir ", "oto mój mały świat . . . ", ];


let indexWord = 0;
let indexLetter = 0;
let flag = true;


const addLetter = () => {
    if (indexLetter >= 0 && flag == true) {
        spanDynamicText.textContent += slogans[indexWord][indexLetter];
    }
    indexLetter++;
    if (indexLetter == slogans[indexWord].length) {
        flag = false;
        setTimeout(() => {
            indexLetter = 0;
            indexWord++;
            spanDynamicText.textContent = "";
            flag = true;
            if (indexWord == slogans.length) {
                indexWord = 0;
            }
        }, 2000);

    }
}

setInterval(addLetter, 200);

const cursorVisibility = () => {
    spanCursor.classList.toggle("active");
}

setInterval(cursorVisibility, 700);
//