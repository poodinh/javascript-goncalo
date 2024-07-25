document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the button ID from local storage
    const buttonId = localStorage.getItem('clickedButtonId');
    console.log('Retrieved Button ID:', buttonId);

    // Display the button ID on the page
    if (buttonId) {
        document.getElementById('buttonIdDisplay').textContent = `Button ID: ${buttonId}`;
    } else {
        document.getElementById('buttonIdDisplay').textContent = 'No button ID found.';
    }
});
