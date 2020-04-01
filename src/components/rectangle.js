const fabric = window.fabric;

const Rectangle = ({canvas, top = 0, left= 0, height = 100, width = 100, fill= 'red'}) => {
    const circle = new fabric.Rect({
      top,
      left,
      height,
      width,
      fill,
    });
    canvas.add(circle);
};

export default Rectangle
