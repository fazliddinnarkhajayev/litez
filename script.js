document.getElementById('menuToggle').addEventListener('click', function() {
    const sidebar = document.querySelector('.menu');
    sidebar.classList.toggle('close');
});

// document.getElementById('toggleButton').addEventListener('click', function() {
//     const sidebar = document.querySelector('.sidebar');
//     sidebar.classList.toggle('active');
// });


 // When the DOM is loaded, set the active link
 document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.menu__list-item a');
console.log(menuItems)
    // Check if there is an active page stored in localStorage
    const activePage = localStorage.getItem('activePage');

    // If there is, find the corresponding menu item and add the 'active' class
    console.log(activePage)
    if (activePage) {
      menuItems.forEach(item => {
        console.log(item.href.includes(activePage), item.href, item.innerText, activePage)
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