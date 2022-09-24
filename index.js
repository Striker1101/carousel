const set = Array.from(document.querySelector('.set').querySelectorAll('img')) 
const text = Array.from(document.querySelector('.text').querySelectorAll('div')) 
const imgShow = document.querySelector('#imgShow')
const middle = document.querySelector('.middle')

let count = 0;
let imgDisplay = (value) =>{
    imgShow.innerHTML = ""
    imgShow.appendChild(set[value])
    middle.textContent =""
    middle.textContent = text[value].textContent
}

    setInterval(() =>{
        if(count < set.length ){
        imgDisplay(count++)
        console.log(count + " " + "one")
        if (count == set.length){
            count = 0
            imgDisplay(count++)
            console.log(count + " " + "two")
        }
        }
    }, 4000)



function goLeft(){
if (count > 0  ){
    --count
    imgDisplay(count)
}
}
function goRight(){
    if(count < set.length -1 ){
        ++count
        imgDisplay(count)
    }
}
function circleOne(){
    imgDisplay(0)
    value = 1
}
function circleTwo(){
    imgDisplay(1)
    value = 2
}
function circleThree(){
    imgDisplay(2)
    value = 3
}
function circleFour(){
    imgDisplay(3)
    value = 4
}
function circleFive(){
    imgDisplay(4)
    value = 5
}
