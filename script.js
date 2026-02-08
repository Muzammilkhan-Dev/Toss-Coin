let toss = document.querySelector("#toss");
let cho = document.querySelector("#cho");

let ans = () => {

    cho.classList.remove("animate");
    void cho.offsetWidth;
    cho.classList.add("animate");
    cho.innerText = "";

    let ans = Math.floor(Math.random() * 2);
   
    setTimeout(() => {
        cho.innerText = ans === 0 ? "Head" : "Tail";
    },900)

    

}

toss.addEventListener("click", () => {
    
    ans();
})