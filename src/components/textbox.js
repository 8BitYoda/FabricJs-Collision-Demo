const fabric = window.fabric;

const Textbox = ({canvas, margin = 10}) => {
  let text = new fabric.Textbox('click to enter text', {
    width: 100,
    height: 1000,
    top: margin,
    left: margin,
    fontSize: 14,
    padding: margin,
    textAlign: 'left',
    backgroundColor: 'rgba(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ', 0.75)'
  });
  canvas.add(text);
  canvas.setActiveObject(text);
  text.enterEditing();
  text.setSelectionStart(text.text.length);
  text.setSelectionEnd(text.text.length);
};

export default Textbox;
