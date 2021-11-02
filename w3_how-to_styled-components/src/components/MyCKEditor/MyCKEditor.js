import React, { useState } from 'react';
import { CKEditor, CKEditorContext } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import parse from 'html-react-parser';
import {
  EditorContainer
} from './MyCKEditor.style';

const MyCKEditor = () => {

  const [text, setText] = useState('');

  return (
    <>
      <EditorContainer>
        <CKEditor
          editor={ClassicEditor}
          data={text}
          onChange={(event, editor) => {
            const data = editor.getData();
            setText(data)
          }}
        />
      </EditorContainer>
      <div>
        <h2>Content: </h2>
        <p>{parse(text)}</p>
      </div>

      <EditorContainer>
        <CKEditor
          editor={ClassicEditor}
          data="<p>Hello from CKEditor 5!</p>"
          onReady={editor => {
            // You can store the "editor" and use when it is needed.
            console.log('Editor is ready to use!', editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
          }}
          onBlur={(event, editor) => {
            console.log('Blur.', editor);
          }}
          onFocus={(event, editor) => {
            console.log('Focus.', editor);
          }}
        />
      </EditorContainer>
    </>
  )
};

export default MyCKEditor

