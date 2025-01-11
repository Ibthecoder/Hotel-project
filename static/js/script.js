// Navbar :
const menuBar = document.querySelector("#menu-Box");
const navBar_List = document.querySelector(".Nav-links");

menuBar.addEventListener("click", ()=>{
    navBar_List.classList.toggle("active");
})


// Carousel Element::
const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const Navbar = document.querySelector(".Navbar");
let currentSlide = 0;


// let me update My Carousel position::
const updateSlidePosition = function(){
    slides.forEach((slides, index) =>{
         slides.classList.remove("active");
         if(index === currentSlide) slides.classList.add("active");
    }) ;
}


// let me add Event Listener for button next::
nextButton.addEventListener("click" , ()=>{
    // if we have a remainder:
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlidePosition();
});

// let me add Event Listener for button prev::
prevButton.addEventListener("click", ()=>{
    currentSlide = (currentSlide -1 + slides.length) % slides.length;
    updateSlidePosition();
})



// Add scroll  for navbar-start::
window.addEventListener("scroll",()=>{
    if(window.scrollY > 100){
        Navbar.classList.add("scrolled");
    } else{
        Navbar.classList.remove("scrolled");
    }
});

updateSlidePosition();

// Add scroll  for navbar-end::

// Azure-extral-service-swiper-start:
var swiper = new Swiper(".mySwiper", {

    // slidesPerView: 3,
    pagination: {
      el: ".swiper-pagination",
      type: 'bullets',
      clickable: true,
      dynamicBullets:true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

// Azure-extral-service-swiper-end:


// Azure-About-us-carousel-comment-start:.:
const azureCommentCarousel = document.querySelector(".customer-comment-carousel");
const azureCommentArrowBtn = document.querySelectorAll("#Customers-comment-wrapper i");
const firstCardWith = azureCommentCarousel.querySelector(".customer-card").offsetWidth;

// Add event listeners for the arrow buttons to scroll the carousel left and right::
azureCommentArrowBtn.forEach(btn =>{
  btn.addEventListener("click", () =>{
    azureCommentCarousel.scrollLeft += btn.id === "left" ? - firstCardWith : firstCardWith 

  })
});

    // console.log("Hello");



 


