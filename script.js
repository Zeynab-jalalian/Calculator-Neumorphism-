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
    // تعریف متغیر و مشخض کردن دکمه های دارای دیتا اکشن
    const action=e.target.dataset.action;
    if(!action){ //اگر عدد بود(دیتا اکشن نداشت)
    if(display.innerHTML=="0"){
      display.innerHTML=e.target.innerText;
    }else{
      display.innerHTML+=e.target.innerText;
    }
  }
  })
})
// دکمه ی حذف کامل
AC.addEventListener('click',function(){
  display.innerHTML='0';
})
// دکمه ی  حذف یکی یکی
DEL.addEventListener('click',function(){
 if(display.innerHTML.length > 1){
  display.innerHTML=display.innerHTML.slice(0,-1);
 }else{
  display.innerHTML="0";
 }
})