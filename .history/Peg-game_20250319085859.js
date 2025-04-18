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

for (let peg of pegs) {
    console.log(`Peg at index ${peg.dataset.row}, ${peg.dataset.col}`);
}
let selectedPeg = null
function selectPeg(event)
{
    let moveCount;
    let selected = event.target;
    let rowNO = parseInt(selected.dataset.row);
    let colNO = parseInt(selected.dataset.col);

    // console.log(`Selected ${rowNO}, ${colNO}`);
    // console.log(`The value of peg is ${peg[rowNO][colNO]}`);
    moveCount = validMoves(rowNO,colNO);
    // if(selectedPeg == selected)
    // {
    //     selectedPeg = null;
    //     return;
    // }
    selectedPeg = selected;

    // console.log(moves)
    for(let i = 0; i<moveCount;i++)
    {
        let target_row = moves[i][2];
        let target_col = moves[i][3];
        let index2 = move_to_index(target_row,target_col);
        pegs[index2].style.backgroundColor = "green";
        pegs[index2].addEventListener("click", movePeg)
    }
}

function movePeg(event) {
    let targeted = event.target;
    let targetRowNO = parseInt(targeted.dataset.row);
    let targetColNO = parseInt(targeted.dataset.col);

    let selectedRowNo = parseInt(selectedPeg.dataset.row);
    let selectedColNo = parseInt(selectedPeg.dataset.col);

    let midRowNo = (targetRowNO + selectedRowNo) / 2;
    let midColNo =(targetColNO + selectedColNo) / 2;

    // if (peg[midRowNo][midColNo] == 0 || peg[targetRowNO][targetColNO] == 1 || peg[selectedRowNo][selectedColNo] == 0) {
    //     console.log("Invalid move: Check peg positions.");
    //     return;
    // }

    let selectedIndex = move_to_index(selectedRowNo, selectedColNo);
    let targetIndex = move_to_index(targetRowNO, targetColNO);
    let middleIndex = move_to_index(midRowNo, midColNo);

    peg[targetRowNO][targetColNO] = 1;
    peg[midRowNo][midColNo] = 0;
    peg[selectedRowNo][selectedColNo] = 0;

    // console.log(`Selected Peg: peg[${selectedRowNo}][${selectedColNo}] = ${peg[selectedRowNo][selectedColNo]}`);
    // console.log(`Mid Peg: peg[${midRowNo}][${midColNo}] = ${peg[midRowNo][midColNo]}`);
    // console.log(`Target Peg: peg[${targetRowNO}][${targetColNO}] = ${peg[targetRowNO][targetColNO]}`);

    console.log(`move_to_index(${selectedRowNo}, ${selectedColNo}) = ${selectedIndex}`);
    console.log(`move_to_index(${midRowNo}, ${midColNo}) = ${middleIndex}`);
    console.log(`move_to_index(${targetRowNO}, ${targetColNO}) = ${targetIndex}`);
    console.log(`selectedIndex: ${selectedIndex}, middleIndex: ${middleIndex}, targetIndex: ${targetIndex}`);
    console.log(peg)

    pegs[selectedIndex].style.backgroundColor = "white";
    pegs[middleIndex].style.backgroundColor = "white";
    pegs[targetIndex].style.backgroundColor = "black";
   


    // pegs.forEach(peg => {
    //     if (peg.style.backgroundColor === "green") {
    //         peg.style.backgroundColor = "white";
    //         peg.removeEventListener("click", movePeg);
    //     }
    // });

    // selectedPeg = null; 
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

