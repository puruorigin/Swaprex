  $('.js_road_map').owlCarousel({
  autoplay=true,
  autoplayTimeout=4000,
  autoplayHoverPause=true,
  loop=true,
  items= 5,
  nav= true,
  dots= true,
  margin= 30,
  navText= ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
  responsive= {
  0: {items= 2},
  400: {items= 2},
  599: {items= 3},
  1024: {items= 4},
  1170: {items= 4}
  }
  });