const Knight = function(){
    const knightRange = [                       // defining the move-range of a knight
    [-2,  1],[-1,  2],[ 1,  2],[ 2,  1],
    [ 2, -1],[ 1, -2],[-1, -2],[-2, -1]
    ];  
    const chessBoard = new Array(8).fill(null).map(() => new Array(8).fill(0));
    const Move = function(row, col){
        this.pos = [row, col];
        this.nextMoves = [];
        chessBoard[row][col] = 1;               // switching every visited field to 1
    }
    function getPossibleMoves(pos){
        pos = new Move(pos[0], pos[1]);
        // populate possible moves in level-order
        const queue = [];
        queue.push(pos);
        while (queue.length > 0){
            const move = queue.shift()
            knightRange.forEach(([x, y]) => {
                const newRow = move.pos[0] + x;
                const newCol = move.pos[1] + y;
                // base case, if field outside the board or if field has already been visited
                if (newRow < 0 || newRow > 7 || newCol < 0 || newCol > 7 || chessBoard[newRow][newCol] == 1){
                    return;
                }
                move.nextMoves.push(new Move(newRow, newCol));  
                })
            move.nextMoves.forEach(move => queue.push(move));
        }
        return pos
    };
    function findShortestPath(start, target){
        start = getPossibleMoves(start);
        const queue = [{ move: start, path: [start.pos] }];
        while (queue.length > 0) {
            const { move, path } = queue.shift();
            if (move.pos[0] === target[0] && move.pos[1] === target[1]) {
                return path;                            // when target is found, return finished path
            }
            move.nextMoves.forEach( move => {
                queue.push({ move: move, path: [...path, move.pos] });
            });
        }
        return null; // no path found
    }
    function knightMoves(start, target){
        const shortestPath = findShortestPath(start, target);
        console.log(`=> You made it in ${shortestPath.length - 1 == 1 ? '1 move' : shortestPath.length - 1 + ' moves'}! Here's your path:`)
        shortestPath.forEach(pos => console.log(pos))
    }
    return {
        knightMoves
    }
}
module.exports = Knight;
const myKnight = new Knight();

myKnight.knightMoves([0,0], [6,6])



