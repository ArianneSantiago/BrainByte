
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

            // Reset background color for all buttons
            categoryButtons.forEach(btn => {
                btn.style.backgroundColor = ''; // Reset color
            });

            // Set background color for the clicked button
            button.style.backgroundColor = '#F7A2FE'; // Change color to blue (you can set any color)

            // Get the category from the button's text content
            category = button.textContent.trim();
            console.log(category)
            if (category === "General Knowledge") {
                category = 9;
            } else if (category === "Sports") {
                category = 21;
            } else if (category === "Animals") {
                category = 27;
            } else if (category === "History") {
                category = 23;
            }

            // Log the selected category
            console.log('Selected category:', category);

            // Update catDiff array with selected category and difficulty
            updateCatDiff();
        });
    });

// document.addEventListener('DOMContentLoaded', function () {
//     // Get all buttons with the name 'catag'
//     const categoryButtons = document.getElementsByName('catag');

//     // Add event listeners to each category button
//     categoryButtons.forEach(button => {
//             button.addEventListener('click', function (event) {
//             // Prevent the default action of the link
//             event.preventDefault();
//             button.style.backgroundColor = '#F7A2FE';
//             // Get the category from the button's text content
    
//             category = button.textContent.trim();
//             if (category === "General Knowledge"){
//                 category = 9;
//             } else if (category === "Sports"){
//                 category = 21;
//             } else if(category === "Animals"){
//                 category = 27;
//             } else if(category === "History"){
//                 category = 23;
//             }
//             
//         });
//     });


 // Get all radio buttons for difficulty level
const difficultyRadios = document.querySelectorAll('input[name="difficulty"]');

// Add event listener to each difficulty radio button
difficultyRadios.forEach(radio => {
    radio.addEventListener('change', function () {
        // Remove color from all radio buttons
        difficultyRadios.forEach(r => {
            r.parentElement.style.backgroundColor = ''; // Reset color
        });

        // Set color for the selected radio button
        this.parentElement.style.backgroundColor = '#F7A2FE'; // Change color to blue (you can set any color)

        // Get the selected difficulty level
        difficultyLevel = this.value;

        // Log the selected difficulty level
        console.log('Selected difficulty level:', difficultyLevel);

        // Update catDiff array with selected category and difficulty
        updateCatDiff();
    });
});



    // // Add event listener to each difficulty radio button
    // difficultyRadios.forEach(radio => {
    //     radio.addEventListener('change', function () {
    //         // Get the selected difficulty level
    //         difficultyLevel = radio.value;
            
    //         // Log the selected difficulty level
    //         console.log('Selected difficulty level:', difficultyLevel);
    //         updateCatDiff(); // Update catDiff array with selected category and difficulty
    //     });
    // });

    // Function to update catDiff array with selected category and difficulty
    function updateCatDiff() {
        catDiff = [category, difficultyLevel];
        console.log(catDiff);
        localStorage.setItem('catDiff', JSON.stringify(catDiff));
    }
    updateCatDiff();
});