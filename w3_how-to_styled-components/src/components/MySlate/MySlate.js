import React, { useState, useMemo } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";

const MySlate = () => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState([
    {
      type: "paragraph",
      children: [{ text: "First Slate Component" }]
    }
  ]);
  return (
    <div id='pageContainer' style={{ display: 'block' }}>
      <h1>React Editors</h1>
      <h2>Start editing to see Slate in action!</h2>
      <Slate
        editor={editor}
        value={value}
        onChange={(newValue) => setValue(newValue)}
      >
        <Editable style={{ border: "1px solid black" }} />
      </Slate>
    </div>
  );
}

export default MySlate