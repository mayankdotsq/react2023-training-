//productlist slide//
$('.product-list-slide').owlCarousel({
  loop:true,
  navRewind: true,
  margin:30,
  nav:true,
  dots:false,
  thumbsPrerendered: true,
  autoplay:true,
responsive:{
  0:{
    items:1,
    slideBy: 1
  },
  480:{
    items:3,
    slideBy: 1
  },
  767:{
    items:4,
    slideBy: 1
  },
  992:{
    items:6,
    slideBy: 1
  },
  1200:{
    items:9,
    slideBy: 1
  }
 }
});


// AslideDown animation to Bootstrap dropdown when expanding.
$('.dropdown').hover(function(){
  $('.dropdown-toggle', this).trigger('click');
});
