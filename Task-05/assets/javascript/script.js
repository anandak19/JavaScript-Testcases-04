function validate(event) {
    event.preventDefault();

    let formValue = document.getElementById('loginForm');
    let name = formValue.elements['name'].value;
    let age = formValue.elements['age'].value;

    if (name == '' || name == null) {
        alert("Please enter your name");
    } else if (age == '' || age == null){
        alert("Please enter your age");
    } else {
        alert(`Welcome ${name}, hope you are doing well on your ${age}'s.`);
        formValue.elements['name'].value = '';
        formValue.elements['age'].value = '';
    }
}
