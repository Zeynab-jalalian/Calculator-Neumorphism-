// دسترسی به نمایشگر و دکمه ها
let display=document.querySelector('#display');
let buttons=document.querySelectorAll('.btn');
let AC=document.querySelector('.clear');
let DEL=document.querySelector('.delete');
let equal=document.querySelector('.equal');
// حلقه برای تمام دکمه ها 
buttons.forEach(function(button){
  button.addEventListener('click',function(e){
    //انتخاب تمام دکمه ها و عملیات کلیک
    const action=e.target.dataset.action; //دکمه هایی که دیتا اکشن دارند
    // عملگرهای ریاضی - دکمه های حذف - مساوی
    const value=e.target.innerText; //دکمه هایی که اکشن ندارند هم محسوب میشوند
    if(!action){ //اگر اعداد و نقطه بود
     if(display.innerHTML==="0"){
      display.innerHTML=value;
     }else{
      display.innerHTML+=value;
     }
    }
  })
})