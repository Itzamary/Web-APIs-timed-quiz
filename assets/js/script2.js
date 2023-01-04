// table html element
const table = document.querySelector('#tableEl');

// function for add new table rows and data children as html elements.

const createElement = function(obj) {
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


// save the score object from local host.

const loadScore = function (){
    let scoreObj = localStorage.getItem('scoreObj');
    console.log(scoreObj);

    scoreObj = JSON.parse(scoreObj);
    console.log(scoreObj)

    // for (let i = 0; i < scoreObj.length -1; i++) {
    //     console.log(scoreObj[i]);
    //     createElement(scoreObj[i]);
    // }

    createElement(scoreObj);
};

loadScore();




