/************
* Constants *
************/
let houses = [];
let pieces = [[], []];
let selectedSquares = [];
const WHITE_TO_MOVE = 0;
const BLACK_TO_MOVE = 1;
let turn = WHITE_TO_MOVE;

window.onload = function() {
  /************
  * Constants *
  ************/
  
  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");
  
  /*****************
  * Main Functions *
  *****************/
  createHouses();
  setStartingPos("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR");
  //setStartingPos("8/B1N5/1p2b1qp/3pr3/4p3/pP1k1P1r/1P6/5K2");
  displayHouses(ctx);
  
  document.addEventListener("click", (e) => {
    let square = getSelectedSquare(canvas, e);
    console.log(square);
    
    if (selectedSquares.length == 1) {
      if (square.piece == 0) {
        deselectHouses();
      }

      if (evaluateTurn(square)) {
        deselectHouses();
      }
    }
    
    if (selectedSquares.length == 1) {
      displayHouses(ctx);
    } else if (selectedSquares.length == 2) {
      
      // Evaluates antagony of the move, if available then moves to next step
      if (evaluateAntagony(selectedSquares[0], selectedSquares[1])) {
        
        // Evaluates if the piece can move to the square, if available, confirms the move
        if (evaluatePieceMovement(selectedSquares[0], selectedSquares[1])) {
          let tempPiece = selectedSquares[0].piece;

          houses[selectedSquares[0].index].unset();
          houses[selectedSquares[1].index].piece = tempPiece;

          if (!tempPiece.hasMoved) {
            houses[selectedSquares[1].index].piece.hasMoved = true;
          }

          deselectHouses();
          displayHouses(ctx);

          turn == WHITE_TO_MOVE ? turn = BLACK_TO_MOVE : turn = WHITE_TO_MOVE;
          
          console.log(evaluatePosition());
          console.log(generatePossibleMoves().length);
        } else {
          failedMoveCheck(ctx);
        }
      } else {
        failedMoveCheck(ctx);
      }
      
      
    }
  });
}

