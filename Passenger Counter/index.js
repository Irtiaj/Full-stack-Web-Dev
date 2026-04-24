let saveel = document.getElementById("save-el")

let counte1 = document.getElementById("count-el")
let count = 0
function increment(){
    count += 1
    counte1.textContent = count
}

function save(){
    let hehe = count + " - "
    saveel.textContent += hehe
    console.log(count)
    counte1.textContent = 0
    count = 0
}
