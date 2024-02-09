let dataBase = [];
let correctlyAnswered = [];
let wronglyAnswered = [];
let start=0

let catDiff = JSON.parse(localStorage.getItem('catDiff'));

// let decr=-1;


// Define the URL for the API
let urlName = "";
let catagoryButtonValue = catDiff[0];
let dificultyButtonValue = catDiff[1];
urlName = `https://opentdb.com/api.php?amount=10&category=${catagoryButtonValue}&difficulty=${dificultyButtonValue}&type=multiple`;
// urlName='https://opentdb.com/api.php?amount=29&category=25'
// Fetch data from the URL
fetch(urlName)
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
        dataBase = data.results;
        // Call a function to handle the fetched data
        handleFetchedData();
    })
    .catch(error => {
        // Handle errors
        console.error('There was a problem with the fetch operation:', error);
    });

// Function to handle the fetched data
function handleFetchedData() {
    
    function handleClick(radioButton) {
    
    let item = 0;
    console.log(dataBase[item]);
    console.log(dataBase[item].question);
    document.getElementById('userQuestion').innerText = dataBase[0].question;
    console.log("Correct Answer: ", dataBase[item].correct_answer);
    document.getElementById('firstAns').innerText = dataBase[0].correct_answer;
    document.getElementById('flexRadioDefault1').value = dataBase[0].correct_answer;
    console.log(document.getElementById('flexRadioDefault1').value);
    console.log('fjdsklfjdskl');
    document.getElementById('2ndAns').innerText = dataBase[0].incorrect_answers[0];
    document.getElementById('3rdAns').innerText = dataBase[0].incorrect_answers[1];
    document.getElementById('4thAns').innerText = dataBase[0].incorrect_answers[2];
    console.log("Incorrect Answers: ", dataBase[item].incorrect_answers.join(", "));
    console.log("---------------------------");
    var userAnswer = dataBase[item].correct_answer;
    
   

    // Access the value of the clicked radio button
        let radioButtons = document.getElementsByName('flexRadioDefault');

        // Iterate through all radio buttons to find the selected one
        let selectedValue;
        for (let i = 0; i < radioButtons.length; i++) {
            if (radioButtons[i].checked) {
                selectedValue = radioButtons[i].value;
                break; // Stop iterating once a selected radio button is found
            }
        }

        // Now you have the selected value
        console.log('Selected value:', selectedValue);
        // const selectedValue = radioButton.value;
        if (selectedValue === userAnswer) { // Use === for comparison, not =
            
            if (start !== 0){
                console.log('WOWOWO');
                let incr = parseInt(document.getElementById('correctAnsCount').innerText);
                console.log(incr);
                incr++;
                document.getElementById('correctAnsCount').innerText = incr;
                console.log(incr);
                // Add the question to the correctly answered questions Array.
                correctlyAnswered.push(dataBase[0]);
                console.log(correctlyAnswered);

                // If the element is found, remove it
                dataBase.splice(0, 1);
                console.log(dataBase);
            }
        } else {
            if (start !== 0){

                console.log('NoNoNo');
                let decr = parseInt(document.getElementById('wrongAnsCount').innerText);
                console.log(decr);
                decr++;
                document.getElementById('wrongAnsCount').innerText = decr;
                
                console.log(decr);
                // Add the question to the correctly answered questions Array.
                wronglyAnswered.push(dataBase[0]);
                console.log(wronglyAnswered);

                // If the element is found, remove it
                dataBase.splice(0, 1);
                console.log(dataBase);
            }
        }
        // Perform actions based on the selected value
        console.log("Selected value:", selectedValue);
        // Add more code to handle the click event as needed
        start =1;
    }

    // Attach the handleClick function to the click event of the "Next" button
    document.getElementById('next').addEventListener('click', function () {
        handleClick(this); // 'this' refers to the clicked button
    });
}

// Attach the handleClick function to the click event of the "Next" button
 