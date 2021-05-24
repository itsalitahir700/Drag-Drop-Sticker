import React from 'react';
import { useDrag } from 'react-dnd';
import '../styles/box.css';

function Box({ name, type, isDropped, img }) {
  const [{ opacity }, drag] = useDrag(
    () => ({
      type,
      item: { name },
      collect: monitor => ({
        opacity: monitor.isDragging() ? 0.4 : 1,
      }),
    }),
    [name, type],
  );
  return (
    <div ref={drag} className="box" style={{ opacity }}>
      <img src={img} alt={type} className="shape" />
    </div>
  );
}

export default Box;
