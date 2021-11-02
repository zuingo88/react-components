import React, { useState, useMemo } from 'react';
import 'tippy.js/dist/tippy.css';
import {
  createPlateComponents,
  createPlateOptions,
  HeadingToolbar,
  MentionCombobox,
  PlatePlugin,
  Plate,
  ToolbarSearchHighlight,
  createAlignPlugin,
  createAutoformatPlugin,
  createBlockquotePlugin,
  createBoldPlugin,
  createCodeBlockPlugin,
  createCodePlugin,
  createExitBreakPlugin,
  createHeadingPlugin,
  createHighlightPlugin,
  createHistoryPlugin,
  createKbdPlugin,
  createImagePlugin,
  createItalicPlugin,
  createLinkPlugin,
  createListPlugin,
  createMediaEmbedPlugin,
  createNodeIdPlugin,
  createParagraphPlugin,
  createReactPlugin,
  createResetNodePlugin,
  createSelectOnBackspacePlugin,
  createSoftBreakPlugin,
  createDndPlugin,
  createStrikethroughPlugin,
  createSubscriptPlugin,
  createSuperscriptPlugin,
  createTablePlugin,
  createTodoListPlugin,
  createTrailingBlockPlugin,
  createUnderlinePlugin,
  createDeserializeHTMLPlugin,
  createComboboxPlugin,
  createMentionPlugin,
  useFindReplacePlugin,
  createIndentPlugin,
  SPEditor,
  MARK_COLOR,
  withStyledProps,
  StyledLeaf,
  MARK_BG_COLOR,
  createFontColorPlugin,
  createFontBackgroundColorPlugin,
  createDeserializeMDPlugin,
  createDeserializeCSVPlugin,
  createDeserializeAstPlugin,
  createNormalizeTypesPlugin,
  createFontSizePlugin,
  createHorizontalRulePlugin,
} from '@udecode/plate';
import {
  createExcalidrawPlugin,
  ELEMENT_EXCALIDRAW,
  ExcalidrawElement,
} from '@udecode/plate-excalidraw';
import {
  ToolbarButtons,
  BallonToolbarMarks,
} from './config/components/Toolbars';
import { withStyledPlaceHolders } from './config/components/withStyledPlaceHolders';
import { withStyledDraggables } from './config/components/withStyledDraggables';
import { Search } from '@styled-icons/material/Search';
import { ReactEditor } from 'slate-react';
import { CONFIG } from './config/config';

//  EDITOR
// type TEditor = SPEditor & ReactEditor & HistoryEditor;

//  COMPONENTS
let components = createPlateComponents({
  [ELEMENT_EXCALIDRAW]: ExcalidrawElement,
  // customize your components by plugin key
})
components = withStyledPlaceHolders(components)
components = withStyledDraggables(components)

//  OPTIONS
const options = createPlateOptions({
  // customize your options by plugin key
})

//  PLUGINS
// const Plugins = () => {
//   // const { setSearch, plugin: searchHighlightPlugin } = useFindReplacePlugin()

//   const pluginsMemo: PlatePlugin<TEditor>[] = useMemo(() => {
//     const plugins = [
//       createReactPlugin(),
//       createHistoryPlugin(),
//       createParagraphPlugin(),
//       createBlockquotePlugin(),
//       createTodoListPlugin(),
//       createHeadingPlugin(),
//       createImagePlugin(),
//       createHorizontalRulePlugin(),
//       createLinkPlugin(),
//       createListPlugin(),
//       createTablePlugin(),
//       createMediaEmbedPlugin(),
//       createExcalidrawPlugin(),
//       createCodeBlockPlugin(),
//       createAlignPlugin(CONFIG.align),
//       createBoldPlugin(),
//       createCodePlugin(),
//       createItalicPlugin(),
//       createHighlightPlugin(),
//       createUnderlinePlugin(),
//       createStrikethroughPlugin(),
//       createSubscriptPlugin(),
//       createSuperscriptPlugin(),
//       createFontColorPlugin(),
//       createFontBackgroundColorPlugin(),
//       createFontSizePlugin(),
//       createKbdPlugin(),
//       createNodeIdPlugin(),
//       createDndPlugin(),
//       createIndentPlugin(CONFIG.indent),
//       createAutoformatPlugin(CONFIG.autoformat),
//       createResetNodePlugin(CONFIG.resetBlockType),
//       createSoftBreakPlugin(CONFIG.softBreak),
//       createExitBreakPlugin(CONFIG.exitBreak),
//       createNormalizeTypesPlugin(CONFIG.forceLayout),
//       createTrailingBlockPlugin(CONFIG.trailingBlock),
//       createSelectOnBackspacePlugin(CONFIG.selectOnBackspace),
//       createComboboxPlugin(),
//       createMentionPlugin(),
//       // searchHighlightPlugin,
//     ]

//     plugins.push(
//       ...[
//         createDeserializeMDPlugin({ plugins }),
//         createDeserializeCSVPlugin({ plugins }),
//         createDeserializeHTMLPlugin({ plugins }),
//         createDeserializeAstPlugin({ plugins }),
//       ]
//     )

//     return plugins
//   }, [searchHighlightPlugin])
// }

const MyPlate = () => {

  const editableProps = {
    placeholder: 'Type…',
    style: {
      margin: '5px',
      padding: '10px',
      backgroundColor: '#dfdfdf',
      border: 'solid 1px black',
      borderRadius: '5px'
    },
  };

  const initialValue = [
    {
      children: [
        {
          text:
            'This is editable plain text with react and history plugins, just like a <textarea>!',
        },
      ],
    },
  ];

  const [debugValue, setDebugValue] = useState(null);

  return (
    <>
      {/* Simple Plate */}
      <h3>Plate 0</h3>
      <Plate />

      {/* Aggiunta regole */}
      <h3>Plate 1</h3>
      <Plate
        id="1"
        editableProps={editableProps}
      />

      {/* aggiunta valore iniziale */}
      <h3>Plate 2</h3>
      <Plate
        id="2"
        editableProps={editableProps}
        initialValue={initialValue}
      />

      <h3>Plate 3</h3>
      <Plate
        id="3"
        editableProps={editableProps}
        initialValue={initialValue}
        onChange={(newValue) => {
          setDebugValue(newValue);
          // save newValue...
        }}
      >
        {/* value: {JSON.stringify(debugValue)} */}
      </Plate>


      <h3>Plate 4</h3>
      <Plate
        id="4"
        editableProps={editableProps}
        initialValue={initialValue}
        onChange={(newValue) => {
          setDebugValue(newValue);
          // save newValue...
        }}
      >
        {/* <ToolbarSearchHighlight icon={Search} setSearch={setSearch} /> */}
        {/* <ToolbarSearchHighlight /> */}
        <HeadingToolbar>
          <ToolbarButtons />
        </HeadingToolbar>
      </Plate>
    </>
  );
}

export default MyPlate
