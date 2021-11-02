import React, { useState } from 'react';
import { Plate } from '@udecode/plate';
// import { VALUES } from './config/values/values';

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
    </>
  );
  //_______________________________________

  //

  //_______________________________________
}

export default MyPlate
