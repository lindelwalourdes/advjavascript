//capture forms submit button and use as event
function handleFormSubmit(event) {
    //we are preventing default form submit behaviour
    event.preventDefault();
    //getting the form that triggered the submit event
    const form = event.target;
    //taking the info from the form as a var
    const data = new FormData(form);
    //creating json obj
    const formJSON = {};

    for (let [key, value] of data.entries()) {
        // for multi-selects, we need special handling
        if (form.elements[key].type === 'select-multiple') {
            formJSON[key] = Array.from(value);
        } else {
            formJSON[key] = value;
            //we pushed the info into the json obj
        }
    } 
    const results = document.querySelector('.results pre');
    // Use `JSON.stringify()` to make the output valid, human-readable JSON.
    results.innerText = JSON.stringify(formJSON, null, 2);
}
//We find the form element using classname
const form = document.querySelector('.contact-form');
// attach the `handleFormSubmit()` function to the `submit` event.
form.addEventListener('submit', handleFormSubmit);
