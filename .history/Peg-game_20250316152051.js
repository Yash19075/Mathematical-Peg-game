let peg = [
    [0],
    [1,1],
    [1,1,1],
    [1,1,1,1],
    [1,1,1,1,1]
];
var moves= [];
const ROWS = 5;

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
    let selected = event.target;
    let rowNO = selected.dataset.row;
    let colNO = selected.dataset.col;
    console.log(`Selected ${rowNO}, ${colNO}`);
    console.log(`The value of peg is ${peg[rowNO][colNO]}`);

}

function move_to_index(i,j)
{
    let index1 = (i*(i+1)/2)+j;
    return index1;
}


function validMoves ()
{
    var count = 0;
    for (int i = 0; i < ROWS; i++) {
        for (int j = 0; j <= i; j++) {
            if (peg[i][j] == 1) {
                var target_r = i - 2;

                // **Upwards Move**
                if (target_r >= 0 && peg[target_r][j] == 0 && peg[i - 1][j] == 1 && j <= target_r) {
                    moves[count][0] = i;
                    moves[count][1] = j;
                    moves[count][2] = target_r;
                    moves[count][3] = j;
                    count++;
                }

                // **Upwards-Left Move**
                if (target_r >= 0 && j - 2 >= 0 && peg[target_r][j - 2] == 0 && peg[i - 1][j - 1] == 1 && (j - 2) <= target_r) {
                    moves[count][0] = i;
                    moves[count][1] = j;
                    moves[count][2] = target_r;
                    moves[count][3] = (j - 2);
                    count++;
                }
                
                  var backward_r = i + 2;
                if (backward_r < ROWS && peg[backward_r][j] == 0 && peg[i + 1][j] == 1) {
                    moves[count][0] = i;
                    moves[count][1] = j;
                    moves[count][2] = backward_r;
                    moves[count][3] = j;
                    count++;
                }

                // **Backward-Right Move**
                if (backward_r < ROWS && j + 2 <= backward_r && peg[backward_r][j + 2] == 0 && peg[i + 1][j + 1] == 1) {
                    moves[count][0] = i ;
                    moves[count][1] = j ;
                    moves[count][2] = backward_r ;
                    moves[count][3] = (j + 2) ;
                    count++;
                }
		          var backward_c = j - 2;
		        if (backward_c >= 0 && peg[i][backward_c] == 0 && peg[i][j - 1] == 1) {
	                moves[count][0] = i ;
                    moves[count][1] = j ;
                    moves[count][2] = i ;
                    moves[count][3] = backward_c ;
                    count++;
		        }
		          var forward_c = j + 2;
		        if (forward_c <= i && peg[i][forward_c] == 0 && peg[i][j + 1] == 1) {
	                moves[count][0] = i ;
                    moves[count][1] = j ;
                    moves[count][2] = i;
                    moves[count][3] = forward_c ;
                    count++;
		        }
            }
        }
    }
}
