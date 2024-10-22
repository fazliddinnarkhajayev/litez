// Handling filter selection and displaying border with an X icon for selected filters
document.querySelectorAll('.filter-option').forEach(option => {
    option.addEventListener('click', function () {
        const value = this.getAttribute('data-value');
        
        // Toggle the selection: if it's already selected, deselect it.
        if (this.classList.contains('selected')) {
            this.classList.remove('selected');
            // Remove the 'x' icon
            const removeTag = this.querySelector('.remove-tag');
            if (removeTag) {
                removeTag.remove();
            }
        } else {
            // Add the selected class and border with X icon
            this.classList.add('selected');

            // Create the remove-tag X icon
            const removeTag = document.createElement('span');
            removeTag.classList.add('remove-tag');
            removeTag.textContent = '×';
            this.appendChild(removeTag);

            // Add event listener to remove-tag to unselect the option
            removeTag.addEventListener('click', (event) => {
                event.stopPropagation(); // Prevent the click from triggering the parent button event
                this.classList.remove('selected');
                removeTag.remove(); // Remove the 'x' icon
            });
        }

        // After selecting or deselecting, check if all filters are selected
        checkAllFiltersSelected();
    });
});

// Handling the default option selection (select/deselect all filters)
const defaultOption = document.querySelector('.default-option .filter-option');
defaultOption.addEventListener('click', function () {
    const isSelected = this.classList.contains('selected');
    
    // If the default option is selected, deselect all
    if (isSelected) {
        this.classList.remove('selected');
        // Remove the 'x' icon from the default option
        const removeTag = this.querySelector('.remove-tag');
        if (removeTag) removeTag.remove();
        
        // Deselect all individual filter-options
        document.querySelectorAll('.filters .filter-option').forEach(option => {
            option.classList.remove('selected');
            const removeTag = option.querySelector('.remove-tag');
            if (removeTag) removeTag.remove();
        });
    } else {
        // If the default option is not selected, select it
        this.classList.add('selected');
        
        // Add the 'x' icon to the default option
        const removeTag = document.createElement('span');
        removeTag.classList.add('remove-tag');
        removeTag.textContent = '×';
        this.appendChild(removeTag);

        // Select all individual filter-options
        document.querySelectorAll('.filters .filter-option').forEach(option => {
            option.classList.add('selected');
            const removeTag = document.createElement('span');
            removeTag.classList.add('remove-tag');
            removeTag.textContent = '×';
            option.appendChild(removeTag);

            // Add event listener to remove-tag to unselect individual filters
            removeTag.addEventListener('click', (event) => {
                event.stopPropagation();
                option.classList.remove('selected');
                removeTag.remove();
                checkAllFiltersSelected();
            });
        });
    }
});

// Function to check if all filters are selected and sync with the default option
function checkAllFiltersSelected() {
    const allFilters = document.querySelectorAll('.filters .filter-option');
    const selectedFilters = document.querySelectorAll('.filters .filter-option.selected');
    const defaultOption = document.querySelector('.default-option .filter-option');
    
    // If all individual filters are selected, select the default option
    if (allFilters.length === selectedFilters.length) {
        if (!defaultOption.classList.contains('selected')) {
            defaultOption.classList.add('selected');
            const removeTag = document.createElement('span');
            removeTag.classList.add('remove-tag');
            removeTag.textContent = '×';
            defaultOption.appendChild(removeTag);

            // Add event listener to remove-tag in the default option
            removeTag.addEventListener('click', (event) => {
                event.stopPropagation();
                defaultOption.classList.remove('selected');
                removeTag.remove();
                document.querySelectorAll('.filters .filter-option').forEach(option => {
                    option.classList.remove('selected');
                    const removeTag = option.querySelector('.remove-tag');
                    if (removeTag) removeTag.remove();
                });
            });
        }
    } else {
        // If not all filters are selected, deselect the default option
        defaultOption.classList.remove('selected');
        const removeTag = defaultOption.querySelector('.remove-tag');
        if (removeTag) removeTag.remove();
    }
}
