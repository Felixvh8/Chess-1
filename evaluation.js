function evaluatePosition() {
  let evaluation = 0;
  for (const v of houses) {
    if (v.piece === 0) continue;
    let pieceValue;
    switch (v.piece.id) {
      case 1:
        v.piece.col === 1 ? evaluation += 100 : evaluation -= 100;
        break;
      case 2:
        v.piece.col === 1 ? evaluation += 9 : evaluation -= 9;
        break;
      case 3:
        v.piece.col === 1 ? evaluation += 3 : evaluation -= 3;
        break;
      case 4:
        v.piece.col === 1 ? evaluation += 3 : evaluation -= 3;
        break;
      case 5:
        v.piece.col === 1 ? evaluation += 5 : evaluation -= 5;
        break;
      case 6:
        v.piece.col === 1 ? evaluation += 1 : evaluation -= 1;
    }
  }
  return evaluation;
}