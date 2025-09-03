document.addEventListener("DOMContentLoaded", function()
{
    let count = 0;

    const display = document.getElementById("display_");
    const button  = document.getElementById("button_");

    button.addEventListener('click', function()
    {
        count++;
        if(count==5){
            alert("Ab bss kr bhaii, kitna dabayega! 😂");
        }
        if(count==16){
            alert("kya yrr, 15 ke bad v nahi ruka 😂");
        }
        if(count==20){
            alert("Lgta h tu nahi manega bhai,koi na, dabata ja 😂");
        }
        if(count==30){
            alert("Abhi bhi nahi ruka? 😂");
        }
        if(count==38) alert("Good job bro...");
        display.textContent = `You clicked ${count} times`;
       
    });




});