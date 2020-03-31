import { useEffect } from 'react'

const fabric = window.fabric;

const Circle = ({top = 0, left= 0, radius= 5, fill= 'red', ...props}) => {
  useEffect(() => {
    const circle = new fabric.Circle({top, left, radius, fill, ...props});
    props.canvas.add(circle);
  });

  return null;
};

export default Circle
