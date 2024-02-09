
let catDiff = [];
let difficultyLevel = '';
let category = '';

document.addEventListener('DOMContentLoaded', function () {
    // Get all buttons with the name 'catag'
    const categoryButtons = document.getElementsByName('catag');

    // Add event listeners to each category button
    categoryButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            // Prevent the default action of the link
            event.preventDefault();

            // Get the category from the button's text content
            category = button.textContent.trim();

            // Log the selected category
            console.log('Selected category:', category);
            updateCatDiff(); // Update catDiff array with selected category and difficulty
        });
    });

    // Get all radio buttons for difficulty level
    const difficultyRadios = document.querySelectorAll('input[name="difficulty"]');

    // Add event listener to each difficulty radio button
    difficultyRadios.forEach(radio => {
        radio.addEventListener('change', function () {
            // Get the selected difficulty level
            difficultyLevel = radio.value;

            // Log the selected difficulty level
            console.log('Selected difficulty level:', difficultyLevel);
            updateCatDiff(); // Update catDiff array with selected category and difficulty
        });
    });

    // Function to update catDiff array with selected category and difficulty
    function updateCatDiff() {
        catDiff = [category, difficultyLevel];
        console.log(catDiff);
    }
});