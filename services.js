
function cardSwitching() {
    var card1 = document.querySelector("#about-card-1")
    var card2 = document.querySelector("#about-card-2")
    var card3 = document.querySelector("#about-card-3")

    console.log("start switch")



    card1.style.display = "flex";
    card2.style.display = "none";
    card3.style.display = "none";



    setTimeout(() => {


        card1.style.display = "none";
        card2.style.display = "flex";
        card3.style.display = "none";

    }, 3000)




    setTimeout(() => {


        card1.style.display = "none";
        card2.style.display = "none";
        card3.style.display = "flex";

    }, 6000)

}




document.addEventListener('DOMContentLoaded', function () {

    setInterval(cardSwitching, 9000);

    window.onscroll = () => {
        console.log("scrolling detected")
        if (window.scrollY >= window.innerHeight) {


            document.querySelector('.call').style.top = '0';

        }
        else {
            document.querySelector('.call').style.top = '90vh';
        }
    }

    document.querySelector("#nav-burger").onclick = function () {

        let navBurger = document.querySelector("#nav-burger-menu")

        if (navBurger.style.display === "none") {
            navBurger.style.display = "flex";
        }
        else {
            navBurger.style.display = "none";
        }

    }

    window.addEventListener("resize", function () {
        if (window.matchMedia("(min-width: 801px)").matches) {
            console.log("Screen width is at least 500px");
            document.querySelector("#nav-menu-burger").style.display = "none";
        }

    });






})