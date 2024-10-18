// Get references to the elements
const selectedOption = document.querySelector('.selected-option');
const optionsWrapper = document.querySelector('.options-wrapper');
const allTimeOption = document.getElementById('allTimeOption');
const dateInput = document.querySelector('.date-input');
const saveDateBtn = document.querySelector('.save-date-btn');
const selectedText = selectedOption.querySelector('span');

// Toggle the options dropdown when clicking the selected option
selectedOption.addEventListener('click', function () {
    optionsWrapper.style.display = optionsWrapper.style.display === 'none' ? 'block' : 'none';
});

// Handle selection of "За весь период" option
allTimeOption.addEventListener('click', function () {
    selectedText.textContent = 'За весь период'; // Update selected text
    dateInput.value = ''; // Clear date input
    optionsWrapper.style.display = 'none'; // Close the dropdown
});

// Handle the Save button click event
saveDateBtn.addEventListener('click', function () {
    if (dateInput.value && !isNaN(Date.parse(dateInput.value))) {
        const selectedDate = new Date(dateInput.value).toLocaleDateString(); // Format the date
        selectedText.textContent = selectedDate; // Update selected text with the chosen date
        optionsWrapper.style.display = 'none'; // Close the dropdown
    } else {
        alert('Please select a valid date.');
    }
});

// Close the dropdown if clicking outside the select component
document.addEventListener('click', function (e) {
    if (!document.querySelector('.select-wrapper').contains(e.target)) {
        optionsWrapper.style.display = 'none';
    }
});
