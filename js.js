const btns = document.querySelectorAll('button')
const spanCounter = document.querySelector('.span-cont')

let count = 0
btns.forEach((item)=>{
  item.addEventListener('click', (e) =>{
    const targetItem = e.currentTarget
    if(targetItem.classList.contains('decre')){
      count--
    }else if(targetItem.classList.contains('reset')){
      count = 0
    }else{
      count++
    }
    if(count < 0){
      spanCounter.style.color = 'red'
    }else if(count > 0){
      spanCounter.style.color = 'green'
    }else if(count == 0){
      spanCounter.style.color = 'currentColor'
    }
    spanCounter.textContent = count
  })
})