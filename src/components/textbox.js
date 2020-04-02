const fabric = window.fabric;

const Textbox = ({canvas, text = 'click to enter text', margin = 10}) => {
  let textbox = new fabric.Textbox(text, {
    top: margin,
    left: margin,
    fontSize: 14,
    padding: margin,
    textAlign: 'left',
  });
  canvas.add(textbox);
  canvas.setActiveObject(textbox);
  textbox.enterEditing();
  textbox.setSelectionStart(textbox.text.length);
  textbox.setSelectionEnd(textbox.text.length);
};

export default Textbox;
