function Move ([row, col]){
    this.pos = [row, col];
    this.moves = null
}

class ChessBoard{
    constructor(){
        this.board = new Array(8).fill(null).map(() => new Array(8).fill(0));
        this.knightPosition = [0, 0];
        this.board[0][0] = 1; // initialize knight at 0, 0
        this.possibleMoves = {};

        const knightRange = [
            [-2,  1],
            [-1,  2],
            [ 1,  2],
            [ 2,  1],
            [ 2, -1],
            [ 1, -2],
            [-1, -2],
            [-2, -1]
        ];  
        this.getPossibleMoves = function([row, col]){
            knightRange.forEach(([x, y]) => {
                const newRow = row + x;
                const newCol = col + y;
                if (newRow < 0 || newRow > 7 || newCol < 0 || newCol > 7){
                    return;
                }
                console.log(newRow,newCol);
            })
        }


    }
    get knight(){
        return this.knightPosition;
    }
    set knight([row, col]){
        this.moveKnight(row, col);
    }
    moveKnight(newRow, newCol) {
        this.board[this.knightPosition[0]][this.knightPosition[1]] = 0;
        this.knightPosition = [newRow, newCol];
        this.board[this.knightPosition[0]][this.knightPosition[1]] = 1;
    };
    knightMoves([row, col], [newRow, newCol]){
    };
}

const newBoard = new ChessBoard;
// console.log(newBoard.board);
// newBoard.knight = [1, 2];
// console.log(newBoard.board);


newBoard.getPossibleMoves([0,0])