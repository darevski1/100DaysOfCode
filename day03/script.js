const from = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");


// check fields

function checkReqired(inputArr) {
    inputArr.forEach(input => {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`)
        }
        else {
            showSuccess(input);
        }
    });
}
function checkLenght(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must bea least ${min}`)
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be than ${max}`)
    }
    else {
        showSuccess(input);
    }
}
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkReqired([username, email, password, password2])
    checkLenght(username, 3, 15);
    checkLenght(password, 6, 25);
});