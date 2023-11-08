let slideBtnLeft = document.getElementById('slide-btn-left');
let slideBtnRight = document.getElementById('slide-btn-right');
let imgItem = document.querySelectorAll('.image-item');

let startSlider = 0;
let endSlider = (imgItem.length-1) * 100;

slideBtnLeft.addEventListener("click",()=>{
    if (startSlider < 0){
        startSlider = startSlider + 100;
    }
    imgItem.forEach(ele =>{
        ele.style.transform = `translateX(${startSlider}%)`;
    });
   
});
slideBtnRight.addEventListener("click",()=>{
    if (startSlider >= -endSlider+100){
        startSlider = startSlider - 100;
    }
    imgItem.forEach(ele =>{
        ele.style.transform = `translateX(${startSlider}%)`;
    });
});