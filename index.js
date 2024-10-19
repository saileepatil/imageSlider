//ek image slider (images ko age piche krskte ho)
//logic fix krna h before/after image ka
//image also navigate to before /after


//access the images
let slideImages = document.querySelectorAll('img');

//access the next and prev buttons
let next = document.querySelector('.next');
let prev = document.querySelector('.previous');


//navigator
let dots = document.querySelectorAll('.dots');
var counter = 0;

//code for next button
next.addEventListener('click' , slideNext);

function slideNext(){
    slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
    if(counter >= slideImages.length-1){
        counter = 0;
    } else{
        counter++;
    }
    slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
      indicator()
}

//code for pre button
prev.addEventListener('click', slidePrev)


function slidePrev(){
    slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
    if(counter == 0){
      counter = slideImages.length-1;
    }
    else{
        counter--;
    }
    slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
    indicator()
}

//auto sliding
function autoSliding(){

    deletInterval = setInterval(timer, 3000);
    function timer(){
        slideNext();
        indicator();
    }
}
autoSliding();

//stop auto sliding when mouse is over
const container = document.getElementById('slideContent')
container.addEventListener('mouseover' , function(){
clearInterval( deletInterval );
})

//resume sliding when mouse is outtt

container.addEventListener('mouseout' ,autoSliding )


//add and remove active class from the indicator

function indicator(){
for(i = 0 ; i <  dots.length ; i++){
    dots[i].className = dots[i].className.replace(' active' , '')
}
dots[counter].className += ' active';
}

//add click event to the indicator

function switchImage(currentImage){
currentImage.classList.add('active');
var imageId = currentImage.getAttribute('attr');
if(imageId > counter){
    slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
    counter = imageId;
    slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
}
else if(imageId == counter){
   return;
}
else{
    slideImages[counter].style.animation = 'prev1  0.5s ease-in forwards';
    counter = imageId;
    slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
}
indicator()
}