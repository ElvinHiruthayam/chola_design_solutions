var slideIndex = 1;
//showSlides(slideIndex);
timerlides()

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function timerlides() {
    showSlides(slideIndex);
    slideIndex+=1;
    setTimeout(timerlides, 5000); // Change image every 2 seconds
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function validate() {
  var em=document.getElementById('userDetailsE').value;
  var ph=document.getElementById('userDetailsP').value;
  if (em && ph){
    alert('Will Contact you shortly via Mail : ' + em + ' Or at Phone : ' + ph)
    return true
  }
  if (em){
    alert('Will Contact you shortly via Mail : ' + em)
    return true
  }
  if (ph){
    alert('Will Contact you shortly via Phone : ' + ph)
    return true
  }
  return false
}