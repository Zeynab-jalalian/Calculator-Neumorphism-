//دسترسی به دکمه ها و نمایشگر
let display=document.querySelector('#display');
let buttons=document.querySelectorAll('.btn');
let AC=document.querySelector('.clear');
let DEL=document.querySelector('.delete');
let equal=document.querySelector('.equal');
let operator=document.querySelectorAll('.operator');
/*
انتخاب تک تک دکمه ها
عملیات کلیک
*/
buttons.forEach(function(btn){
  btn.addEventListener('click',function(e){
    if(display.innerHTML=="0"){
      display.innerHTML=e.target.innerText;
    }else{
      display.innerHTML+=e.target.innerText;
    }
  })
})