const fabric = window.fabric;

const Textbox = (canvas) => {
  let text = new fabric.Textbox('click to enter text', {
    width: 100,
    height: 1000,
    top: 10,
    left: 10,
    fontSize: 14,
    padding: 10,
    textAlign: 'left'
  });
  canvas.add(text);
  canvas.setActiveObject(text);
  text.enterEditing();
  text.setSelectionStart(text.text.length);
  text.setSelectionEnd(text.text.length);
};

export default Textbox;
