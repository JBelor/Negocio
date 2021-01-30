
$('#recipeCarousel').carousel({
    interval: 2000 //Campiar cards cada 2000 milisegundos
  })
  
  $('.carousel .carousel-item').each(function(){//Mostrando solo 3 card en el carrusel
      var minPerSlide = 3;
      var next = $(this).next();
      if (!next.length) {
      next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));
      
      for (var i=0;i<minPerSlide;i++) {//Cambio dinamico de cards
          next=next.next();
          if (!next.length) {
              next = $(this).siblings(':first');
            }
          next.children(':first-child').clone().appendTo($(this));
        }
  });

  $('#recipeCarousel2').carousel({
    interval: 2000 //Campiar cards cada 2000 milisegundos
  })
  
  $('.carousel .carousel-item').each(function(){//Mostrando solo 3 card en el carrusel
      var minPerSlide = 3;
      var next = $(this).next();
      if (!next.length) {
      next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));
      
      for (var i=0;i<minPerSlide;i++) {//Cambio dinamico de cards
          next=next.next();
          if (!next.length) {
              next = $(this).siblings(':first');
            }
          
          next.children(':first-child').clone().appendTo($(this));
        }
  });
  
  