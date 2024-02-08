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
fetch('https://opentdb.com/api.php?amount=1&category=23&difficulty=medium&type=multiple')
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
        var dataBase=data;
        console.log(dataBase);
        let item =0;
        // for (let item=0; item<dataBase.results.length; item++) {
            console.log(item);
            console.log(dataBase.results[item].question);
            document.getElementById('userQuestion').innerText = dataBase.results[0].question;
            console.log("Correct Answer: ", dataBase.results[item].correct_answer);
            document.getElementById('firstAns').innerText = dataBase.results[0].correct_answer;
            document.getElementById('flexRadioDefault1').value = dataBase.results[0].correct_answer;
            console.log(document.getElementById('flexRadioDefault1').value);
            console.log('fjdsklfjdskl');
            document.getElementById('2ndAns').innerText = dataBase.results[0].incorrect_answers[0];
            document.getElementById('3rdAns').innerText = dataBase.results[0].incorrect_answers[1];
            document.getElementById('4thAns').innerText = dataBase.results[0].incorrect_answers[2];
            console.log("Incorrect Answers: ", dataBase.results[item].incorrect_answers.join(", "));
            console.log("---------------------------");
            var userAnswer =dataBase.results[item].correct_answer;
            function handleClick(radioButton) {
                // Access the value of the clicked radio button
                const selectedValue = radioButton.value;
                if (selectedValue === userAnswer) { // Use === for comparison, not =
                    console.log('WOWOWO');
                }
                // Perform actions based on the selected value
                console.log("Selected value:", selectedValue);
                // Add more code to handle the click event as needed
            }
    
            // Attach the handleClick function to the click event of radio buttons
            document.getElementById('flexRadioDefault1').addEventListener('click', function () {
                handleClick(this); // 'this' refers to the clicked radio button
            });
            document.getElementById('flexRadioDefault2').addEventListener('click', function () {
                handleClick(this); // 'this' refers to the clicked radio button
            });
            document.getElementById('flexRadioDefault3').addEventListener('click', function () {
                handleClick(this); // 'this' refers to the clicked radio button
            });
            document.getElementById('flexRadioDefault4').addEventListener('click', function () {
                handleClick(this); // 'this' refers to the clicked radio button
            });
            
        })
    .catch(error => {
        // Handle errors
        console.error('There was a problem with the fetch operation:', error);
    });
// const jsonArray = JSON.stringify(dataBase);
// console.log(jsonArray); // Output: "[1,2,3,4,5]"
    // let item =0;
// for (let item=0; item<dataBase.results.length; item++) {
    // console.log(item);
    // console.log(dataBase.results[item].question);
    // document.getElementById('userQuestion').innerText = dataBase.results[0].question;
    // console.log("Correct Answer: ", dataBase.results[item].correct_answer);
    // document.getElementById('firstAns').innerText = dataBase.results[0].correct_answer;
    // document.getElementById('flexRadioDefault1').value = dataBase.results[0].correct_answer;
    // console.log(document.getElementById('flexRadioDefault1').value);
    // console.log('fjdsklfjdskl');
    // document.getElementById('2ndAns').innerText = dataBase.results[0].incorrect_answers[0];
    // document.getElementById('3rdAns').innerText = dataBase.results[0].incorrect_answers[1];
    // document.getElementById('4thAns').innerText = dataBase.results[0].incorrect_answers[2];
    // console.log("Incorrect Answers: ", dataBase.results[item].incorrect_answers.join(", "));
    // console.log("---------------------------");

    // let userAnswer= document.getElementsByTagName('flexRadioDefault');
    // function handleClick(radioButton) {
    //     // Access the value of the clicked radio button
    //     const selectedValue = radioButton.value;
    //     if (selectedValue=userAnswer){
    //         console.log('WOWOWO');
    //     }
    //     // Perform actions based on the selected value
    //     console.log("Selected value:", selectedValue);
    //     // Add more code to handle the click event as needed
    // }
        // if (selectedValue = dataBase.results[0].correct_answer){
        //     let increase =parseInt(document.getElementById('correctAnsCount').innertext);
        //     increase++;
        //     document.getElementById('correctAnsCount').innertext = increase;
        //     console.log(increase);
        // }
    
    // console.log(selectedValue);


// }
        // You can access the properties of the data object here
    
// let userAnswer= document.getElementsByTagName('flexRadioDefault');
// if (userAnswer.value = dataBase.results[item].correct_answer){
//     console.log('hahaha');
// }
// function handleClick(radioButton) {
//     // Access the value of the clicked radio button
//     var selectedValue = radioButton.value;
//     console.log(selectedValue); // Output the selected value
// }