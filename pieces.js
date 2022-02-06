/***************
* Parent Class *
***************/

class Piece {
  constructor(colour) {
    this.col = colour;
    this.hasMoved = false;
  }
  
  move(ii, ij, ti, tj) {
    if (ii == ti || ij == tj) {
      
    }
  }
}

/****************
* Child Classes *
****************/

// King
class King extends Piece {
  constructor(colour) {
    super(colour);
    this.id = 1;
  }
}

// Queen
class Queen extends Piece {
  constructor(colour) {
    super(colour);
    this.id = 2;
  }
}

// Bishop
class Bishop extends Piece {
  constructor(colour) {
    super(colour);
    this.id = 3;
  }
}

// Knight
class Knight extends Piece {
  constructor(colour) {
    super(colour);
    this.id = 4;
  }
}

// Rook
class Rook extends Piece {
  constructor(colour) {
    super(colour);
    this.id = 5;
  }
}

// Pawn
class Pawn extends Piece {
  constructor(colour) {
    super(colour);
    this.id = 6;
  }
}

// Empty
class EmptyHouse extends Piece {
  constructor() {
    super(0);
    this.id = 0;
  }
}