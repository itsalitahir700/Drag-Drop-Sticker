import React from 'react'; //eslint-disable-line
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Container from './container';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container-fluid card py-4 shadow text-center">LOGO</div>
      <div className="my-4 text-center ">
        <h2 className="title">Sticker Match </h2>
        <h4 className="subtitle">Drag-and-drop the sticker to match its shape in the chart</h4>
        <hr />
      </div>
      <DndProvider backend={HTML5Backend}>
        <div className="container ">
          <Container />
        </div>
      </DndProvider>
    </div>
  );
}

export default App;
