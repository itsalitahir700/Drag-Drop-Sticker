import React from 'react'; //eslint-disable-line
import { useDrop } from 'react-dnd';
import tick from '../assets/check.png';
import cross from '../assets/wrong.png';
import '../styles/dustbin.css';

function Dustbin({ dropped, onDrop, img, error }) {
  const [, drop] = useDrop({
    accept: ['circle', 'square', 'polygon', 'triangle'],
    drop: onDrop,
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });
  return (
    <div
      ref={drop}
      className="dustbin"
      style={{
        background:
          dropped && !error ? 'rgba(149, 248, 187,0.2)' : error && 'rgba(248, 149, 167,0.2)',
      }}
    >
      {error && <img src={cross} alt="cross" className="bool" />}
      {dropped && !error && <img alt="tick" src={tick} className="bool" />}
      <img src={img} alt="shape" height="140px" />
    </div>
  );
}
export default Dustbin;
