// table html element
const table = document.querySelector('#tableEl');

// function for add new table rows and data children as html elements.

let createElement = function(obj) {
    console.log(obj);

    // break down the object to single variables.

    let user = obj.user;
    let score = obj.score;

    // create tabel row and table data elements.
    const tableRow = document.createElement('tr');
    const tableData1 = document.createElement('td');
    const tableData2 = document.createElement('td');

    // give the table Datas different class attributes.
    tableData1.setAttribute('class', 'tableData1');
    tableData2.setAttribute('class', 'tableData2');

    // give the table data text inside.
    tableData1.innerText = user;
    tableData2.innerText = score;

    // append tableData to tableRow.
    table.appendChild(tableRow);
    tableRow.appendChild(tableData1);
    tableRow.appendChild(tableData2);


};


// save the score object from local storage.

const loadScore = function (){
    // retrieve data from local storage.
    let scoreObj = localStorage.getItem('scoreObj');

    // parse data. 
    scoreObj = JSON.parse(scoreObj);

    // loop through the array and call the create element function with array objects.
    for (let i = 0; i < scoreObj.length; i++) {
        createElement(scoreObj[i]);
    }
};

loadScore();




