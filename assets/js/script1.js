let dataBase = [];
let correctlyAnswered = [];
let wronglyAnswered = [];
let selectedValue;

// Putting the URL Name for the API together 
let urlName = "";
let catagoryButtonValue = '23';
let dificultyButtonValue = 'medium'
urlName = `https://opentdb.com/api.php?amount=10&category=${catagoryButtonValue}&difficulty=${dificultyButtonValue}&type=multiple`;
console.log(urlName);

// Fetch data from the URL
// fetch('https://opentdb.com/api.php?amount=1&category=23&difficulty=medium&type=multiple')
fetch(`${urlName}`)
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

        dataBase = data.results;
        console.log(dataBase);
        nextQuestion();
        function nextQuestion(){

                let item = 0;
                console.log(item);
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
                var rightAnswer = dataBase[item].correct_answer;

            function handleClick(radioButton) {
                // Access the value of the clicked radio button
                let radioButtons = document.getElementsByName('flexRadioDefault');

                // Iterate through all radio buttons to find the selected one
                
                for (let i = 0; i < radioButtons.length; i++) {
                    if (radioButtons[i].checked) {
                        selectedValue = radioButtons[i].value;
                        break; // Stop iterating once a selected radio button is found
                    }
                }
                // Now you have the selected value
                console.log('Selected value:', selectedValue);
                // const selectedValue = radioButton.value;
                if (selectedValue === rightAnswer) { // Use === for comparison, not =
                    console.log('WOWOWO');
                    let incr = parseInt(document.getElementById('correctAnsCount').innerText);
                    console.log(incr);
                    incr++;
                    document.getElementById('correctAnsCount').innerText = incr;
                    console.log(incr);
                    // Add the question to the correctly answered questions Array.
                    correctlyAnswered.push(dataBase[0]);
                    console.log(correctlyAnswered);
                    dataBase.splice(0, 1);


                    console.log(dataBase);
                } else {
                    console.log('NoNoNo');
                    let decr = parseInt(document.getElementById('wrongAnsCount').innerText);
                    console.log(decr);
                    decr++;
                    document.getElementById('wrongAnsCount').innerText = decr;
                    console.log(decr);
                    // Add the question to the correctly answered questions Array.
                    wronglyAnswered.push(dataBase[0]);
                    console.log(wronglyAnswered);

                    // let indexToRemove = dataBase.indexOf("this");
                    // If the element is found, remove it
                    // if (indexToRemove !== -1) {
                    dataBase.splice(0, 1);
                    console.log(dataBase);
                }
            // Perform actions based on the selected value
            console.log("Selected value:", selectedValue);
            // Add more code to handle the click event as needed
        }
    }
        // Attach the handleClick function to the click event of radio buttons
        document.getElementById('ok').addEventListener('click', function () {
            handleClick(this); // 'this' refers to the clicked radio button
        });
        document.getElementById('next').addEventListener('click', function () {
                nextClick(this); // 'this' refers to the clicked radio button
        });
    })
    .catch(error => {
        // Handle errors
        console.error('There was a problem with the fetch operation:', error);
    });
