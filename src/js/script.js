import { Carousel } from 'bootstrap'

let main__hamb = document.querySelector(".main__hamb")
let navMenu = document.querySelector(".main__bar-list")
let txtBox = document.querySelector(".main__text-box")

main__hamb.addEventListener("click", mobileMenu);

function mobileMenu() {
    main__hamb.classList.toggle("active");
    navMenu.classList.toggle("active");
    txtBox.classList.toggle("active");
}