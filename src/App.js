import "./App.css";
// import "./sass/main.scss";
import { React, useState, useEffect } from "react";
import luffy from "./photos/luffy.png";
import luffy2 from "./photos/luffy2.png";
import brook from "./photos/brook.png";
import db from "./photos/db.png";
import potato from "./photos/potato.png";
import sakura from "./photos/sakura.png";
import saiki from "./photos/saiki.png";
import baldy from "./photos/baldy.png";
import { randomizedArray, loop } from "./utilities";
import { change } from "./utilities";

import CardPalette from "./components/CardPalette";
function App() {
  const [newGame, setNewGame] = useState(false);
  const [isSame, setIsSame] = useState(true);
  const [tweak, setTweak] = useState(false);
  const [cards, setCards] = useState([]);
  const [isCardOn, setIsCardOn] = useState(loop);
  const [uniqueId, setUniqueId] = useState("");
  const [prev, setPrev] = useState("");
  const [pending, setPending] = useState(false);
  useEffect(() => {
    if (!isSame) {
      setPending(true);
      console.log("pasyo");
      setTimeout(() => {
        setIsCardOn((preev) => change(uniqueId, [...preev], false));
        setPending(false);
      }, 2000);
    }
    setUniqueId("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSame, tweak]);

  return (
    <div className="app">
      <main className="playground">
        <div className="board">
          {cards.map((s, index) => {
            return (
              <CardPalette
                prev={prev}
                setPrev={setPrev}
                isChibiOn={isCardOn}
                setIsChibiOn={setIsCardOn}
                image={s.name}
                id={s.id}
                uniqueId={index}
                key={index}
                setUniqueId={setUniqueId}
                setIsSame={setIsSame}
                setTweak={setTweak}
                tweak={tweak}
                setPending={setPending}
                pending={pending}
              />
            );
          })}
        </div>

        <button
          className="button"
          onClick={() => {
            setNewGame(!newGame);
            setIsCardOn(loop);
            setCards(() =>
              randomizedArray([
                { name: luffy, id: 0 },
                { name: luffy2, id: 1 },
                { name: brook, id: 2 },
                { name: db, id: 3 },
                { name: potato, id: 4 },
                { name: sakura, id: 5 },
                { name: saiki, id: 6 },
                { name: baldy, id: 7 },
              ])
            );
          }}
        >
          New Game
        </button>
      </main>
    </div>
  );
}

export default App;
