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
     if(display.innerHTML==="0"){ //اگر نمایشگر 0 بود جایگزین شود
      display.innerHTML=value;
     }else{ //اگر نه در ادامه نوشته شود
      display.innerHTML+=value;
     }
    }
//اگر مساوی بود...
    else if(action==='='){
      try{
     let exp=display.innerHTML
     .replace(/×/g , '*') //تبدیل به *
     .replace(/÷/g , '/'); // تبدیل به /
     display.innerHTML=eval(exp); //محاسبه
    }catch(error){
      display.innerHTML='Error'; //در صورت خطا Error
    }
  }
// نمایش ÷×
  else if(action==="×" || action==="÷"){
  if(action==="×"){
    display.innerHTML+="×";
  }else if(action==="÷"){
    display.innerHTML+="÷";
  }

  }
  })
})