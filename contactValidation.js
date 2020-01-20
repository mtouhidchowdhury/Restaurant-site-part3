

function validateInfo () {
  var nameInput = document.getElementById("name"),
    emailInput = document.getElementById("email"),
    phoneInput = document.getElementById("phone"),
    reasonInput = document.getElementById("reason"),
    infoContact = document.getElementById("info");
  
  var message = "";
//make sure that the user is putting in all required information 
//later versions can validate that the user put the correct format of certain information such as phone number, email

  if (!(nameInput.value && emailInput.value && phoneInput.value)) {
    if(!nameInput.value) message+="\u25B6 Please enter your name\n\n"
    else message+="\u25B6 Enter your phone and email to contact you\n\n";
  }

  if (reasonInput.value == "other" && !infoContact.value) {
    message+="\u25B6 (Other) Explain your reason for inquiring in the Additional Information section\n\n";
  }

  var daysAvailable = document.querySelectorAll('input[type="checkbox"]:checked').length;
  if (daysAvailable < 1) {
    message+="\u25B6 Please select at least one day. \n\n";
  }

  if (message) {
    alert(message);
    return false;
  }
  else{
  alert("Thank you for completing the form. We will contact you as soon as possible.")
  }
}