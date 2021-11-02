import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
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
        <h2>Content</h2>
        <p>{parse(text)}</p>
      </div>
    </>
  )
}

export default MyCKEditor
