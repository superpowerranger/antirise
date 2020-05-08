// // When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};

// // Get the header
// var header = document.getElementById("bottom-header");

// // Get the offset position of the navbar
// var sticky = header.offsetTop;

// // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("fixed-top");
//   } else {
//     header.classList.remove("fixed-top");
//   }
// }

function menu(){
  document.getElementById("header").classList.toggle("open");
}

$('.blog-carousel').owlCarousel({
  nav: true,
  loop:true,    
  autoplay:true,
  margin:20, 
  autoplayTimeout:4000,
  autoplayHoverPause:true,
  responsiveClass:true,
  responsive:{
      0:{
          items:1, 
      },
      768:{
          items:2, 
      },
      1200:{
          items:2
      },
  }
})

$(".num").counterUp({delay:10, time:1000});