let main = document.querySelector('.main');
let header = document.querySelector('.header');
let clear = document.createElement('button');
let br = document.createElement('br');

clear.classList.add('clear');
clear.textContent = 'Clear sketch';
//clear.addEventListener('click');
header.appendChild(clear);

function newGrid(num) {
    for (let i = 0; i < num*num; i++){
        let gridCell = document.createElement('div');
        gridCell.classList.add('cell');
        gridCell.onmouseover = () => gridCell.classList.add('hover');
        main.appendChild(gridCell);
    };
    main.style.cssText = `grid-template: repeat(${num}, 1fr) / repeat(${num}, 1fr)`;
};

function newSketch() {
    prompt('How many squares per side?');
}

newGrid(16);