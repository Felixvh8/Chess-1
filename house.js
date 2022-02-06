class House {
  constructor(i, j) {
    this.i = i;
    this.j = j;
    this.index = (j * 8) + i;
    this.empty = true;
    this.piece = 0;
    this.col = 0;
    this.selected = false;
  }
  
  // Displays the house
  display(ctx) {
    if (!ctx) throw "The display method requires a context!";
    
    ctx.fillStyle = (this.i + this.j) % 2 === 0 ? "#dddddd" : "#448f44";
    if (this.selected) ctx.fillStyle = (this.i + this.j) % 2 === 0 ? "#f0ed43" : "#d9ed40";
    ctx.fillRect(this.i * 50, this.j * 50, 50, 50);
    
    switch (this.piece.id || this.piece) {
      case 0:
        return;
      case 1:
        if (this.piece.col == 1) {
          const img = document.getElementById("kwhite");
          ctx.drawImage(img, this.i * 50 + 2, this.j * 50);
        } else {
          const img = document.getElementById("kblack");
          ctx.drawImage(img, this.i * 50 + 2, this.j * 50);
        }
        break;
      case 2:
        if (this.piece.col == 1) {
          const img = document.getElementById("qwhite");
          ctx.drawImage(img, this.i * 50 + 2, this.j * 50 + 1);
        } else {
          const img = document.getElementById("qblack");
          ctx.drawImage(img, this.i * 50 + 2, this.j * 50 + 1);
        }
        break;
      case 3:
        if (this.piece.col == 1) {
          const img = document.getElementById("bwhite");
          ctx.drawImage(img, this.i * 50 + 2, this.j * 50 + 1);
        } else {
          const img = document.getElementById("bblack");
          ctx.drawImage(img, this.i * 50 + 2, this.j * 50 + 1);
        }
        break;
      case 4:
        if (this.piece.col == 1) {
          const img = document.getElementById("nwhite");
          ctx.drawImage(img, this.i * 50 + 2, this.j * 50 + 1);
        } else {
          const img = document.getElementById("nblack");
          ctx.drawImage(img, this.i * 50 + 2, this.j * 50 + 1);
        }
        break;
      case 5:
        if (this.piece.col == 1) {
          const img = document.getElementById("rwhite");
          ctx.drawImage(img, this.i * 50 + 2, this.j * 50 + 1);
        } else {
          const img = document.getElementById("rblack");
          ctx.drawImage(img, this.i * 50 + 2, this.j * 50 + 1);
        }
        break;
      case 6:
        if (this.piece.col == 1) {
          const img = document.getElementById("pwhite");
          ctx.drawImage(img, this.i * 50 + 2, this.j * 50 + 1);
        } else {
          const img = document.getElementById("pblack");
          ctx.drawImage(img, this.i * 50 + 2, this.j * 50 + 1);
        }
        break;
    }
  }
  
  // Sets the house to contain a piece
  setPiece(x) {
    if (!x) {
      this.piece = 0;
      this.col = 0;
      this.empty = true;
      return;
    }
    
    if (typeof x == "string") {
      this.empty = false;
      switch (x) {
        case "K":
          this.piece = new King(1);
          break;
        case "k":
          this.piece = new King(2);
          break;
        case "Q":
          this.piece = new Queen(1);
          break;
        case "q":
          this.piece = new Queen(2);
          break;
        case "B":
          this.piece = new Bishop(1);
          break;
        case "b":
          this.piece = new Bishop(2);
          break;
        case "N":
          this.piece = new Knight(1);
          break;
        case "n":
          this.piece = new Knight(2);
          break;
        case "R":
          this.piece = new Rook(1);
          break;
        case "r":
          this.piece = new Rook(2);
          break;
        case "P":
          this.piece = new Pawn(1);
          break;
        case "p":
          this.piece = new Pawn(2);
          break;
        case "e":
          this.piece = 0;
          this.empty = true;
          break;
      }
    } else if (typeof x == "number") {
      throw "You are lazy. Fix this method.";
    } else if (typeof x == "object") {
      throw "You are lazy. Fix this method.";
    }
  }
  
  // Removes the piece from the square
  unset() {
    this.piece = 0;
    this.empty = true;
    this.col = 0;
  }
}