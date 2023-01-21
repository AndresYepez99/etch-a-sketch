const board = document.querySelector('.container-board'); //Tablero

/*Idicadorr de pixeles*/
const pixelIndicator = document.querySelector('.pixel-indicator');

/*btn list*/ 
const btnCellSize = document.querySelector('#btn-range');
const bntBorders = document.querySelector('.btn-borders');
const btnRefresh = document.querySelector('.btn-refresh');
const btnColor = document.querySelector('.btn-color');
const iconBtnColor = document.querySelector('.icon-btn-color');


/*Valores por defecto*/
const COLOR_DEFAULT = '#fff';
let defaultSize = btnCellSize.value = 16;
pixelIndicator.textContent = defaultSize;




//Crea las filas y columnas que tendra el tablero 
function boardDimension (size) {
    board.style.cssText = `grid-template-columns: repeat(${size}, 1fr); 
                           grid-template-rows: repeat(${size}, 1fr)`;
}
boardDimension(defaultSize);

//agrega celdas al tablero
function addCells (size) {
    for (let i = 0; i < size * size; i++) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('borderChills');
        newDiv.addEventListener('click', () => {
            newDiv.style.backgroundColor = 'red';
        })
        board.appendChild(newDiv);
    }
}
addCells(defaultSize);

//Elimina celdas antiguas
function removeCells () { 
    let cells= board.querySelectorAll('div');
    let deleteCells = [...cells];
    for (let i = 0; i < deleteCells.length; i++) {
        deleteCells[i].remove();
    } 
}

//Refresca o borra el tablero estabeciendo las celdas al color por defecto
function removeStyle () {
    let cells = board.querySelectorAll('div');
    let arrCells = [...cells];
    arrCells.forEach(element => {
        element.style.backgroundColor = COLOR_DEFAULT;
        element.classList.add('boderChills');
    });
}

/*Eventos para botenes*/

//Crear dimension y nummero de celdas 
btnCellSize.addEventListener ('input', (event) => {
    let size = event.target.value;
    pixelIndicator.textContent = size;
    defaultSize = size;
    removeCells();
    boardDimension(size);
    addCells(size);
    bntBorders.classList.add('border-active');
});

//Activar borde de cada celda del tablero
bntBorders.addEventListener('click', () => {
    let nodeListdivs = board.querySelectorAll('div');
    let arrDivs = [...nodeListdivs];
    arrDivs.forEach(element => {
        element.classList.toggle('borderChills');
    });
    bntBorders.classList.toggle('border-active');
})

//Borrar tablero
btnRefresh.addEventListener('click', () => {
    removeStyle();
});

//cambiar color
btnColor.addEventListener('mouseenter', () => {
    iconBtnColor.classList.toggle('hover-icon-btn-color');
});

btnColor.addEventListener('mouseleave', () => {
    iconBtnColor.classList.toggle('hover-icon-btn-color');
});





//boardDimension(3);
//addCells(3);



