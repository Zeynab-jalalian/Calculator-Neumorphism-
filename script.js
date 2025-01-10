let display=document.querySelector('#display');
let buttons=document.querySelectorAll('.btn');

buttons.forEach(function(btn){
  btn.addEventListener('click',function(e){
    if(display.innerHTML==="0"){
        display.innerHTML=e.target.innerText;
    }else{
        display.innerHTML+=e.target.innerText
    }
  })

 
  
})