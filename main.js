// fetch('https://random-words-api.vercel.app/word')
// .then((data) =>{
//     return data.json()
// })
// .then(showData)

// function showData(data){
//     console.log(data);
// }
1

// let name = 'salom dunyo'

// let ol = name.indexOf['l']
// console.log(name.indexOf[8]);

const container = document.querySelector('.container')
const scoreCounter = document.querySelector('.score-counter')
const randomWordEl = document.querySelector('.random-word')
const textInput = document.querySelector('.text-input')
const timeEl = document.querySelector('.time')
const modal = document.querySelector('.modal')
const close = document.querySelector('.fas')
const ball = document.querySelector('.bal')
const selectLevel = document.querySelector('#select-level')


const api = 'https://random-words-api.vercel.app/word';


let randomWord
let score = 0;
let time = 20;

localStorage.getItem('level') 
? (selectLevel.value = localStorage.getItem('level'))
:(selectLevel.value = 'medium')

textInput.focus()
function get(){
fetch(api)
.then((data) =>{
    return data.json()
})
.then(getWord)
}
get()

function getWord(e){
    randomWord = e[0].word.toLowerCase()
    randomWordEl.textContent = randomWord
}


textInput.addEventListener('input', ()=> {
    if(randomWord == textInput.value ){
        get()
        textInput.value= ''
        score++
        scoreCounter.textContent = score


        if(selectLevel.value == 'easy'){
            time += 5
        }else if(selectLevel.value == 'medium'){
            time += 3
        }else{
            time += 2
        }
    }
})

close.addEventListener('click', ()=>{
    location.reload()
// console.log(2);
})
setInterval(()=>{
    if(time){
        time--
        timeEl.textContent = time
    }else if(time == 0){
       modal.classList.remove('hidden')
       ball.textContent = `Siz ${score} ball to'pladingiz`

    }
},1000)


selectLevel.addEventListener('change', ()=>{
    localStorage.setItem('level', selectLevel.value)

})
