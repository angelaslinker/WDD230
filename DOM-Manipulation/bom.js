// Selects elements by ID and Class
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const output = document.querySelector(".list");

// When button is clicked, check if the input input value is blank
// If input value is not blank, a new li element is created
// li text content is now set equal to the user input
button.addEventListener('click', () => {
    let li = document.createElement('li');
    li.textContent = input.value;

// creates delete button and adds delete button icon
    let deletebutton = document.createElement
    ('button');
    deletebutton.textContent = '❌';
// Appends user input with delete button next to it
    li.append(deletebutton);
    output.append(li);

// Creates delete button that removes child element when clicked
        deletebutton.addEventListener('click', function ()
        {
            output.removeChild(li);
            input.focus;
        });
        input.value = '';
        input.focus;
    }
);