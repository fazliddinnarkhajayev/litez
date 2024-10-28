document.querySelectorAll('.filter-option').forEach(option => {
    option.addEventListener('click', function () {
        const value = this.getAttribute('data-value');
        // Skip adding the 'x' icon if it's the "Все заказы" option
        if (value === null) {
            this.classList.toggle('selected');
            return;
        }

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
        console.log('asd')
        checkAllFiltersSelected();
    });
});

// Function to check if all filters are selected and sync with the default option
function checkAllFiltersSelected() {
    const allFilters = document.querySelectorAll('.filters .filter-option');
    const selectedFilters = document.querySelectorAll('.filters .filter-option.selected');
    const defaultOption = document.querySelector('.default-option .default-filter-option');

    // If all individual filters are selected, select the default option
    console.log(allFilters.length, selectedFilters.length)
    if (allFilters.length === selectedFilters.length || selectedFilters.length == 0) {
        defaultOption.classList.add('selected');
    } else {
        // If not all filters are selected, deselect the default option
        defaultOption.classList.remove('selected');
    }
}
