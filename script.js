document.getElementById('menuToggle').addEventListener('click', function() {
    const sidebar = document.querySelector('.menu');
    sidebar.classList.toggle('close');
});

 // When the DOM is loaded, set the active link
 document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.menu__list-item a');
    // Check if there is an active page stored in localStorage
    const activePage = localStorage.getItem('activePage');

    // If there is, find the corresponding menu item and add the 'active' class
    if (activePage) {
      menuItems.forEach(item => {
        if (item.href.includes(activePage)) {
          item.parentElement.classList.add('active');
        }
      });
    }

    // Add click event listener to each menu item
    menuItems.forEach(item => {
      item.addEventListener('click', function () {
        // Save the clicked page in localStorage
        localStorage.setItem('activePage', this.getAttribute('href').toString().replace('.', ''));

        // Remove 'active' class from all menu items
        menuItems.forEach(el => el.parentElement.classList.remove('active'));

        // Add 'active' class to the clicked menu item
        this.parentElement.classList.add('active');
      });
    });
  });


document.querySelectorAll('.th-selected-option').forEach(selectBox => {
  console.log(selectBox)
  selectBox.addEventListener('click', function(event) {
    // Close all other selects
    document.querySelectorAll('.th-select').forEach(optionBox => {
      if (optionBox !== this.nextElementSibling) {
        optionBox.style.display = 'none';
      }
    });

    // Toggle the current select
    const options = this.nextElementSibling;
    if (options.style.display === 'flex') {
      options.style.display = 'none';
    } else {
      options.style.display = 'flex';
    }
  });
});

// Handle option selection
document.querySelectorAll('.th-select__option').forEach(option => {
  option.addEventListener('click', function () {
    const selectedText = this.textContent; // Get the text of the selected option
    const selectWrapper = this.closest('.th-select-wrapper'); // Find the wrapper of this select component
    const selectedOptionButton = selectWrapper.querySelector('.th-selected-option'); // Find the button to update
    const spanElement = selectedOptionButton.querySelector('span'); // Find the span to update the text
    
    // Update the button's span text
    spanElement.textContent = selectedText;

    // Disable the selected option and enable others
    document.querySelectorAll('.th-select__option').forEach(opt => {
      opt.disabled = false; // Enable all options first
      opt.style.opacity = '1'; // Reset opacity for all options
    });

    // Disable the currently selected option
    this.disabled = true; // Disable the clicked option
    this.style.opacity = '0.5'; // Dim the appearance of the disabled option

    // Hide the options after selection
    const selectMenu = selectWrapper.querySelector('.th-select');
    selectMenu.style.display = 'none';
  });
});

// Close selects when clicking outside of them
document.addEventListener('click', function(event) {
  if (!event.target.closest('.th-select-wrapper')) {
    document.querySelectorAll('.th-select').forEach(optionBox => {
      optionBox.style.display = 'none';
    });
  }
});

// Select all date inputs and their corresponding clear buttons
const dateInputs = document.querySelectorAll('.th-filter-data__input.date');
const clearButtons = document.querySelectorAll('.th-date-clear-button');

// Function to toggle clear button visibility
function toggleClearButton(input, button) {
    button.style.display = input.value ? 'inline-flex' : 'none'; // Show or hide based on input value
}

// Add event listeners to each date input
dateInputs.forEach((input, index) => {
    const button = clearButtons[index]; // Get the corresponding clear button

    // Check initial state
    toggleClearButton(input, button);

    // Event listener for input changes
    input.addEventListener('input', function () {
        toggleClearButton(this, button); // Toggle visibility when the input changes
    });

    // Event listener for the clear button
    button.addEventListener('click', function () {
        input.value = ''; // Clear the input value
        toggleClearButton(input, button); // Update button visibility
    });
});