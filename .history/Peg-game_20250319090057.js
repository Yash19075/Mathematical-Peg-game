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
function selectPeg(event) {
    let selected = event.target;
    let rowNO = parseInt(selected.dataset.row);
    let colNO = parseInt(selected.dataset.col);
    
    console.log(`👆 Selected: row=${rowNO}, col=${colNO}`);

    if (selectedPeg === selected) {
        console.log("❌ Deselecting Peg");
        selectedPeg = null;
        return;
    }

    selectedPeg = selected;
    console.log("✅ selectedPeg updated:", selectedPeg.dataset);
}

function movePeg(event) {
    if (!selectedPeg) {
        console.error("❌ ERROR: No peg selected before moving!");
        return;
    }

    let targeted = event.target;
    let targetRowNO = parseInt(targeted.dataset.row);
    let targetColNO = parseInt(targeted.dataset.col);

    let selectedRowNo = parseInt(selectedPeg.dataset.row);
    let selectedColNo = parseInt(selectedPeg.dataset.col);

    console.log(`➡️ Target row: ${targetRowNO}, Target col: ${targetColNO}`);
    console.log(`✅ Selected row: ${selectedRowNo}, Selected col: ${selectedColNo}`);

    let midRowNo = (targetRowNO + selectedRowNo) / 2;
    let midColNo = (targetColNO + selectedColNo) / 2;

    console.log(`🔄 Midpoint row: ${midRowNo}, Midpoint col: ${midColNo}`);

    let selectedIndex = move_to_index(selectedRowNo, selectedColNo);
    let targetIndex = move_to_index(targetRowNO, targetColNO);
    let middleIndex = move_to_index(midRowNo, midColNo);

    console.log(`🔢 selectedIndex: ${selectedIndex}, middleIndex: ${middleIndex}, targetIndex: ${targetIndex}`);
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

