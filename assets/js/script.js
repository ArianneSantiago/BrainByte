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


// Fetch data from the URL
fetch('https://opentdb.com/api.php?amount=10')
    .then(response => {
        // Check if the response is successful
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // Parse the JSON response
        return response.json();
    })
    .then(data => {
        // Work with the JSON data
        console.log(data);
        const dataBase=data;
// const jsonArray = JSON.stringify(dataBase);
// console.log(jsonArray); // Output: "[1,2,3,4,5]"
for (let item=0; item<dataBase.results.length; item++) {
    console.log(item);
    console.log(dataBase.results[item].question);
    document.getElementById('userQuestion').innerText = dataBase.results[0].question;
    console.log("Correct Answer: ", dataBase.results[item].correct_answer);
    document.getElementById('firstAns').innerText = dataBase.results[0].correct_answer;
    document.getElementById('2ndAns').innerText = dataBase.results[0].incorrect_answers[0];
    document.getElementById('3rdAns').innerText = dataBase.results[0].incorrect_answers[1];
    document.getElementById('4thAns').innerText = dataBase.results[0].incorrect_answers[2];
    console.log("Incorrect Answers: ", dataBase.results[item].incorrect_answers.join(", "));
    console.log("---------------------------");
    // let userAnswer= document.getElementsByTagName('flexRadioDefault');
if (selectedValue = dataBase.results[0].correct_answer){
    console.log(userAnswer.value);
}

}
        // You can access the properties of the data object here
    })
    .catch(error => {
        // Handle errors
        console.error('There was a problem with the fetch operation:', error);
    });

// let userAnswer= document.getElementsByTagName('flexRadioDefault');
// if (userAnswer.value = dataBase.results[item].correct_answer){
//     console.log('hahaha');
// }
function handleClick(radioButton) {
    // Access the value of the clicked radio button
    var selectedValue = radioButton.value;
    // console.log(selectedValue); // Output the selected value
}