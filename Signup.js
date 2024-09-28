document.getElementById('Content_form').addEventListener('submit', function(e){
    // e.preventDefault();
    let nameInput = document.getElementById('name_input').value;
    let emailInput = document.getElementById('email_input').value;
    let passwordInput = document.getElementById('password_input').value;
    let RepasswordInput = document.getElementById('Repassword_input').value;
    let ageInput = document.getElementById('age_input').value;
    let genderInput = document.getElementById('gender_input').value;
    let termCheckbox = document.getElementById('Terms');

    let Message ='';

    if(nameInput === ''){
        Message+= 'Name is Required\n';
    }
    else if(!isNaN(nameInput)){
        Message+= 'Name Cannot be a number\n';
    }

    if(emailInput === ''){
        Message+= 'Email is Required\n';
    }
    else if(!emailInput.endsWith('@gmail.com')){
        Message+= 'Please enter your Gmail account\n';
    }

    if(passwordInput === ''){
        Message+= 'Password is Required\n';
    }
    else if(passwordInput.length < 5) {
        Message+= 'Password Need to be Longer\n';
    }

    if(RepasswordInput === ''){
        Message+= 'Re-Enter Password is Required\n';
    }
    else if(RepasswordInput !== passwordInput){
        Message+='Your password do not match\n'
    }

    if(ageInput ===''){
        Message+= 'Age is Required\n';
    }
    else if(isNaN(ageInput)){
        Message+= 'Age must be a Number\n';
    }

    if(genderInput === ''){
        Message+= 'Gender is Required\n';
    }
    else if(genderInput !== 'Male' && genderInput !== 'Female'){
        Message+= 'Gender must be Male or Female\n';
    } 
    
    if(!termCheckbox.checked){
        Message+= 'Please Checklist the box\n';
    }

    if(Message !== ''){
        alert(Message)
    }
    


});