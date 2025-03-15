let peg = [
    [0],
    [1,1],
    [1,1,1],
    [1,1,1,1],
    [1,1,1,1,1]
];

let pegs = document.querySelectorAll(".peg");
console.log(pegs);
let index = 0;
for(let i = 0; i< peg.length; i++)
{
    for(let j = 0; j < peg[i].length; j++)
        {
            // console.log(`Peg at (${i}, ${j}): ${peg[i][j]}`);
            pegs[index].dataset.row = i;
            pegs[index].dataset.col = j;
            index++;
        }    
}

function selectPeg(event)
{
    let selected = event.target;
    let rowNO = selected.dataset.row;
    let colNO = selected.dataset.col;
    console.log(`Selected ${rowNO}, ${colNO}`);
    findValidMoves();
}

function findValidMoves() {
    let moves = [];

    for (let i = 2; i < peg.length; i++) { // Start from row 2 (since we check 2 rows above)
        for (let j = 0; j <= i; j++) {
            if (peg[i][j] === 1) { // Current peg exists
                let target_r = i - 2;
                if (target_r >= 0 && peg[target_r][j] === 0 && peg[i - 1][j] === 1) {
                    moves.push({ from: [i, j], to: [target_r, j] });
                }
            }
        }
    }
    return moves;
}

console.log(findValidMoves());