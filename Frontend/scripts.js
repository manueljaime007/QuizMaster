const overlay = document.querySelector('.overlay')
const enterBtn = document.querySelector('#enter__btn')
const closeBtn = document.querySelector('#close__btn')
const popup = document.querySelector('.popup')


enterBtn.onclick = ()=>{
    overlay.classList.add('active')
    popup.classList.add('open')
}

overlay.onclick = ()=>{
    overlay.classList.remove('active')
    popup.classList.remove('open')
}

closeBtn.onclick = ()=>{
    overlay.classList.remove('active')
    popup.classList.remove('open')
}


/*FORM*/
const popupForm = popup.querySelector('#form__popup')
const usernameInput = document.querySelector('#username__input')
const usernameError = document.querySelector('#username__error')
const submitBtn = document.querySelector('#submit__btn')



popupForm.onsubmit = (e)=>{
    e.preventDefault()
    const username = usernameInput.value
    if(username.trim() === ''){
        usernameError.textContent = 'Preencha o campo'        
        usernameInput.onkeyup = ()=>{
            usernameError.textContent = ''
        }
        return;

    }
    overlay.classList.remove('active')
    popup.classList.remove('open')
    usernameInput.value = ''
    

    
    setTimeout(() => {
        // MESSAGE DE LOG
        const welcomeMsgBox = document.querySelector('#welcome-msg__box')
        welcomeMsgBox.classList.add('active')
    }, 2000);
    setTimeout(() => welcomeMsgBox.classList.add('active'), 2000);
    setTimeout(() => window.location.href='./views/home.html', 6000);

}



