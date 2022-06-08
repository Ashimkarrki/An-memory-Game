import { React, useState } from "react";
import q from "../photos/q.png";
const CardPalette = ({ image, id, prev, setPrev, setIsSame, isSame }) => {
  const [isChibiOn, setIsChibiOn] = useState(false);
  // if (prev === id) {
  //   setTimeout(() => setIsChibiOn(false), 2000);
  // }
  const clickhandeler = () => {
    if (isChibiOn) {
      return;
    }
    if (!prev) {
      setPrev(id);
      setIsChibiOn(true);
      return;
    } else {
      if (prev !== id) {
        setIsChibiOn(true);
        setTimeout(() => {
          setIsChibiOn(false);
        }, 2000);
        setPrev("");
        setIsSame(false);
      }
      if (prev === id) {
        setIsChibiOn(true);
        setPrev("");
        setIsSame(true);
      }
    }
  };
  return (
    <div
      className={`card ${
        isChibiOn ? "image--turn_chibi_on" : "image--turn _chibi_off"
      }`}
      onClick={clickhandeler}
    >
      <img className="image image--chibi" src={image} alt={image} />
      <img className="image image--unknown" src={q} alt="question mark" />
    </div>
  );
};

export default CardPalette;
