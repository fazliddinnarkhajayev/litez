// Custom select handling
document.querySelectorAll('.pg-selected-option').forEach(selectBox => {
    selectBox.addEventListener('click', function (event) {
        // Close all other selects
        document.querySelectorAll('.pg-options-wrapper').forEach(optionBox => {
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
  document.querySelectorAll('.pg-select__option').forEach(option => {
    option.addEventListener('click', function () {
        const selectedText = this.textContent;
        const selectWrapper = this.closest('.pagination__select-wrapper');
        const selectedOptionButton = selectWrapper.querySelector('.pg-selected-option');
        const spanElement = selectedOptionButton.querySelector('span');
  
        // Update button text with the selected option
        spanElement.textContent = selectedText;
  
        // Reset all options, disable the selected one, and hide the menu
        document.querySelectorAll('.pg-select__option').forEach(opt => {
            opt.disabled = false;
            opt.style.opacity = '1';
        });
        this.disabled = true;
        this.style.opacity = '0.5';
  
        const selectMenu = selectWrapper.querySelector('.pg-options-wrapper');
        selectMenu.style.display = 'none';
    });
  });
  
  // Close custom selects when clicking outside
  document.addEventListener('click', function (event) {
    if (!event.target.closest('.pagination__select-wrapper')) {
        document.querySelectorAll('.pg-options-wrapper').forEach(optionBox => {
            optionBox.style.display = 'none';
        });
    }
  });