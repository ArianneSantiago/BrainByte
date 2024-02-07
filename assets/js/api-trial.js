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
    // console.log(item);
    console.log(dataBase.results[item].question);
    console.log("Correct Answer: ", dataBase.results[item].correct_answer);
    console.log("Incorrect Answers: ", dataBase.results[item].incorrect_answers.join(", "));
    console.log("---------------------------");

}
        // You can access the properties of the data object here
    })
    .catch(error => {
        // Handle errors
        console.error('There was a problem with the fetch operation:', error);
    });


// const dataBase=data;
// const jsonArray = JSON.stringify(dataBase);
// console.log(jsonArray); // Output: "[1,2,3,4,5]"
// for (let item=0; item<dataBase.results.length; item++) {
//     console.log(item);
//     console.log(dataBase.results[item].question);
//     console.log("Correct Answer: ", dataBase.results[item].correct_answer);
//     console.log("Incorrect Answers: ", dataBase.results[item].incorrect_answers.join(", "));
//     console.log("---------------------------");

// }
