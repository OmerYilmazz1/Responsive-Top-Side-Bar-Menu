const btn = document.querySelector(".btn");
const bar = document.querySelector(".sideBar");

btn.addEventListener("click" , () =>{
    bar.classList.toggle("active");
});