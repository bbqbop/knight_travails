// let chessBoard = new Array(8).fill(null).map(() => new Array(8).fill(0));
// let knight = [0,0];

class ChessBoard{
    constructor(){
        this.board = new Array(8).fill(null).map(() => new Array(8).fill(0));
        this.knightPosition = [0, 0];
        this.board[0][0] = 1;
    }
    get knight(){
        return this.knightPosition;
    }
    set knight([row, col]){
        this.moveKnight(row, col);
    }
    moveKnight(newRow, newCol) {
        if (newRow < 0 || newRow > 7 || newCol < 0 || newCol > 8) {
            throw new Error("Invalid move: out of bounds");
        }
        this.board[this.knightPosition[0]][this.knightPosition[1]] = 0;
        this.knightPosition = [newRow, newCol];
        this.board[this.knightPosition[0]][this.knightPosition[1]] = 1;
    }
}

const newBoard = new ChessBoard;
console.log(newBoard.board);
newBoard.knight = [1, 2];
console.log(newBoard.board);