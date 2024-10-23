// Function to initialize custom select functionality
function initializeCustomSelect(selectWrapper) {
    const selectedOption = selectWrapper.querySelector('.selected-option');
    const optionsWrapper = selectWrapper.querySelector('.options-wrapper');
    const allTimeOption = selectWrapper.querySelector('.select__option');
    const dateInput = selectWrapper.querySelector('.date-input');
    const saveDateBtn = selectWrapper.querySelector('.save-date-btn');
    const selectedText = selectedOption.querySelector('span');

    // Toggle the options dropdown when clicking the selected option
    selectedOption.addEventListener('click', function (e) {
        e.stopPropagation(); // Prevent event bubbling
        const isOpen = optionsWrapper.style.display === 'block';
        closeAllDropdowns(); // Close other dropdowns first
        optionsWrapper.style.display = isOpen ? 'none' : 'block'; // Toggle this one
    });

    // Handle selection of "За весь период" option
    allTimeOption.addEventListener('click', function (e) {
        selectedText.textContent = e.target.innerText; // Update selected text
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

    // Close dropdown if clicking outside the select component
    document.addEventListener('click', function (e) {
        if (!selectWrapper.contains(e.target)) {
            optionsWrapper.style.display = 'none';
        }
    });
}

// Function to close all dropdowns
function closeAllDropdowns() {
    const allOptionsWrappers = document.querySelectorAll('.options-wrapper');
    allOptionsWrappers.forEach(wrapper => {
        wrapper.style.display = 'none';
    });
}

// Initialize all custom selects on the page
const allSelectWrappers = document.querySelectorAll('.select-wrapper');
allSelectWrappers.forEach(initializeCustomSelect);
