function validateForm(event) {
    event.preventDefault();

    let formValue = document.getElementById('formInputs');
    let email = formValue.elements['email'].value;
    let password = formValue.elements['password'].value;
    let ConfirmPassword = formValue.elements['ConfirmPassword'].value;
    
    if (email == '' || email == null) {
       alert ("Please enter your Email id");
    }else if (!email.includes('@') || !email.includes('.com')){
        alert("Invallid email format! (Email should contain '@' and '.com')")
    }else if(password == '' || password == null){
        alert ("Please enter your Password");
    }else if(password.length < 5){
        alert("Password should contain atleast '5' charecters.")
    }else if(!/[A-Z]/.test(password)){
        alert("Password should contain at least one uppercase letter.")
    }else if(!/[a-z]/.test(password)){
        alert('Password should contain at least one lowercase letter.')
    }else if(!/\d/.test(password)){
        alert('Password should contain at least one number.')
    }else if(!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password)){
        alert('Password should contain at least one special character.')
    }else if(!(password === ConfirmPassword)){
        alert("Confirm your password with same password")
    }else{
        alert("REGISTRATION SUCCESSFULL");
        formValue.elements['email'].value = '';
        formValue.elements['password'].value = '';
        formValue.elements['ConfirmPassword'].value = '';
    }

}

alert("Password should contain: Atleast 5 characters, one uppercase letter, one lowercase letter, one number and one special characters.");