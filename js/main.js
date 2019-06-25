const codeSlider = document.querySelector('.code');

let moveAmount = 0;

function moveSlide(){

    if(moveAmount >= 75){
        moveAmount = -33.33; //setting moveAmount -33.33 for backward
    }else{
        codeSlider.style.transform = `translateX(-${moveAmount}%)`;
        moveAmount += 33.33; //increasing moveAmount by 33.33
    }
}

setInterval(moveSlide, 1500);


// codeSlider.addEventListener('mouseleave', () => {
//     //let clear = setInterval(moveSlide, 1500);
//     setInterval(moveSlide, 1500);
//     console.log("Hello")
// })

// codeSlider.addEventListener('mouseenter', () => {
//     let clear = setInterval(moveSlide, 1500);
//     clearInterval(clear);
// })




