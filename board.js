// Creates the houses at the beginning of the program
function createHouses() {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      houses.push(new House(j, i));
    }
  }
}

// Displays all the houses
function displayHouses(ctx) {
  for (let house of houses) {
    house.display(ctx);
  }
}

// Sets the board position to the FEN string
function setStartingPos(fen) {
  let arr = fen.split("");
  let indexCount = 0;
  
  for (const char of arr) {
    let c = parseInt(char, 10);
    if (typeof c === "number" && c > 0) {
      indexCount += c;
    } else if (char == "/") {
      continue;
    } else {
      houses[indexCount].setPiece(char);
      indexCount++;
    }
  }
}

// Evaluates whether the target square is available to move to (antagony)
function evaluateAntagony(s1, s2) {
  if (typeof s1 != "object" || typeof s2 != "object") throw "Evaluate Antagony function only accepts Objects!";
  
  if (s1.piece.col != s2.piece.col) {
    return true
  } else {
    return false;
  }
}

function evaluateTurn(s) {
  if (s.piece.col == turn + 1) {
    return false;
  } else {
    return true;
  }
}

// Deselects every house
function deselectHouses() {
  for (const house of houses) {
    house.selected = false;
  }
  
  while (selectedSquares.length > 0) {
    selectedSquares.shift();
  }
}

function getCursorPosition(canvas, event) {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const result = {
    x: x,
    y: y
  }
  return result;
}

// Returns the clicked house
function getSelectedSquare(canvas, e) {
  const obj = getCursorPosition(canvas, e);
  const x = Math.floor(obj.x / 50);
  const y = Math.floor(obj.y / 50);
  const index = (y * 8) + x;
  if (houses[index]) {
    houses[index].selected = true;
    selectedSquares.push(houses[index]);
  }
  return houses[index] || false;
}

function failedMoveCheck(ctx) {
  deselectHouses();
  displayHouses(ctx);
}

function checkMoveLegality() {
  
}

function checkForChecks() {
  
}