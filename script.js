const nextbtn = document.querySelector('.next-btn')
const prevbtn = document.querySelector('.prev-btn')
const slides = document.querySelectorAll('.slide')

const numberOfSlides = slides.length;
let slideNumber = 0;

nextbtn.onclick = () =>{
  slides.forEach((slides) =>{
    slides.classList.remove('active')
  })
    slideNumber++;
    if(slideNumber > (numberOfSlides -1)){
        slideNumber = 0;
    }
    
    slides[slideNumber].classList.add('active');
}


prevbtn.onclick = () =>{
  slides.forEach((slides) =>{
    slides.classList.remove('active')
  })
    slideNumber--;
    if(slideNumber < 0){
        slideNumber = numberOfSlides -1;
    }
    
    slides[slideNumber].classList.add('active');
}
