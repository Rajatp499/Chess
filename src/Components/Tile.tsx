import "./Tile.css";
// import pawn_w from "../../public/Pieces/pawn_w.png"

interface props {
  image?: string;
  num: number;
}

const Tile = ({ image, num }: props) => {
  //{X}{y}
  if (num % 2 == 0)
    return (
      <div className="tile black-tile">
       {/* Will Render line below if image is not undefined */}
        {image &&<div className="tile-piece" style={{backgroundImage:`url(${image})`}}> </div>}
        </div>
    );
  else
    return (
      <div className="tile white-tile">
         {image &&<div className="tile-piece" style={{backgroundImage:`url(${image})`}}> </div>}
      </div>
    );
};

export default Tile;
//<div className="tiles white-tile">{x[j]}{y[i]}</div>
