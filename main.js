window.addEventListener("load", () => {
    //remove overlay and start animation
    const overlayStart = document.querySelector(".overlay-all-window");
    const imgStart = document.querySelector(".overlay-all-window img");
    const leftStart = document.querySelector(".left");
    const rightStart = document.querySelector(".right");
    const loadingText = document.querySelector(".overlay-all-window p")
    setTimeout(() => {
        loadingText.style.opacity = "0";
    }, 300);
    setTimeout(() => {
        imgStart.style.opacity = "0";
    }, 500);
    setTimeout(() => {
        imgStart.style.display = "none";
        imgStart.style.display = "none";
        leftStart.style.width = "0";
        rightStart.style.width = "0";
    }, 1000);
    setTimeout(() => {
        overlayStart.style.display = "none";
        console.log("finish");
    }, 1700);

    //

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


    //menu listItems colors

    const startListItem = document.querySelector("#startListItem");
    const aboutMeListItem = document.querySelector("#aboutMeListItem");
    const skillsListItem = document.querySelector("#skillsListItem");
    const portfolioListItem = document.querySelector("#portfolioListItem");
    const contactListItem = document.querySelector("#contactListItem");

    //sections scrollTop parameters
    const startScrollTop = document.querySelector(".header").clientHeight;
    const aboutMeScrollTop = startScrollTop + (document.querySelector(".about-me").clientHeight) - 60;
    const skillsScrollTop = aboutMeScrollTop + (document.querySelector(".skills").clientHeight) - 60;
    const portfolioScrollTop = skillsScrollTop + (document.querySelector(".portfolio").clientHeight) - 60;
    const contactScrollTop = portfolioScrollTop + (document.querySelector(".contact").clientHeight);


    document.addEventListener("scroll", () => {
        if (document.documentElement.scrollTop <= startScrollTop) {
            startListItem.className = "active";
            aboutMeListItem.className = "";
            skillsListItem.className = "";
            portfolioListItem.className = "";
            contactListItem.className = "";
        } else if (document.documentElement.scrollTop > startScrollTop && document.documentElement.scrollTop <= aboutMeScrollTop) {
            startListItem.className = "linkFixed";
            aboutMeListItem.className = "active linkFixed";
            skillsListItem.className = "linkFixed";
            portfolioListItem.className = "linkFixed";
            contactListItem.className = "linkFixed";
        } else if (document.documentElement.scrollTop > aboutMeScrollTop && document.documentElement.scrollTop <= skillsScrollTop) {
            startListItem.className = "linkFixed";
            aboutMeListItem.className = "linkFixed";
            skillsListItem.className = "active linkFixed";
            portfolioListItem.className = "linkFixed";
            contactListItem.className = "linkFixed";
        } else if (document.documentElement.scrollTop > skillsScrollTop && document.documentElement.scrollTop < portfolioScrollTop) {
            startListItem.className = "linkFixed";
            aboutMeListItem.className = "linkFixed";
            skillsListItem.className = "linkFixed";
            portfolioListItem.className = "active linkFixed";
            contactListItem.className = "linkFixed";
        } else {
            startListItem.className = "linkFixed";
            aboutMeListItem.className = "linkFixed";
            skillsListItem.className = "linkFixed";
            portfolioListItem.className = "linkFixed";
            contactListItem.className = "active linkFixed";
        }
    })

    //

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
                if (window.innerWidth > 767)
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
    const typingText = () => {
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

        // cursor Animation
        const cursorVisibility = () => {
            spanCursor.classList.toggle("active");
        }

        setInterval(cursorVisibility, 700);
        //
    }

    const spanDynamicText = document.querySelector(".dynamic-text");
    const spanCursor = document.querySelector(".cursor");
    let words = [];

    if (window.innerWidth > 576) {
        words = ["tu Sławomir ", "tu SIOFO ", "oto mój mały świat . . . "];
        typingText();
    } else {
        words = ["tu Sławomir ", "tu SIOFO "];
        typingText();
    }

    //



    // overlay play and git animation

    const allOverlays = document.querySelectorAll(".overlay");
    const allOverlaysArray = [].slice.call(allOverlays);
    const allGitButtons = document.querySelectorAll(".code");
    const allGitButtonsArray = [].slice.call(allGitButtons);

    if (window.innerWidth > 767) {
        allOverlaysArray.forEach((item, index) => {
            item.addEventListener("mouseover", () => {
                allGitButtonsArray[index].style.opacity = "1";
                allGitButtonsArray[index].style.left = "160px";

            })
        })
        allOverlaysArray.forEach((item, index) => {
            item.addEventListener("mouseout", () => {
                allGitButtonsArray[index].style.opacity = "0";
                allGitButtonsArray[index].style.left = "40px";
            })
        })
    }

    //portfolio slides
    const allProjectsSite = document.querySelector(".all-projects");
    const allSitesSite = document.querySelector(".all-sites");
    const allApplicationSite = document.querySelector(".all-application");
    const allProjectsNav = document.querySelector("#allProjects")
    const allWebsiteNav = document.querySelector("#allWebsites");
    const allApplicationNav = document.querySelector("#allApplication");

    allProjectsNav.addEventListener("click", () => {
        allProjectsSite.style.display = "block";
        allSitesSite.style.display = "none";
        allSitesSite.style.opacity = "0";
        allApplicationSite.style.display = "none";
        allApplicationSite.style.opacity = "0";
        setTimeout(() => {
            allProjectsSite.style.opacity = "1";
        }, 100);
        allProjectsNav.className = "nav-li-element active";
        allWebsiteNav.className = "nav-li-element";
        allApplicationNav.className = "nav-li-element";

    })

    allWebsiteNav.addEventListener("click", () => {
        allProjectsSite.style.display = "none";
        allSitesSite.style.display = "block";
        allProjectsSite.style.opacity = "0";
        allApplicationSite.style.display = "none";
        allApplicationSite.style.opacity = "0";
        setTimeout(() => {
            allSitesSite.style.opacity = "1";
        }, 100);
        allProjectsNav.className = "nav-li-element";
        allWebsiteNav.className = "nav-li-element active";
        allApplicationNav.className = "nav-li-element";

    })

    allApplicationNav.addEventListener("click", () => {
        allProjectsSite.style.display = "none";
        allApplicationSite.style.display = "block";
        allProjectsSite.style.opacity = "0";
        allSitesSite.style.display = "none";
        allSitesSite.style.opacity = "0";
        setTimeout(() => {
            allApplicationSite.style.opacity = "1";
        }, 100);
        allProjectsNav.className = "nav-li-element";
        allWebsiteNav.className = "nav-li-element";
        allApplicationNav.className = "nav-li-element active";

    })
    //
})