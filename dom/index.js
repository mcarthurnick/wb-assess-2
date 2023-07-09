// Replace this with your code

let introText = document.getElementsByClassName("sub-intro");



document.getElementById("close-form").addEventListener('click', function() {
    const closeForm = document.getElementById("close-form")
    closeForm.innerText = closeForm.innerText === 'X' ? '+' : 'X'

    document.querySelector("form").classList.toggle("hide");

});

document.querySelector("form").addEventListener('submit', function(event) {
    event.preventDefault()

    const form = event.target;
    if(!form.name.value && !form.email.value){
        document.getElementById("email").style.border = "2px solid red"
        document.getElementById("name").style.border = "2px solid red"
        alert('You must enter a name and an email address to subscribe!')
    } else if(form.name.value && form.email.value) {
        document.querySelector("form").classList.toggle("hide");
        introText[0].innerText = 'Thank you for subscribing!'
        form.reset()
    } else if(!form.name.value){
        document.getElementById("name").style.border = "2px solid red"
        alert('Please enter a name to subscribe.')
    } else if(!form.email.value){
        document.getElementById("email").style.border = "2px solid red"
        alert('Please enter an email address to subscribe.')
    }

});




