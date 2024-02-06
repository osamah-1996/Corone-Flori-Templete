//validation form
let loginSubmit = document.getElementById("loginSubmit");
loginSubmit.addEventListener('click', function(event){
  // Prevent the default form submission
  event.preventDefault();
  // Message errors
  var emailErrorMessage    = document.getElementById('emailErrorMessage');
  var passwordErrorMessage = document.getElementById('passwordErrorMessage');
  // Targeting the input values
  var userEmail    = document.getElementById('userEmail').value;
  var userPassword = document.getElementById('userPassword').value;
  // Validation logic
  var isValid = true;
  // Validate email
  if (!userEmail || userEmail.trim() === "") {
    emailErrorMessage.innerText = "Email is required.";
    emailErrorMessage.style.marginTop = '20px';
    emailErrorMessage.style.color = 'red';
    emailErrorMessage.style.textTransform = 'capitalize';
    emailErrorMessage.style.wordSpacing = '2px';
    isValid = false;
  } else if (!/\S+@\S+\.\S+/.test(userEmail)) {
    emailErrorMessage.innerText = "Email is invalid.";
    emailErrorMessage.style.marginTop = '-18px';
    emailErrorMessage.style.color = 'red';
    emailErrorMessage.style.textTransform = 'capitalize';
    emailErrorMessage.style.wordSpacing = '2px';
    isValid = false;
  } else {
    emailErrorMessage.innerText = "";
  }
  // Validate password
  if (!userPassword || userPassword.trim() === "") {
    passwordErrorMessage.innerText = "Password is required.";
    passwordErrorMessage.style.marginTop = '-18px';
    passwordErrorMessage.style.color = 'red';
    passwordErrorMessage.style.textTransform = 'capitalize';
    passwordErrorMessage.style.wordSpacing = '2px';
    isValid = false;
  } else {
    passwordErrorMessage.innerText = "";
  }

  // If form is valid, proceed with submission
  if (isValid) {
    document.querySelector("form").submit();
  }
});
