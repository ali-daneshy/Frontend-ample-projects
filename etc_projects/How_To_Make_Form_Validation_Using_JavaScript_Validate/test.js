
// elements
const name_error = document.getElementById('name-error')
const email_error = document.getElementById('email-error')
const phone_error = document.getElementById('phone-error')
const message_error = document.getElementById('message-error')
const submit_error = document.getElementById('submit-error')

const contact_name = document.getElementById('contact-name')
const contact_phone = document.getElementById('contact-phone')
const contact_email = document.getElementById('contact-email')
const contact_message = document.getElementById('contact-message')

const full_name_check = /^[A-Za-z]*\s{1}[A-Za-z]*$/
const phone_check     = /^[0-9]{10}$/
const email_check = /^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/


// listeners

// contact_name.addEventListener('onkeyup' , validateName)




// fucntions

function validateName(){
    let name = contact_name.value
    if(name.length == 0){
        name_error.style.color = 'red'
        name_error.innerHTML = '<li class="fa fa-times-circle" ></li>Name is required'
        return false
    }
    else if(!name.match(full_name_check)){
        name_error.style.color = 'red'
        name_error.innerHTML = '<li class="fa fa-times-circle" ></li>Write full name';
        return false

    }else{
        name_error.style.color = 'rgb(0, 189, 16)'
        name_error.style.fontWeight = 'bolder'
        name_error.innerHTML = '<li class="fa fa-check-circle" ></li>'
        return true ;
    }
    
}

function validatePhone(){
    let phone = contact_phone.value

    if(phone.length == 0){
        phone_error.style.color = 'red'
        phone_error.innerHTML = '<li class="fa fa-times-circle" ></li>phone no is required';
        return false}
    else if(phone.length !== 10){
        phone_error.style.color = 'red'
        phone_error.innerHTML = '<li class="fa fa-times-circle" ></li>Phone no should be 10 digits';
        return false
    }
    else if(!phone.match(phone_check)){
        phone_error.style.color = 'red'
        phone_error.innerHTML = '<li class="fa fa-times-circle" ></li>Only digits please';
        return false}
    else{
        phone_error.style.color = 'rgb(0, 189, 16)'
        phone_error.style.fontWeight = 'bolder'
        phone_error.innerHTML = '<li class="fa fa-check-circle" ></li>'
        return true ;
    }

}


function validateEmail(){
    let email = contact_email.value

    if(email.length == 0 ){
        email_error.style.color = 'red'
        email_error.innerHTML = '<li class="fa fa-times-circle" ></li>Email is required';
        return false}
    else if(!email.match(email_check)){
        email_error.style.color = 'red'
        email_error.innerHTML = '<li class="fa fa-times-circle" ></li>Email invalid';
        return false}
    else{
        email_error.style.color = 'rgb(0, 189, 16)'
        email_error.style.fontWeight = 'bolder'
        email_error.innerHTML = '<li class="fa fa-check-circle" ></li>'
        return true ;
    }

}


function validateMessage(){
    let message = contact_message.value

    const required = 30 ;
    let left = required - message.length

    if(left>0){
        message_error.style.color = 'red'
        message_error.innerHTML = '<li class="fa fa-times-circle" ></li>' + left + 'more charectors required'
        return true
    }
    else{
        message_error.style.color = 'rgb(0, 189, 16)'
        message_error.style.fontWeight = 'bolder'
        message_error.innerHTML = '<li class="fa fa-check-circle" ></li>'
        return true ;
    }


}


function validateForm(){
    if(!validateName() || validatePhone() || validateEmail|| validateMessage){
        submit_error.style.display  = 'block'
        submit_error.innerHTML = '<li class="fa fa-times-rectangle" ></li>Please fix error to submit'
        setTimeout( function(){submit_error.style.display  = 'none'}  , 5000)
        return false
    }

}








