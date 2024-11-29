console.log("I am the first ")
console.log("I am second ")
console.log("I am third")
setTimeout(() => {
    console.log("I want to display")
}, 1000);
console.log("U r Thinking that I will print in last")
function fetchData(callback) {
    console.log("Fetching data...");
    setTimeout(() => {
        console.log("Data fetched!");
        callback(); // Call the callback function after completion
    }, 2000);
}

function processData() {
    console.log("Processing data...");
}

fetchData(processData);
