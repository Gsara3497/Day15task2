document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Retrieve form values
    var firstName = document.getElementById('first-name').value;
    var lastName = document.getElementById('last-name').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    var pincode = document.getElementById('pincode').value;
    var gender = getSelectedGender();
    var food = getSelectedFood();
    var state = document.getElementById('state').value;
    var country = document.getElementById('country').value;
    
  
    // Append values to table
    var tableBody = document.getElementById('tableBody');
    var newRow = tableBody.insertRow();
    newRow.innerHTML = '<td>' + firstName + '</td><td>' + lastName + '</td><td>' + email + '</td><td>'+ address +'</td><td>' + pincode + '</td><td>' + gender + '</td><td>' + food.join(', ') + '</td><td>' + state + '</td><td>' + country + '</td>';
    
    // Clear form fields
    document.getElementById('form').reset();
  });
  
  function getSelectedFood() {
    var foodCheckboxes = document.getElementsByName('food');
    var selectedFood = [];
    for (var i = 0; i < foodCheckboxes.length; i++) {
      if (foodCheckboxes[i].checked) {
        selectedFood.push(foodCheckboxes[i].value);
      }
    }
    return selectedFood;
  }
  function getSelectedGender() {
    var foodCheckboxes = document.getElementsByName('gender');
    var selectedGender= [];
    for (var i = 0; i < foodCheckboxes.length; i++) {
      if (foodCheckboxes[i].checked) {
        selectedGender.push(foodCheckboxes[i].value);
      }
    }
    return selectedGender;
  }
  