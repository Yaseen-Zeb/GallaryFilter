let buttons = document.querySelectorAll(".btn")
let pictures = document.querySelectorAll(".picture")
//  let people = document.querySelectorAll(".")

buttons.forEach((button) => {
    button.addEventListener("click",(e)=>{
        let text = e.target.dataset.text;

        pictures.forEach((pic) => {
            if (text === "all") {
                pic.style.display = "block"
            }else if (pic.classList.contains(text)) {
                pic.style.display = "block"
            } else {
                pic.style.display = "none"
            }
        });
    })
});