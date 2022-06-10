import { React } from "react";
import q from "../photos/q.png";
import { change, orGate } from "../utilities";
const CardPalette = ({
  image,
  prev,
  setPrev,
  isChibiOn,
  setIsChibiOn,
  id,
  uniqueId,
  setIsSame,
  setUniqueId,
}) => {
  const clickhandeler = () => {
    if (!prev) {
      setPrev(id);
      setUniqueId(uniqueId);
      setIsChibiOn(change(uniqueId, isChibiOn, true));
    } else if (prev === id) {
      setIsSame(true);
      setPrev("");
      setIsChibiOn(change(uniqueId, isChibiOn, true));
    } else if (prev !== id) {
      console.log("not equal");
      setPrev("");
      setIsChibiOn(() => change(uniqueId, isChibiOn, true));
      setIsSame(false);

      setTimeout(() => {
        console.log("timelut ley garda");
        return setIsChibiOn((preev) => {
          console.log("suru ko timeout");
          console.log(preev);
          return change(uniqueId, preev, false);
        });
      }, 2000);
    }
  };
  return (
    <div
      className={`card ${
        isChibiOn[uniqueId] ? "image--turn_chibi_on" : "image--turn _chibi_off"
      }`}
      onClick={clickhandeler}
    >
      <img className="image image--chibi" src={image} alt={image} />
      <img className="image image--unknown" src={q} alt="question mark" />
    </div>
  );
};

export default CardPalette;
