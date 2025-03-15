let peg = [
    [0],
    [1,1],
    [1,1,1],
    [1,1,1,1],
    [1,1,1,1,1]
];

let pegs = document.querySelectorAll(".peg");
console.log(pegs);

for(let i = 0; i< peg.length; i++)
{
    for(let j = 0; j < peg[i].length; j++)
        {
            console.log(`Peg at (${i}, ${j}): ${peg[i][j]}`);
        }    
}