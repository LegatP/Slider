$(document).ready(function() {
    
    var numberOfSlides = 2;
    var currentSlide = 1;
    var previousSlide = 1;
    
  $("#button_right").click(function () {
      previousSlide = currentSlide;
      currentSlide++;
      if(currentSlide > numberOfSlides){
          currentSlide = 1;
      }
    $("#slide").html(
            '<img src="/slides/slide' + currentSlide + '.jpg"></img>' +
            '<img src="/slides/slide' + previousSlide + '.jpg"></img>'        
        )
  });
  
  
  
  
  
  
  
});