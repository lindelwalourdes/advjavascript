let myTable = [];
//rows = y
//columns = x
let counter = 0;
for (let y = 0; y < 4; y++) {
    let tempTable = [];
    for (let x = 0; x < 7; x++) {
        counter++;
        tempTable.push(counter);
    }
    myTable.push(tempTable);
}
console.table(myTable);



// let arrOfArrays = [];
// for (let i = 0; i < 3; i++){
// arrOfArrays.push([]);
// for (let j = 0; j < 7; j++) {
// arrOfArrays[i].push(j);
// }
// }
// console.log(arrOfArrays);