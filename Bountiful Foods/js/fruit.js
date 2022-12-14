      // Make a request to get the JSON data from the URL you provided
      fetch('https://brotherblazzard.github.io/canvas-content/fruit.json')
        .then(function(response) {
          return response.json();
        })
        .then(function(json) {
          // Get the name values from the JSON data
          var names = json.map(function(fruit) {
            return fruit.name;
          });

          // Populate the first <select> element with the name values
          var fruit1 = document.getElementById('fruit1');
          names.forEach(function(name) {
            var option = document.createElement('option');
            option.value = name;
            option.text = name;
            fruit1.appendChild(option);
          });

          // Populate the second <select> element with the name values
          var fruit2 = document.getElementById('fruit2');
          names.forEach(function(name) {
            var option = document.createElement('option');
            option.value = name;
            option.text = name;
            fruit2.appendChild(option);
          });

          // Populate the third <select> element with the name values
          var fruit3 = document.getElementById('fruit3');
          names.forEach(function(name) {
            var option = document.createElement('option');
            option.value = name;
            option.text = name;
            fruit3.appendChild(option);
          });


          // Add an event listener for the submit button
        var submit = document.getElementById('submit');
        submit.addEventListener('click', function() {

        var textarea = document.getElementById('desc');
        var text = textarea.value;
        // Display the text on the page
        var result = document.getElementById('sample2');
        result.textContent = text;


        var fnameValue = document.getElementById('fname');
        var fname = fnameValue.value;
        var fnameResult = document.getElementById('sample3');
        fnameResult.textContent = fname;

        var emailValue = document.getElementById('email');
        var email = emailValue.value;
        var emailResult = document.getElementById('sample4');
        emailResult.textContent = email;

        var phoneValue = document.getElementById('phone');
        var phone = phoneValue.value;
        var phoneResult = document.getElementById('sample5');
        phoneResult.textContent = phone;


        // Get a reference to the date element
        const dateElement = document.getElementById('sample9');

        // Get the current date
        const currentDate = new Date();

        // Use the toLocaleDateString() method to format the date in the desired format
        const dateString = currentDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });

        // Set the innerHTML of the date element to the formatted date
        dateElement.innerHTML = dateString;


        // Get the selected fruits
        var selected1 = fruit1.options[fruit1.selectedIndex].value;
        var selected2 = fruit2.options[fruit2.selectedIndex].value;
        var selected3 = fruit3.options[fruit3.selectedIndex].value;
        var selected = [selected1, selected2, selected3];

        var selected1Result = document.getElementById('sample6');
        selected1Result.textContent = selected1
        var selectedResult2 = document.getElementById('sample7');
        selectedResult2.textContent = selected2
        var selected3Result = document.getElementById('sample8');
        selected3Result.textContent = selected3

        // Calculate the sum of the nutrition values for the selected fruits
        var carbs = 0;
        var calories = 0;
        var fat = 0;
        var sugar = 0;
        var protein = 0;
        selected.forEach(function(name) {
            // Find the fruit object with the matching name
            var fruit = json.find(function(f) {
            return f.name === name;
            });

            // Add the fruit's nutrition value to the sum
            carbs += fruit.nutritions.carbohydrates;
            calories += fruit.nutritions.calories;
            fat += fruit.nutritions.fat;
            sugar += fruit.nutritions.sugar;
            protein += fruit.nutritions.protein;
        });

        // Display the result on the page
        var result = document.getElementById('sample');
        result.textContent = `Total Calories: ${calories.toFixed(2)}\n Total Carbohydrates: ${carbs.toFixed(2)}\n 
         Total Fat: ${fat.toFixed(2)}\n Total Sugar: ${sugar.toFixed(2)}\n Total Protein: ${protein.toFixed(2)}`;
        });
    })