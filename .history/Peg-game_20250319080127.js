let peg = [
    [0],
    [1,1],
    [1,1,1],
    [1,1,1,1],
    [1,1,1,1,1]
];
var moves = [];
for(let r = 0; r<20;r++)
{
    moves[r] = [];
}

let pegs = document.querySelectorAll(".peg");
console.log(pegs);
let index = 0;
for(let i = 0; i< peg.length; i++)
{
    for(let j = 0; j < peg[i].length; j++)
        {
            if(peg[i][j] == 1)
            {
                pegs[index].style.backgroundColor = "black";
            }
            // console.log(`Peg at (${i}, ${j}): ${peg[i][j]}`);
            pegs[index].dataset.row = i;
            pegs[index].dataset.col = j;
            index++;
        }    
}

function selectPeg(event)
{
    let moveCount;
    let selected = event.target;
    let rowNO = selected.dataset.row;
    let colNO = selected.dataset.col;
    console.log(`Selected ${rowNO}, ${colNO}`);
    console.log(`The value of peg is ${peg[rowNO][colNO]}`);
    moveCount = validMoves(rowNO,colNO);
    // console.log(moves)
    
}

function move_to_index(i,j)
{
    let index1 = (i*(i+1)/2)+j;
    return index1;
}


function validMoves(row, col) {
    var count = 0;
    moves = [];

    var target_r = row - 2;
    if (target_r >= 0 && peg[target_r][col] == 0 && peg[row - 1][col] == 1) {
        moves[count] = [row, col, target_r, col];
        count++;
    }

    if (target_r >= 0 && col - 2 >= 0 && peg[target_r][col - 2] == 0 && peg[row - 1][col - 1] == 1) {
        moves[count] = [row, col, target_r, col - 2];
        count++;
    }

    var backward_r = row + 2;
    if (backward_r < peg.length && peg[backward_r][col] == 0 && peg[row + 1][col] == 1) {
        moves[count] = [row, col, backward_r, col];
        count++;
    }

    if (backward_r < peg.length && col + 2 <= backward_r && peg[backward_r][col + 2] == 0 && peg[row + 1][col + 1] == 1) {
        moves[count] = [row, col, backward_r, col + 2];
        count++;
    }

    var backward_c = col - 2;
    if (backward_c >= 0 && peg[row][backward_c] == 0 && peg[row][col - 1] == 1) {
        moves[count] = [row, col, row, backward_c];
        count++;
    }

    var forward_c = col + 2;
    if (forward_c <= row && peg[row][forward_c] == 0 && peg[row][col + 1] == 1) {
        moves[count] = [row, col, row, forward_c];
        count++;
    }

    return count;
}

