let book = document.querySelectorAll(".item");

function bodySize(){
       let windowWidth = window.innerWidth;
book.forEach((e)=>{
       if(windowWidth >= 600){
              e.setAttribute("data-merge", 3);
       }else{
              e.setAttribute("data-merge", 6);
       }
})
}
window.addEventListener("resize", bodySize);