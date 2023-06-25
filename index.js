const icon = document.querySelector("#icon");
const main = document.querySelector(".menu-items");
const close = document.querySelector(".closeMenu")

icon.addEventListener('click',()=>{
    main.classList.toggle('new-one')
})

close.addEventListener('click',()=>{
     main.classList.remove("new-one")
})

