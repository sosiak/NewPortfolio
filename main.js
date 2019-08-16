const navFixed = document.querySelector("nav");
const navIcon = document.querySelector(".nav-icon");
const menuLink = document.querySelectorAll(".menu-link");
const menuA = document.querySelectorAll(".menu-item a");
const firstSpan = document.querySelector("#first");
const secondSpan = document.querySelector("#second");
const thirdSpan = document.querySelector("#third");
const socialMediaIcons = document.querySelectorAll(".fab");


//menu fixed
let flagFixed = false;
const fixedNav = () => {
    const logoImage = document.querySelector(".logo");
    const windowHeight = window.innerHeight;
    const ulMenuHeight = document.querySelector(".menu").clientHeight;
    const backgroundDiv = document.querySelector(".backgroundToFixedNav");
    const menu = document.querySelector(".menu");
    const menuSpan = document.querySelectorAll(".nav-icon span");



    if (document.documentElement.scrollTop > windowHeight && window.innerWidth > 767) {
        logoImage.setAttribute("src", "Images/logoBlack.png");
        if (flagFixed == false) {
            logoImage.classList.toggle("logoFixed");
            menu.classList.toggle("menuFixed");
            menuSpan.forEach((e) => {
                e.classList.toggle("spanFixed");
            })
            menuA.forEach((e) => {
                e.classList.toggle("linkFixed");
            })
        }
        flagFixed = true;
        backgroundDiv.style.height = `55px`;
        backgroundDiv.style.display = "block";
    } else {
        logoImage.setAttribute("src", "Images/logo.png");
        if (flagFixed == true) {
            logoImage.classList.toggle("logoFixed");
            backgroundDiv.style.height = "0px";
            menu.classList.toggle("menuFixed");
            menuSpan.forEach((e) => {
                e.classList.toggle("spanFixed");
            })
            menuA.forEach((e) => {
                e.classList.toggle("linkFixed");
            })
        }
        flagFixed = false;
    }

}
document.addEventListener("scroll", fixedNav);




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
const words = ["tu Sławomir ", "tu SIOFO ", "oto mój mały świat . . . ", ];


let i = 0;
let indexLetter = 0;
let timer;
let flag = true;

const typingEffect = () => {
    let word = words[i].split("");
    const loopTyping = () => {
        if (word.length > 0) {
            spanDynamicText.textContent += word.shift();
        } else {
            deletingEffect();
            return false;
        };
        timer = setTimeout(loopTyping, 300);
    };
    loopTyping();
};

const deletingEffect = () => {
    let word = words[i].split("");
    const loopDeleting = () => {
        if (word.length > 0) {
            word.pop();
            spanDynamicText.textContent = word.join("");
        } else {
            if (words.length > (i + 1)) {
                i++;
            } else {
                i = 0;
            };
            typingEffect();
            return false;
        };
        timer = setTimeout(loopDeleting, 100);
    };
    setTimeout(loopDeleting, 2000);
};

typingEffect();

//

// cursor Animation
const cursorVisibility = () => {
    spanCursor.classList.toggle("active");
}

setInterval(cursorVisibility, 700);
//

const allHrefs = document.querySelectorAll('[href^="#"]');
const allHrefsArray = Array.prototype.slice.call(allHrefs);
allHrefsArray.forEach((item) => {
    item.addEventListener("click", (e) => {
        let target = item.getAttribute('href');
        // e.preventDefault();
    })
})