import "./Chessboard.css";
import Tile from "./Tile";

//images
import pawn_w from "../Pieces/pawn_w.png";
import pawn_b from "../Pieces/pawn_b.png";
import rook_w from "../Pieces/rook_w.png";
import rook_b from "../Pieces/rook_b.png";
import bishop_w from "../Pieces/bishop_w.png";
import bishop_b from "../Pieces/bishop_b.png";
import knight_w from "../Pieces/knight_w.png";
import knight_b from "../Pieces/knight_b.png";
import queen_w from "../Pieces/queen_w.png";
import queen_b from "../Pieces/queen_b.png";
import king_w from "../Pieces/king_w.png";
import king_b from "../Pieces/king_b.png";

let x = ["a", "b", "c", "d", "e", "f", "g", "h"];
let y = ["1", "2", "3", "4", "5", "6", "7", "8"];

//

interface Pieces {
  image?: string;
  x: string;
  y: string;
}

let activePiece: HTMLElement | null = null;

//MouseDown function
const grabPiece = (e: React.MouseEvent) => {
  const active_element = e.target as HTMLElement;
  const element = e.target as HTMLElement;

  if (element.classList.contains("tile-piece")) {
    element.style.position = "absolute";
    activePiece = element;
  }
};

//MovePiece Function
const movePiece = (e: React.MouseEvent) => {
  if (activePiece && activePiece.classList.contains("tile-piece")) {
    const x = e.clientX - 50;
    const y = e.clientY - 50;
    activePiece.style.left = `${x}px`;
    activePiece.style.top = `${y}px`;
  }
};

//LeavePiece Function
const leavePiece = (e: React.MouseEvent) => {
  const element = e.target as HTMLElement;
  if (element.classList.contains("tile-piece")) {
    activePiece = null;
  }
};

const Chessboard = () => {
  let board: any = [];
  let i: any, j: any;
  const piece: Pieces[] = [];

  //

  //Pawns
  for (let i = 0; i <= 7; i++) {
    piece.push({ image: pawn_w, x: x[i], y: "2" });
    piece.push({ image: pawn_b, x: x[i], y: "7" });
  }
  //rooks
  piece.push({ image: rook_w, x: "a", y: "1" });
  piece.push({ image: rook_w, x: "h", y: "1" });
  piece.push({ image: rook_b, x: "a", y: "8" });
  piece.push({ image: rook_b, x: "h", y: "8" });
  //knights
  piece.push({ image: knight_w, x: "b", y: "1" });
  piece.push({ image: knight_w, x: "g", y: "1" });
  piece.push({ image: knight_b, x: "b", y: "8" });
  piece.push({ image: knight_b, x: "g", y: "8" });
  //Bishops
  piece.push({ image: bishop_w, x: "c", y: "1" });
  piece.push({ image: bishop_w, x: "f", y: "1" });
  piece.push({ image: bishop_b, x: "c", y: "8" });
  piece.push({ image: bishop_b, x: "f", y: "8" });
  //Queens
  piece.push({ image: queen_w, x: "d", y: "1" });
  piece.push({ image: queen_b, x: "d", y: "8" });
  //Kings
  piece.push({ image: king_w, x: "e", y: "1" });
  piece.push({ image: king_b, x: "e", y: "8" });

  for (i = 0; i <= 7; i++) {
    for (j = 0; j <= 7; j++) {
      const num = i + j + 2;
      // console.log(x[j], y[i]);
      let image = undefined;

      piece.forEach((p) => {
        if (p.x === x[j] && p.y === y[i]) {
          image = p.image;
        }
      });
      board.push(<Tile key={`${i},${j}`} image={image} num={num} />);
    }
  }
  return (
    <div
      onMouseDown={(e) => grabPiece(e)}
      onMouseMove={(e) => movePiece(e)}
      onMouseUp={(e) => leavePiece(e)}
      id="chessboard"
    >
      {board}
    </div>
  );
};

export default Chessboard;
//{x[j]}{y[i]}
