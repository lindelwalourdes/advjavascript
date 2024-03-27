const myWork = [];
for (let x = 1; x < 10; x++) {
    let stat = x % 3 ? true : false;
    let temp = {
        name: `Lesson ${x}`, status: stat
    };
    myWork.push(temp);
}
console.log(myWork);
