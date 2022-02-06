function evaluatePieceMovement(s1, s2, booleans = true) {
  switch (s1.piece.id) {
    case 1:
      if (s1.j + 1 >= s2.j && s1.j - 1 <= s1.j && s1.i + 1 >= s2.i && s1.i - 1 <= s2.i) {
        return true;
      }
      if (!s1.piece.hasMoved) {
        if (turn == 0) {
          if (s2.i == 2) {
            if (houses[s1.index - 1].piece == 0 && s2.piece == 0 && houses[s2.index - 1].piece == 0) {
              if (!houses[56].piece.hasMoved && typeof houses[56].piece == "object") {
                if (!booleans) return false;
                castle(56);
                return true;
              }
            }
          } else if (s2.i == 6) {
            if (houses[s1.index + 1].piece == 0 && s2.piece == 0) {
              if (!houses[63].piece.hasMoved && typeof houses[63].piece == "object") {
                if (!booleans) return false;
                castle(63);
                return true;
              }
            }
          }
        } else if (turn == 1) {
          if (s2.i == 2) {
            if (houses[s1.index - 1].piece == 0 && s2.piece == 0 && houses[s2.index - 1].piece == 0) {
              if (!houses[0].piece.hasMoved && typeof houses[0].piece == "object") {
                if (!booleans) return false;
                castle(0);
                return true;
              }
            }
          } else if (s2.i == 6) {
            if (houses[s1.index + 1].piece == 0 && s2.piece == 0) {
              if (!houses[7].piece.hasMoved && typeof houses[7].piece == "object") {
                if (!booleans) return false;
                castle(7);
                return true;
              }
            }
          }
        }
      }
      break;
    case 2:
      if (s1.i == s2.i) {
        let diff = s2.j - s1.j;
        
        for (let i = 1; i < Math.abs(diff); i++) {
          if (houses[s1.index + (i * 8 * diff / Math.abs(diff))].piece != 0) {
            return false;
          }
        }
        return true;
      } else if (s1.j == s2.j) {
        let diff = s2.i - s1.i;
        
        for (let i = 1; i < Math.abs(diff); i++) {
          if (houses[s1.index + (i * diff / Math.abs(diff))].piece != 0) {
            return false;
          }
        }
        return true;
      } else if (Math.abs(s2.i - s1.i) == Math.abs(s2.j - s1.j)) {
        let diff = s2.index - s1.index;
        let delta = diff % 7 === 0 ? diff / 7 : diff / 9;

        if (diff % 7 === 0) {
          for (let i = 1; i < Math.abs(delta); i++) {
            if (houses[s1.index + (7 * i * delta / Math.abs(delta))].piece != 0) {
              return false;
            }
          }
        } else {
          for (let i = 1; i < Math.abs(delta); i++) {
            if (houses[s1.index + (9 * i * delta / Math.abs(delta))].piece != 0) {
              return false;
            }
          }
        }
        return true;
      }
      break;
    case 3:
      if (Math.abs(s2.i - s1.i) == Math.abs(s2.j - s1.j)) {
        let diff = s2.index - s1.index;
        let delta = diff % 7 === 0 ? diff / 7 : diff / 9;
        
        if (diff % 7 === 0) {
          for (let i = 1; i < Math.abs(delta); i++) {
            if (houses[s1.index + (7 * i * delta / Math.abs(delta))].piece != 0) {
              return false;
            }
          }
        } else {
          for (let i = 1; i < Math.abs(delta); i++) {
            if (houses[s1.index + (9 * i * delta / Math.abs(delta))].piece != 0) {
              return false;
            }
          }
        }
        return true;
      }
      break;
    case 4:
      if (s1.i + 1 == s2.i && s1.j + 2 == s2.j) {
        return true;
      } else if (s1.i + 1 == s2.i && s1.j - 2 == s2.j) {
        return true;
      } else if (s1.i - 1 == s2.i && s1.j - 2 == s2.j) {
        return true;
      } else if (s1.i - 1 == s2.i && s1.j + 2 == s2.j) {
        return true;
      } else if (s1.i + 2 == s2.i && s1.j + 1 == s2.j) {
        return true;
      } else if (s1.i + 2 == s2.i && s1.j - 1 == s2.j) {
        return true;
      } else if (s1.i - 2 == s2.i && s1.j - 1 == s2.j) {
        return true;
      } else if (s1.i - 2 == s2.i && s1.j + 1 == s2.j) {
        return true;
      }
      break;
    case 5:
      if (s1.i == s2.i) {
        let diff = s2.j - s1.j;
        
        for (let i = 1; i < Math.abs(diff); i++) {
          if (houses[s1.index + (i * 8 * diff / Math.abs(diff))].piece != 0) {
            return false;
          }
        }
        return true;
      } else if (s1.j == s2.j) {
        let diff = s2.i - s1.i;
        
        for (let i = 1; i < Math.abs(diff); i++) {
          if (houses[s1.index + (i * diff / Math.abs(diff))].piece != 0) {
            return false;
          }
        }
        return true;
      }
      break;
    case 6:
      if (turn == 1) {
        if (s1.i == s2.i && s1.j + 1 == s2.j && s2.piece == 0) {
          return true;
        }
        if (s1.i + 1 == s2.i && s2.piece != 0 && s1.j + 1 == s2.j) {
          return true;
        }
        if (s1.i - 1 == s2.i && s2.piece != 0 && s1.j + 1 == s2.j) {
          return true;
        }
        if (!s1.piece.hasMoved && s1.i == s2.i && s1.j + 2 == s2.j) {
          return true;
        }
      } else if (turn == 0) {
        if (s1.i == s2.i && s1.j - 1 == s2.j && s2.piece == 0) {
          return true;
        }
        if (s1.i + 1 == s2.i && s2.piece != 0 && s1.j - 1 == s2.j) {
          return true;
        }
        if (s1.i - 1 == s2.i && s2.piece != 0 && s1.j - 1 == s2.j) {
          return true;
        }
        if (!s1.piece.hasMoved && s1.i == s2.i && s1.j - 2 == s2.j) {
          return true;
        }
      }
      break;
  }
  return false;
}

function castle(index) {
  houses[index].piece.hasMoved = true;
  let tempPiece = houses[index].piece;
  
  if (index == 7 || index == 63) {
    houses[index - 2].piece = tempPiece;
  } else {
    houses[index + 3].piece = tempPiece;
  }
  
  houses[index].unset();
}

function generatePossibleMoves() {
  let possibleMoves = [];
  for (let i = 0; i < houses.length; i++) {
    for (let j = 0; j < houses.length; j++) {
      if (i == j) continue;
      if (houses[i].piece.col != turn + 1) continue;
      if (evaluateAntagony(houses[i], houses[j])) {
        if (evaluatePieceMovement(houses[i], houses[j], false)) {
          possibleMoves.push([i, j]);
        }
      }
    }
  }
  return possibleMoves;
}