const board = document.querySelector('.container-board'); //Tablero


/*btn list*/ 
const pixelIndicator = document.querySelector('.pixel-indicator');
const btnCellSize = document.querySelector('#btn-range');

const DEFAULT_SIZE = btnCellSize.value = 16;
pixelIndicator.textContent = DEFAULT_SIZE;

boardDimension(DEFAULT_SIZE);
addCells(DEFAULT_SIZE);


//Crea las filas y columnas que tendra el tablero 
function boardDimension (size) {
    board.style.cssText = `grid-template-columns: repeat(${size}, 1fr); 
                           grid-template-rows: repeat(${size}, 1fr)`;
}


function addCells (size) {
    for (let i = 0; i < size * size; i++) {
        let newDiv = document.createElement('div');
        board.appendChild(newDiv);
    }
}


btnCellSize.addEventListener ('input', (event) => {
    let size = event.target.value;
    pixelIndicator.textContent = size;
    boardDimension(size);
    addCells(size);
});

//boardDimension(3);
//addCells(3);



