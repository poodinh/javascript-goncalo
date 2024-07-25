document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            const buttonId = event.target.id;
            console.log('Button ID:', buttonId);

            // Store the button ID in local storage
            localStorage.setItem('clickedButtonId', buttonId);
        });
    });
});
