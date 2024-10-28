// Sidebar toggle
document.getElementById('menuToggle').addEventListener('click', function () {
  const sidebar = document.querySelector('.menu');
  sidebar.classList.toggle('close');
});

// Set active menu link based on localStorage
document.addEventListener('DOMContentLoaded', function () {
  const menuItems = document.querySelectorAll('.menu__list-item a');
  const activePage = localStorage.getItem('activePage');

  if (activePage) {
      menuItems.forEach(item => {
          if (item.href.includes(activePage)) {
              item.parentElement.classList.add('active');
          }
      });
  }

  // Set active class on click and store in localStorage
  menuItems.forEach(item => {
      item.addEventListener('click', function () {
          localStorage.setItem('activePage', this.getAttribute('href').toString().replace('.', ''));
          menuItems.forEach(el => el.parentElement.classList.remove('active'));
          this.parentElement.classList.add('active');
      });
  });
});

// Custom select handling
document.querySelectorAll('.th-selected-option').forEach(selectBox => {
  selectBox.addEventListener('click', function (event) {
      // Close all other selects
      document.querySelectorAll('.th-select').forEach(optionBox => {
          if (optionBox !== this.nextElementSibling) {
              optionBox.style.display = 'none';
          }
      });

      // Toggle current select
      const options = this.nextElementSibling;
      options.style.display = options.style.display === 'flex' ? 'none' : 'flex';
  });
});

// Handle option selection in the custom select dropdown
document.querySelectorAll('.th-select__option').forEach(option => {
  option.addEventListener('click', function () {
      const selectedText = this.textContent;
      const selectWrapper = this.closest('.th-select-wrapper');
      const selectedOptionButton = selectWrapper.querySelector('.th-selected-option');
      const spanElement = selectedOptionButton.querySelector('span');

      // Update button text with the selected option
      spanElement.textContent = selectedText;

      // Reset all options, disable the selected one, and hide the menu
      document.querySelectorAll('.th-select__option').forEach(opt => {
          opt.disabled = false;
          opt.style.opacity = '1';
      });
      this.disabled = true;
      this.style.opacity = '0.5';

      const selectMenu = selectWrapper.querySelector('.th-select');
      selectMenu.style.display = 'none';
  });
});

// Close custom selects when clicking outside
document.addEventListener('click', function (event) {
  if (!event.target.closest('.th-select-wrapper')) {
      document.querySelectorAll('.th-select').forEach(optionBox => {
          optionBox.style.display = 'none';
      });
  }
});

// Date inputs and clear button handling
const dateInputs = document.querySelectorAll('.th-filter-data__input.date');
const clearButtons = document.querySelectorAll('.th-date-clear-button');

// Function to toggle clear button visibility based on input value
function toggleClearButton(input, button) {
  button.style.display = input.value ? 'inline-flex' : 'none';
}

// Initialize date input and clear button event listeners
dateInputs.forEach((input, index) => {
  const button = clearButtons[index];

  // Initial check
  toggleClearButton(input, button);

  // Toggle button visibility on input change
  input.addEventListener('input', function () {
      toggleClearButton(this, button);
  });

  // Clear input value when button is clicked
  button.addEventListener('click', function () {
      input.value = '';
      toggleClearButton(input, button);
  });
});

// Select the "Читать далее" button and the containing div
document.querySelectorAll('.td-data .read-more').forEach(button => {
  button.addEventListener('click', function() {
      // Toggle the 'text-wrap' class on the closest .td-data element
      this.closest('.td-data').classList.toggle('text-wrap');
  });
});
