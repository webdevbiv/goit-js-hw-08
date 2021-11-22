const _ = require('lodash');
const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector("input[name='email']"),
    message: document.querySelector("textarea"),
    submit: document.querySelector('button')
}
// console.log(refs.form);
// console.log(refs.email);
// console.log(refs.message);
// console.log(refs.submit);
let userEmail = ''
let userMessage = ''

const localUserInputs = JSON.parse(localStorage.getItem('feedback-form-state'))
console.log(localUserInputs);
if (localUserInputs !== null) {
    refs.email.value = localUserInputs.email
    refs.message.value = localUserInputs.message
}


refs.form.addEventListener('input', _.throttle(saveUserInput, 500))
function saveUserInput(e) {
    console.log(localUserInputs);
    // let userEmail = refs.email.value
    // let userMessage = refs.message.value
    userEmail = refs.email.value
    userMessage = refs.message.value
    const userInputs = { email: `${userEmail}`, message: `${userMessage}` }
    // console.log(userInputs);
    const userInputsJSON = JSON.stringify(userInputs)
    // console.log(typeof userInputsJSON);
    localStorage.setItem('feedback-form-state', `${userInputsJSON}`)
    // console.log('in storage ' + localStorage.getItem('feedback-form-state'));
}

refs.form.addEventListener('submit', handleSubmit)
function handleSubmit(event) {
    event.preventDefault();
    console.log(`email: ${refs.email.value}, password:${refs.message.value}`);
    localStorage.clear()
    event.currentTarget.reset()
}