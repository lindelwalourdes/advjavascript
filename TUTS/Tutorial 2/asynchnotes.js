//ASYNC

// Declare function
function fetchData(callback) {
    setTimeout(() => {
      const data = {name: "John", age: 30};
      callback(data);
    }, 3000);
  }
  
  // Execute function with a callback
  fetchData(function(data) {
    console.log(data);
  });
  
  console.log("Data is being fetched...");

// Is doing code a step at time in order given.
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello from the promise!");
    }, 2000);
});

myPromise 
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
}) .finally(() => {
   console.log("Code is done!")
});

// THEN 
fetch('https://example.com/data')
    .then(response => response.json())
    .then(data => processData(data))
    .then(processedData => {
        // do something with the processed data
    })
    .catch(error => console.log(error))
    