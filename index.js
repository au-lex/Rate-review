let pop = document.querySelector(".modal");

let submitBtn = document.querySelector("#sumbtn");

let btnBox = document.querySelector(".btn-container");

let totalLength = [...document.querySelectorAll(".btn-1")].length;

let messageText;

btnBox.addEventListener("click", function(e) {
   const target = e.target;
   if( target.matches("div.btn-1")) {
      target.style.backgroundColor = "var(--hover-color)";
      messageText = target.textContent;
   }
})

submitBtn.addEventListener ('click', func);


function func() {
   pop.classList.add("opener");
   pop.querySelector(".h4").textContent = `you selected ${messageText} out of ${totalLength}`;
}
   


   
