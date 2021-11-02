import React, {
  useState,
  useMemo,
  useCallback
} from "react";

//  SLATE
import {
  createEditor,
  Editor, Transforms
} from "slate";
import {
  Slate,
  Editable,
  withReact
} from "slate-react";

//  Definisco un render di default.
const DefaultElement = props => {
  return <p {...props.attributes}>{props.children}</p>
};

//  Definisco un render per il mio blocco di codice.
const CodeElement = props => {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  )
};

const MySlate = () => {

  const editor = useMemo(() => withReact(createEditor()), []);

  const [value, setValue] = useState([
    {
      type: "paragraph",
      children: [{ text: "First Slate Component" }]
    }
  ]);

  const renderElement = useCallback(props => {
    switch (props.element.type) {
      case 'code':
        return <CodeElement {...props} />
      default:
        return <DefaultElement {...props} />
    }
  }, [])

  return (
    <div id='pageContainer' style={{ display: 'block' }}>
      <h1>React Editors</h1>
      <h2>Start editing to see Slate in action!</h2>

      <Slate
        editor={editor}
        value={value}
        onChange={(newValue) => setValue(newValue)}
      >
        <Editable
          style={{ border: "1px solid black", minHeight: '250px' }}
          renderElement={renderElement}
          onKeyDown={event => {
            if (event.key === "'" && event.ctrlKey) {
              event.preventDefault()
              const { selection } = editor
              const [match] = Editor.nodes(editor, {
                match: n => n.type === 'code',
              })
              Transforms.setNodes(
                editor,
                { type: match ? 'paragraph' : 'code' },
                { match: n => Editor.isBlock(editor, n) }
              )
            };
          }}
        />
      </Slate>
    </div>
  );
}

export default MySlate