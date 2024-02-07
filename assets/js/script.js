// // Select the radio buttons by their name attribute
// const radioButtons = document.querySelectorAll('input[name="flexRadioDefault"]');

// // Add event listener to each radio button
// radioButtons.forEach(radioButton => {
//     radioButton.addEventListener('click', function() {
//         // Get the value of the selected radio button
//         const selectedValue = this.value;
//         console.log(selectedValue); // Output the selected value
//     });
// });

function handleClick(radioButton) {
    // Access the value of the clicked radio button
    const selectedValue = radioButton.value;
    console.log(selectedValue); // Output the selected value
}