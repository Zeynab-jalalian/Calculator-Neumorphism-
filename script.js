let display=document.querySelector('#display'); //دسترسی به قسمت نمایشگر 
let buttons=document.querySelectorAll('.btn');  //دسترسی به تک تک دکمه ها


buttons.forEach(function(e){ // انتخاب تک تک دکمه ها
    e.addEventListener('click',function(e){ // عملیات کلیک روی دکمه ها
      if(display.innerHTML==='00'){
        display.innerHTML=e.target.innerText;
        // اگر 0 بود باید حذف شود و مقدار جدید جایگزین شود
      }else{
        display.innerHTML+=e.target.innerHTML;
        //در غیر این صورت مقدار جدی اضافه شود
      }
    })
})