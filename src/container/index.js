import React, { useState, useCallback } from 'react'; //eslint-disable-line
import update from 'immutability-helper';
import Dustbin from '../components/dustbin';
import Box from '../components/box';
import triangle from '../assets/triangle.png';
import circle from '../assets/circle.png';
import square from '../assets/square.png';
import polygon from '../assets/rhombus.png';
import '../styles/container.css';

function Container() {
  const [dustbins, setDustbins] = useState([
    {
      accepts: ['circle'],
      dropped: false,
      shape: 'Circle',
      img: circle,
      error: false,
    },
    {
      accepts: ['square'],
      dropped: false,
      shape: 'Square',
      img: square,
      error: false,
    },
    {
      accepts: ['triangle'],
      dropped: false,
      shape: 'Triangle',
      img: triangle,
      error: false,
    },
    {
      accepts: ['polygon'],
      dropped: false,
      shape: 'Polygon',
      img: polygon,
      error: false,
    },
  ]);
  const [droppedBoxNames, setDroppedBoxNames] = useState([]);
  const [complete, setComplete] = useState(false);

  const [boxes] = useState([
    { name: 'Circle', type: 'circle', img: circle },
    { name: 'Square', type: 'square', img: square },
    { name: 'Triangle', type: 'triangle', img: triangle },
    { name: 'Polygon', type: 'polygon', img: polygon },
  ]);

  function isDropped(boxName) {
    return droppedBoxNames.indexOf(boxName) > -1;
  }
  const handleDrop = useCallback(
    (index, item) => {
      const { name } = item;
      const matched = index.filter(elem => elem.toUpperCase() === name.toUpperCase());

      if (matched.length) {
        const newArr = [...dustbins];
        const objIndex = newArr.findIndex(obj => obj.shape === name);

        newArr[objIndex].dropped = true;
        newArr[objIndex].error = false;
        setDustbins(newArr);
        setDroppedBoxNames(update(droppedBoxNames, name ? { $push: [name] } : { $push: [] }));
      } else {
        const newArr = [...dustbins];
        const objIndex = newArr.findIndex(
          obj => obj.shape.toUpperCase() === index[0].toUpperCase(),
        );
        newArr[objIndex].error = true;
        newArr[objIndex].dropped = false;
        setDustbins(newArr);
        setDroppedBoxNames(update(droppedBoxNames, name ? { $push: [name] } : { $push: [] }));
      }
    },
    [droppedBoxNames, dustbins],
  );

  React.useEffect(() => {
    setComplete(dustbins.every(item => item?.dropped));
  }, [dustbins]);

  return (
    <div className="d-flex flex-md-row flex-column-reverse justify-content-around wrapper">
      {!complete ? (
        <>
          <div className="row">
            {dustbins.map(({ accepts, dropped, shape, img, error }) => (
              <div className="col-md-6 p-0  m-0 bin-container" key={shape}>
                <Dustbin
                  error={error}
                  img={img}
                  accept={accepts}
                  shape={shape}
                  dropped={dropped}
                  onDrop={item => handleDrop(accepts, item)}
                />
              </div>
            ))}
          </div>
          <div className=" d-md-flex flex-md-column flex-row justify-content-between">
            {boxes.map(({ name, type, img }) => (
              <Box name={name} type={type} img={img} isDropped={isDropped(name)} key={type} />
            ))}
          </div>
        </>
      ) : (
        <div className="my-4">
          <h1 className="text-success">Completed</h1>
        </div>
      )}
    </div>
  );
}

export default Container;
