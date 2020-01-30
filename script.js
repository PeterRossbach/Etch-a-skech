// 1. Pick list with multiple grid options
// 2. Picking a size makes a function that creates divs inside of the container
// 3. Different classes are needed for different grid sizes to account for rows/columns
// 4. 

/* let gridHeight=prompt("Enter the dimensions of your Etch-a-Sketch","Enter height in pixels")
const pickList=document.querySelector('.gridSize');
pickList.onchange=function() {
    let value=document.querySelector('.gridSizes'),id;
    switch (value) {
        case "50x50" :
            makeGrid50();
            break;
        case "60x60":
            makeGrid60();
            break;
        case "70x70":
            makeGrid70();
            break;
    }
    console.log("hello");
}
*/

const gridContainer = document.querySelector('.gridContainer');

const gridCell16=document.createElement('div');
gridCell16.classList.add('sixteen');
gridContainer.appendChild(gridCell16);



function makeGrid16 () {
    let divs=[];
    for (i=0;i<=255;i++) {
        divs.push("div"+i);
        const newElement = document.createElement('div');
        newElement.id = divs[i]; newElement.className = "gridCell";
        newElement.textContent = ""
        gridCell16.appendChild(newElement);
    }
}

makeGrid16();

function makeGrid50 () {
    let divs=[];
    for (i=0;i<=250;i++) {
        divs.push("div"+i);
        const newElement = document.createElement('div');
        newElement.id = divs[i]; newElement.className = "gridCell";
        newElement.textContent = divs[i];
        gridContainer.appendChild(newElement);
    }
}

function makeGrid60 () {
    let divs=[];
    for (i=0;i<=360;i++) {
        divs.push("div"+i);
        const newElement = document.createElement('div');
        newElement.id = divs[i]; newElement.className = "gridCell";
        newElement.textContent = divs[i];
        gridContainer.appendChild(newElement);
    }
}

function makeGrid70 () {
    let divs=[];
    for (i=0;i<=490;i++) {
        divs.push("div"+i);
        const newElement = document.createElement('div');
        newElement.id = divs[i]; newElement.className = "gridCell";
        newElement.textContent = divs[i];
        gridContainer.appendChild(newElement);
    }
}
