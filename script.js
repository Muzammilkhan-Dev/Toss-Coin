let toss = document.querySelector("#toss");
let cho = document.querySelector("#cho");

let ans = () => {
    let ans = Math.floor(Math.random() * 2);
    console.log(ans);
    if(ans === 0){
        cho.innerText = "HEAD"
    } else {
        cho.innerText = "TAIL"
    }
}

toss.addEventListener("click", () => {
    
    ans();
})