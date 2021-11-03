import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

// import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';

// import DecoupledEditor from "@ckeditorckeditor5-build-decoupled-document";

import parse from 'html-react-parser';
import {
  EditorContainer
} from './MyCKEditor.style';

const editorConfiguration = {
  toolbar: ["bold", "italic"]
};

const editorFullConfiguration = {
  // plugins: [
  //   'Bold', 'Italic', 'Alignment'
  // ],
  // plugins: [
  //   Alignment,
  // ],
  toolbar: {
    items: [
      'heading', '|',
      'alignment', '|',
      'bold', 'italic', 'strikethrough', 'underline', 'subscript', 'superscript', '|',
      'link', '|',
      'bulletedList', 'numberedList', 'todoList',
      //'-', // break point
      'fontfamily', 'fontsize', 'fontColor', 'fontBackgroundColor', '|',
      'code', 'codeBlock', '|',
      'insertTable', '|',
      'outdent', 'indent', '|',
      'uploadImage', 'blockQuote', '|',
      'undo', 'redo'
    ],
    shouldNotGroupWhenFull: true
  }
}

const MyCKEditor = () => {

  const [text, setText] = useState('');

  return (
    <>
      <EditorContainer className='classic-editor'>
        <CKEditor
          id={1}
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

      <EditorContainer className='classic-editor'>
        <CKEditor
          id={2}
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

      <EditorContainer>

        <CKEditor
          id={3}
          editor={ClassicEditor}
          config={editorFullConfiguration}
          data={text}
          onInit={editor => {
            console.log("Editor is ready to use!", editor);
            editor.ui
              .getEditableElement()
              .parentElement.insertBefore(
                editor.ui.view.toolbar.element,
                editor.ui.getEditableElement()
              );
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            setText(data)
          }}
        />
      </EditorContainer>
    </>
  )
};

export default MyCKEditor

