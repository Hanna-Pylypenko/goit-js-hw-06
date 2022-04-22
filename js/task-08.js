const formRef = document.querySelector('.login-form');
formRef.addEventListener('submit', submitReactions);
function submitReactions(event) {
    event.preventDefault();
    const { elements: { email, password } } = event.currentTarget;
    if (email.value === "" || password.value === "") {
        return alert("Please fill in all the fields");
    } 
    
    const dataObject = {
        email: email.value,
        password: password.value,
    }
    console.log(dataObject);
    
    event.currentTarget.reset(event);
}
   

