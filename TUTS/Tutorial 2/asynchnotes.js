//SYNC
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
