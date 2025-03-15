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
}