let main = document.querySelector('.main');
for (let i = 0; i < 16*16; i++){
    let gridCell = document.createElement('div');
    gridCell.classList.add('cell');
    gridCell.onmouseover = () => gridCell.classList.add('hover');
    main.appendChild(gridCell);
}