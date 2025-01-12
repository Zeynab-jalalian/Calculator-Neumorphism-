// دسترسی به دکمه‌ها و نمایشگر
let display = document.querySelector('#display');
let buttons = document.querySelectorAll('.btn');
let AC = document.querySelector('.clear');
let DEL = document.querySelector('.delete');
let equal = document.querySelector('.equal');
let operator = document.querySelectorAll('.operator');

// انتخاب تک تک دکمه‌ها و عملیات کلیک
buttons.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const action = e.target.dataset.action;
    const value = e.target.innerText; // مقدار دکمه‌ای که روی آن کلیک شده

    if (!action) { // اگر عدد یا نقطه بود
      if (display.innerHTML === "0") {
        display.innerHTML = value; // اگر نمایشگر صفر باشد، مقدار جدید جایگزین می‌شود
      } else {
        display.innerHTML += value; // اگر نمایشگر خالی نباشد، مقدار جدید به آن اضافه می‌شود
      }
    } 
    else if (action === "=") { // اگر مساوی باشد
      try {
        // تبدیل عملگرهای ÷ و × به / و * برای محاسبات
        let exp = display.innerHTML
          .replace(/×/g, '*')  // جایگزینی × با *
          .replace(/÷/g, '/'); // جایگزینی ÷ با /

        display.innerHTML = eval(exp); // انجام محاسبات و نمایش نتیجه
      } catch (error) {
        display.innerHTML = 'Error'; // در صورت بروز خطا نمایش "Error"
      }
    } 
    else if (action === "÷" || action === "×") { // اگر دکمه‌های عملگر ÷ یا × فشرده شوند
      if (action === "÷") {
        display.innerHTML += "÷"; // نمایش ÷ در نمایشگر
      } else if (action === "×") {
        display.innerHTML += "×"; // نمایش × در نمایشگر
      }
    } 
    else if (action === "clear") { // اگر دکمه AC زده شود
      display.innerHTML = "0"; // نمایشگر به صفر بازمی‌گردد
    } 
    else if (action === "delete") { // اگر دکمه DEL زده شود
      if (display.innerHTML.length > 1) {
        display.innerHTML = display.innerHTML.slice(0, -1); // حذف یک کاراکتر از نمایشگر
      } else {
        display.innerHTML = "0"; // اگر یک کاراکتر باقی‌مانده باشد، نمایشگر به صفر برمی‌گردد
      }
    } 
    else { // برای سایر دکمه‌ها (اعداد و نقطه)
      display.innerHTML += value; // مقدار دکمه به نمایشگر اضافه می‌شود
    }
  });
});