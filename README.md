# Knight Travails
An assignmenet for the Odin Project. 
This repository contains JavaScript code that finds the shortest path for a knight on a chessboard from a given starting position to a target position.

## Introduction
The Knight's Shortest Path algorithm utilizes breadth-first search (BFS) to explore all possible moves of a knight on an 8x8 chessboard. It identifies the shortest path from a starting position to a target position using the knight's movement rules.

## Installation
To run the code, you need to have Node.js installed on your system.

Clone this repository or download the code.

## Usage
The code can be used as a Node.js module. Here's an example of how to find the shortest path for a knight:

```
const Knight = require('./knight');
const myKnight = new Knight();
myKnight.knightMoves([0, 0], [6, 6]);
```
Replace [0, 0] with the desired starting position and [6, 6] with the target position. The code will output the shortest path and the number of moves required to reach the target.

## Algorithm Explanation
The getPossibleMoves function generates all possible knight moves from a given position and stores them in level order in a graph for BFS.
The findShortestPath function performs BFS using a queue to explore all possible moves until the target position is found. It maintains a path array to track the current path being explored.
When the target position is found, the findShortestPath function returns the path.
The knightMoves function called on an instance of the Knight class calls the findShortestPath function with the provided starting and target positions. It then displays the shortest path and the number of moves required to reach the target.

## Example Output
Running the code with the provided example (myKnight.knightMoves([0,0], [6,6])) produces the following output:

```
=> You made it in 5 moves! Here's your path:
[0, 0]
[1, 2]
[3, 3]
[5, 4]
[6, 6]
```

**Dierk Peters, 05/2023**
