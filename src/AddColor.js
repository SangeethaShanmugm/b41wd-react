import { useState } from "react";
import { ColorBox } from "./ColorBox";


export function AddColor() {
  // const color = "skyblue";
  const [color, setColor] = useState("skyblue");
  // const colorList = ["orange", "red", "pink"];
  const [colorList, setColorList] = useState(["orange", "red", "pink"]);
  const styles = {
    fontSize: "24px",
    backgroundColor: color,
  };
  return (
    <div>
      <div className="add-color">
        <input
          onChange={(event) => setColor(event.target.value)}
          style={styles}
          type="text"
          value={color} />
        {/* //copy the colorList and add new Color to it */}
        <button onClick={() => setColorList([...colorList, color])}>Add Color</button>
      </div>
      {colorList.map((clr) => (
        <ColorBox color={clr} />
      ))}
    </div>
  );
}
