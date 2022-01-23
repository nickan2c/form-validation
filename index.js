const username = document.getElementById('usernameInput');
const email = document.getElementById('emailInput');
const password = document.getElementById('passwordInput');
const password2 = document.getElementById('password2Input');
const form = document.getElementById('form');

const setError = (element, message)=>{
    const inputControl = element.parentElement;
    const errorDisplay =inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    
    inputControl.classList.add('error');
    inputControl.classList.remove('success');

}

const setSuccess = (element)=>{
    const inputControl = element.parentElement;
    const errorDisplay =inputControl.querySelector('.error');

    inputControl.classList.add('success');
    inputControl.classList.remove('error')
    errorDisplay.innerText = ''
}

form.addEventListener('submit', (event) =>{
    event.preventDefault(); // dont refresh page
    if (validateInputs()){
        window.location.href = 'welcome.html'
    }
    
})

const validateInputs =() => {
    let usernameVal = username.value.trim();
    let emailVal = email.value.trim();
    let passwordVal = password.value.trim();
    let password2Val = password2.value.trim();

    let pass = false;

    if (usernameVal === '' || usernameVal == null){
        setError(username, 'Name is required')
        pass = false;
    }else{
        setSuccess(username);
        pass = true;
    }
    if (emailVal === '' ||emailVal == null){
        setError(email,'Email required')
        pass = false;
    }else{
        setSuccess(email);
        pass = true;
    }
    if (passwordVal === ''|| passwordVal == null){
        setError(password,'You did not enter a password')
        pass = false;

    }else if(passwordVal.length < 8){
        setError(password, 'Password Length should be >8')
        pass = false;
    }
    else{
        setSuccess(password);
        pass = true;
    }
    if (password2Val !==passwordVal){
        setError( password2,'Your passwords dont match')
        pass = false;
    }else{
        setSuccess(password2);
        pass = true;
    }

    return pass;




}

