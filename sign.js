 const forms = document.querySelector(".forms"),
      pwShowHide = document.querySelectorAll(".eye-icon"),
      links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
        
        pwFields.forEach(password => {
            if(password.type === "password"){
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        })
        
    })
})      

links.forEach(link => {
    link.addEventListener("click", e => {
       e.preventDefault(); //preventing form submit
       forms.classList.toggle("show-signup");
    })
})


// Get the signup form and login form elements
const signupForm = document.querySelector('.signup form');
const loginForm = document.querySelector('.login form');

// Add event listener to the signup form submit button
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get the user's email and password
    const email = signupForm.querySelector('input[type="email"]').value;
    const password = signupForm.querySelector('input[type="password"]').value;

    // Check if the user's email already exists in local storage
    let users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.find(user => user.email === email);

    if (userExists) {
        // alert('User already exists!');
        Swal.fire("Oops!", "User already exits!", "error")
        
    }else{
        users.push({email, password});
    localStorage.setItem('users', JSON.stringify(users));

    // Reset the form fields
    signupForm.reset();
    // alert('Signup successful!');
    Swal.fire("Signup succesfull!", "Click on login", "success")
    }

    // Add the user's details to the users array and store it in local storage
    
});

// Add event listener to the login form submit button
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get the user's email and password
    const email = loginForm.querySelector('input[type="email"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;

    // Check if the user's email and password match with any user in local storage
    let users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.password === password);

    if (!user) {
        Swal.fire(
            'Oops Wrong Email & Password!',
            'Something went wrong!',
            'error'
        )
        
     
    }else{
         loginForm.reset();
          
    Swal.fire("Login successfully!", "Welcome to Oestin", "success")
   myFunction();
    }

    // Reset the form fields
    
   function myFunction() {
    setTimeout(() => {
        // location.replace("http://127.0.0.1:5500/hotel2.html")
        console.log('Why is this asshole this not working ???')
    }, 1000)

}
});










