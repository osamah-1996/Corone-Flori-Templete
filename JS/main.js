//Controlling the side nabar navbar....
function showSideBar() {
  let naVarea  = document.querySelector('.nav-area');
  naVarea.style.display = 'block';
  naVarea.style.width = '150px';
}
function hideSideBar() {
  let naVarea  = document.querySelector('.nav-area');
  naVarea.style.display = 'none';
  
}
window.addEventListener("scroll", function() {
      const header = document.querySelector("header");
      // Check if the user has scrolled down more than 100 pixels
      if (window.innerWidth > 909) {
        if (window.scrollY > 0) {
          // Change the background color when scrolled
          header.style.backgroundColor = "#333"; // You can use your desired color
          return false;
        } else {
          // Revert to the original background color when not scrolled
          header.style.backgroundColor = "transparent";
          return false
        }
      }
      else if (window.innerWidth < 909){
        header.style.position = "sticky"; // You can use your desired color
        header.style.top = "0"; // You can use your desired color
      }
    });

// End the login and sing up form section
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
var close  = document.querySelector('.close');
close.addEventListener('click', function(){
  var modal = document.getElementById('id01');
  modal.style.display='none';

})

//validation form

var signupbtn = document.getElementById("signupbtn");

signupbtn.addEventListener('click', function(event){
  // Prevent the default form submission
  event.preventDefault();

  // Message errors
  var emailErrorMessage = document.getElementById('emailErrorMessage');
  var passwordErrorMessage = document.getElementById('passwordErrorMessage');
  var passwordErrorMessage2 = document.getElementById('passwordErrorMessage2');

  // Targeting the inputs
  var userEmail = document.getElementById('userEmail').value;
  var userPassword = document.getElementById('userPasswoord').value;
  var userPassword2 = document.getElementById('userPasswoord2').value;

  // Validation logic
  var isValid = true;

  // Validate email
  if (!userEmail || userEmail.trim() === "") {
    emailErrorMessage.innerText = "Email is required.";
    emailErrorMessage.style.marginTop = '-18px';
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

  // Validate repeated password
  if (!userPassword2 || userPassword2.trim() === "") {
    passwordErrorMessage2.innerText = "Repeated password is required.";
    passwordErrorMessage2.style.marginTop = '-18px';
    passwordErrorMessage2.style.color = 'red';
    passwordErrorMessage2.style.textTransform = 'capitalize';
    passwordErrorMessage2.style.wordSpacing = '2px';
    isValid = false;
  } else if (userPassword !== userPassword2) {
    passwordErrorMessage2.innerText = "Passwords do not match.";
    passwordErrorMessage2.style.marginTop = '-18px';
    passwordErrorMessage2.style.color = 'red';
    passwordErrorMessage2.style.textTransform = 'capitalize';
    passwordErrorMessage2.style.wordSpacing = '2px';
    isValid = false;
  } else {
    passwordErrorMessage2.innerText = "";
  }

  // If form is valid, proceed with submission
  if (isValid) {
    document.querySelector("form").submit();
  }
});
// login form handler
var psw  = document.querySelector('.psw');
psw.addEventListener('click', ()=>{
var contentslogin = document.querySelector('contents-login');
contentslogin.style.display = 'none';
});

//toggole function
/*
function togggoleFunction() {
  document.body.classList.toggle("dark-them")
}
*/