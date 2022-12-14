import "./styles.css";
import { useState } from "react";

export default function App() {
  var emojiYouKnow = {
    "π₯Ί": "Pleading Face",
    "π₯°": "Smiling Face with Hearts",
    "π": "Upside-down face",
    "π": "Smiling Face with Smiling Eyes",
    "π": "Grinning Face",
    "π": "Grinning Squinting Face",
    "π": "Winking Face with Tongue",
    "π€": " Smiling Face with Open Hands",
    "π€": " Thinking Face",
    "π€«": "Shushing Face",
    "π―": "Hushed Face",
    "π€ͺ": "Zany Face",
    "π": "Grinning Face with Sweat",
    "π₯": "Fire",
    "π": "Skull",
    "β¨": "Sparkles"
  };
  var emojiArray = Object.keys(emojiYouKnow);
  var [meaning, setmeaning] = useState("");

  function inputEventHandler(e) {
    let emoji = e.target.value;
    emoji = emoji.trim(" "); //remove extra space added in emoji
    var currentMeaning = emojiYouKnow[emoji];
  if (emoji in emojiYouKnow) {
    if (currentMeaning === undefined) {
      currentMeaning = "We do not have this in our databaseπ’";
    }
    setmeaning(currentMeaning);
  } else if (emoji === "") {
    setmeaning("");
  } else {
    setmeaning("We do not have this in our databaseπ’");
  }
}

  function emojoClickEventHandler(emoji) {
    setmeaning(emojiYouKnow[emoji]);
  }

  return (
    <div className="App">
      <h3>
        Choose Your Favourite emoji <span id="spantext"> and know its meaning...</span>
      </h3><br/>
      <input onChange={inputEventHandler}></input>
      <p id="meaning">{meaning}</p>
      <div
        style={{
          maxWidth: "50%",
          margin: "auto"
        }}
      >
        {emojiArray.map((item) => {
          return (
            <span
              key={item}
              onClick={() => emojoClickEventHandler(item)}
              style={{
                marginLeft: "0.7rem",
                fontSize: "2rem",
                cursor: "pointer"
              }}
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
