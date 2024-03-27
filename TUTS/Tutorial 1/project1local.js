
const localTodoTasksArray = [];
const localTodosContainer = document.getElementById(
  'local-storage-todos-container'
);
const localInputEle = document.getElementById('local-storage-todo-input-ele');
const localAddTaskBtn = document.getElementById('local-storage-add-task-btn');

const sessionTodoTasksArray = [];
const sessionTodosContainer = document.getElementById(
  'session-storage-todos-container'
);
const sessionInputEle = document.getElementById(
  'session-storage-todo-input-ele'
);
const sessionAddTaskBtn = document.getElementById(
  'session-storage-add-task-btn'
);

function createTodoLiElements(todoArray, sectionType) {
  // Return an array of <li> elements
  // Example:
  // [
  //   <li>
  //     <input type="checkbox" id="local-chbx-0" />
  //     <label for="local-chbx-0">Dance</label>
  //   </li>,
  //   <li>
  //     <input type="checkbox" id="local-chbx-1" />
  //     <label for="local-chbx-1">Sing</label>
  //   </li>
  // ]
  return todoArray.map((i, index) => {
    // Create 3 elements:
    const liElement = document.createElement('li');
    const checkboxEle = document.createElement('input');
    const labelEle = document.createElement('label');

    // Add 2 attributes to the <input> element:
    checkboxEle.setAttribute('type', 'checkbox');
    checkboxEle.setAttribute('id', `${sectionType}-chbx-${index}`);

    // Add 1 attribute to the <label> element:
    labelEle.setAttribute('for', `${sectionType}-chbx-${index}`);

    // Add a click event to the <input> element:
    checkboxEle.addEventListener('click', (e) => {
      todoArray[e.target.getAttribute('id').split('-')[2]].checked =
        !todoArray[e.target.getAttribute('id').split('-')[2]].checked;
      labelEle.classList.toggle('todo-task-done');
    });

    labelEle.textContent = i.text; // Add text to the <label> element
    liElement.append(checkboxEle, labelEle); // Put <input> and <label> inside the <li>
    return liElement;
  });
}

// Add a click event to the Local section's button:
// localAddTaskBtn.addEventListener('click', () => {
//   const newTodoInfo = { checked: false, text: localInputEle.value };
//   localTodoTasksArray.push(newTodoInfo);

//   const todoLiElements = createTodoLiElements(localTodoTasksArray, 'local');
//   localTodosContainer.replaceChildren(...todoLiElements);
//   localInputEle.value = '';
// });

// Add a click event to the Session section's button:
// sessionAddTaskBtn.addEventListener('click', () => {
//   const newTodoInfo = { checked: false, text: sessionInputEle.value };
//   sessionTodoTasksArray.push(newTodoInfo);

//   const todoLiElements = createTodoLiElements(sessionTodoTasksArray, 'session');
//   sessionTodosContainer.replaceChildren(...todoLiElements);
//   sessionInputEle.value = '';
// });

localAddTaskBtn.addEventListener('click', () => {
    const currentTodoInfo = JSON.parse(localStorage.getItem('codesweetlyStore')) || [];

    const newTodoInfo =[
        ...currentTodoInfo,
        { checked: false, text: localInputEle.value }];
    localStorage.setItem('codesweetlyStore', JSON.stringify(newTodoInfo));
  
    const todoLiElements = createTodoLiElements(newTodoInfo);
    localTodosContainer.replaceChildren(...todoLiElements);
    localInputEle.value = '';
  });
  window.addEventListener('load', () => {
    // Get existing local storage's content, if any. Otherwise, return an empty array:
    const localTodoArray =
      JSON.parse(localStorage.getItem('codesweetlyStore')) || [];
  
    // Use the retrieved localTodoArray to create <li> elements:
    const todoLiElements = createTodoLiElements(localTodoArray);
  
    // Populate the tasks display space with the todoLiElements:
    localTodosContainer.replaceChildren(...todoLiElements);
  });








  sessionAddTaskBtn.addEventListener('click', () => {
    const currentTodoInfo =  JSON.parse(sessionStorage.getItem('codesweetlyStore')) || [];

    const newTodoInfo = [
        ...currentTodoInfo,
        { checked: false, text: sessionInputEle.value }];

  sessionStorage.setItem('codesweetlyStore', JSON.stringify(newTodoInfo));
  
    const todoLiElements = createTodoLiElements(newTodoInfo);
    sessionTodosContainer.replaceChildren(...todoLiElements);
    sessionInputEle.value = '';
  });

  window.addEventListener('load', () => {
    // Get existing session storage's content, if any. Otherwise, return an empty array:
    const sessionTodoArray =
      JSON.parse(sessionStorage.getItem('codesweetlyStore')) || [];
  
    // Use the retrieved sessionTodoArray to create <li> elements:
    const todoLiElements = createTodoLiElements(sessionTodoArray);
  
    // Populate the tasks display space with the todoLiElements:
    sessionTodosContainer.replaceChildren(...todoLiElements);
  });
