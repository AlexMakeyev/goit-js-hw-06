const loginForm = document.querySelector('.login-form');


loginForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const mail = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;

    if (mail === '' || password === '') {
        alert('Все поля должны быть заполнены');
    }
    else {
        const formEl = {
        mail: mail,
        password: password,
    }
    console.log(formEl);
    };
    loginForm.reset();

    
    
}
