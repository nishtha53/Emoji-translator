import "./styles.css";
import { useState } from "react";

export default function App() {
  var emojiYouKnow = {
    "🥺": "Pleading Face",
    "🥰": "Smiling Face with Hearts",
    "🙃": "Upside-down face",
    "😊": "Smiling Face with Smiling Eyes",
    "😀": "Grinning Face",
    "😆": "Grinning Squinting Face",
    "😜": "Winking Face with Tongue",
    "🤗": " Smiling Face with Open Hands",
    "🤔": " Thinking Face",
    "🤫": "Shushing Face",
    "😯": "Hushed Face",
    "🤪": "Zany Face",
    "😅": "Grinning Face with Sweat",
    "🔥": "Fire",
    "💀": "Skull",
    "✨": "Sparkles"
  };
  var emojiArray = Object.keys(emojiYouKnow);
  var [meaning, setmeaning] = useState("");

  function inputEventHandler(e) {
    let emoji = e.target.value;
    emoji = emoji.trim(" "); //remove extra space added in emoji
    var currentMeaning = emojiYouKnow[emoji];
    if (currentMeaning === undefined) {
      currentMeaning = "we do not have thi in our database";
    }
    setmeaning(currentMeaning);
  }

  function emojoClickEventHandler(emoji) {
    setmeaning(emojiYouKnow[emoji]);
  }

  return (
    <div className="App">
      <h3>
        Choose Your Favourite emoji{" "}
        <span id="spantext">and know its meaning...</span>
      </h3>
      <h3 style={{ color: "brown" }}>
        Enter an emoji below and get its meaning 👇
      </h3>
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
