// let sum = 0
// let n = Number(prompt("enter a number"))
// let i = 0 
// while(n>=0){
//     i++
//     sum+=n
//     console.log(sum)
//     n = Number(prompt("enter a number"))
// }



let img = document.querySelector("img")
let span = document.querySelector(".counter")
let like = 0

if (localStorage.getItem("like") === null) {
    localStorage.setItem("like", like)
} else {
    like = Number(localStorage.getItem("like"))
}
span.innerText = like
img.addEventListener("dblclick", () => {
    like += 1
    span.innerText = like
    localStorage.setItem("like", like)
})
