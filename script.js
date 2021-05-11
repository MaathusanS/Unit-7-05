let userDay = 0 // Defines userDay as variable.
let userAge = 0 // Defines userAge as variable.

document.getElementById('trigger').addEventListener('click', school) // Starts addEventListener for button that triggers school function.

function school () {
  userDay = prompt('Please enter the day', 'Tuesday') // Creates a prompt for user to enter the day.
  userAge = prompt('Now enter your age', '13') // Creates a prompt for user to enter their age.

  userAge = parseInt(userAge) // Converts user's age into integer

  if ((userDay !== 'Saturday' && userDay !== 'Sunday') && (userAge < 18)) { // Makes if statement that is satisfied when the day isn't Saturday or Sunday and the user's age is under 18.
    document.getElementById('result').innerHTML = 'You have school today.' // Prints this text when the above is true.
  } else if ((userDay !== 'Saturday' && userDay !== 'Sunday') && (userAge >= 18)) { // Makes else if statement that is satisfied when the day isn't Saturday and the user's age is 18 or older.
    document.getElementById('result').innerHTML = 'You do not have school, but you have work.' // Prints this text when the above is true.
  } else {
    document.getElementById('result').innerHTML = 'No school or work, enjoy your weekend!' // Prints this text if none of the above is true.
  }
}
