import React, { Fragment } from "react";
import { useEffect, useState } from "react";
import Textbox from "./textbox";

const fabric = window.fabric;

const Canvas = (props, {width = 600, height = 400}) => {
  let [canvas, setCanvas] = useState(null);
  let canvasWidth = width;
  let canvasHeight = height;
  let snap = 10; // number of pixels before it snaps to closest objects
  let margin = 10; // margin in pixels
  let context;

  useEffect(() => {
    setCanvas(new fabric.Canvas(context, {backgroundColor: 'lightgray'}));
  }, [context]);

  const children = React.Children.map(props.children, child => {
    return React.cloneElement(child, {
      canvas: canvas
    })
  });

  const makeGroup = event => {
    event.preventDefault();
    let listObjects = [];
    canvas.forEachObject(obj => {
      listObjects.push(obj);
    });

    if (listObjects) {
      let group = new fabric.Group(listObjects);
      canvas.add(group);
    }
  };

  const load = event => {
    event.preventDefault();
    canvas.loadFromJSON('{\n' +
      '  "objects": [\n' +
      '    {\n' +
      '      "type": "textbox",\n' +
      '      "originX": "left",\n' +
      '      "originY": "top",\n' +
      '      "left": 308,\n' +
      '      "top": 76,\n' +
      '      "width": 100,\n' +
      '      "height": 18.35,\n' +
      '      "fill": "rgb(0,0,0)",\n' +
      '      "stroke": null,\n' +
      '      "strokeWidth": 1,\n' +
      '      "strokeDashArray": null,\n' +
      '      "strokeLineCap": "butt",\n' +
      '      "strokeLineJoin": "miter",\n' +
      '      "strokeMiterLimit": 10,\n' +
      '      "scaleX": 1,\n' +
      '      "scaleY": 1,\n' +
      '      "angle": 0,\n' +
      '      "flipX": false,\n' +
      '      "flipY": false,\n' +
      '      "opacity": 1,\n' +
      '      "shadow": null,\n' +
      '      "visible": true,\n' +
      '      "clipTo": null,\n' +
      '      "backgroundColor": "",\n' +
      '      "fillRule": "nonzero",\n' +
      '      "globalCompositeOperation": "source-over",\n' +
      '      "transformMatrix": null,\n' +
      '      "text": "click to enter text",\n' +
      '      "fontSize": 14,\n' +
      '      "fontWeight": "normal",\n' +
      '      "fontFamily": "Times New Roman",\n' +
      '      "fontStyle": "",\n' +
      '      "lineHeight": 1.16,\n' +
      '      "textDecoration": "",\n' +
      '      "textAlign": "left",\n' +
      '      "textBackgroundColor": "",\n' +
      '      "styles": {},\n' +
      '      "minWidth": 20\n' +
      '    },\n' +
      '    {\n' +
      '      "type": "textbox",\n' +
      '      "originX": "left",\n' +
      '      "originY": "top",\n' +
      '      "left": 252.89,\n' +
      '      "top": 235.26,\n' +
      '      "width": 100,\n' +
      '      "height": 18.35,\n' +
      '      "fill": "rgb(0,0,0)",\n' +
      '      "stroke": null,\n' +
      '      "strokeWidth": 1,\n' +
      '      "strokeDashArray": null,\n' +
      '      "strokeLineCap": "butt",\n' +
      '      "strokeLineJoin": "miter",\n' +
      '      "strokeMiterLimit": 10,\n' +
      '      "scaleX": 1,\n' +
      '      "scaleY": 1,\n' +
      '      "angle": 79.59,\n' +
      '      "flipX": false,\n' +
      '      "flipY": false,\n' +
      '      "opacity": 1,\n' +
      '      "shadow": null,\n' +
      '      "visible": true,\n' +
      '      "clipTo": null,\n' +
      '      "backgroundColor": "",\n' +
      '      "fillRule": "nonzero",\n' +
      '      "globalCompositeOperation": "source-over",\n' +
      '      "transformMatrix": null,\n' +
      '      "text": "click to enter text",\n' +
      '      "fontSize": 14,\n' +
      '      "fontWeight": "normal",\n' +
      '      "fontFamily": "Times New Roman",\n' +
      '      "fontStyle": "",\n' +
      '      "lineHeight": 1.16,\n' +
      '      "textDecoration": "",\n' +
      '      "textAlign": "left",\n' +
      '      "textBackgroundColor": "",\n' +
      '      "styles": {},\n' +
      '      "minWidth": 20\n' +
      '    },\n' +
      '    {\n' +
      '      "type": "textbox",\n' +
      '      "originX": "left",\n' +
      '      "originY": "top",\n' +
      '      "left": 80,\n' +
      '      "top": 62,\n' +
      '      "width": 35,\n' +
      '      "height": 73.4,\n' +
      '      "fill": "rgb(0,0,0)",\n' +
      '      "stroke": null,\n' +
      '      "strokeWidth": 1,\n' +
      '      "strokeDashArray": null,\n' +
      '      "strokeLineCap": "butt",\n' +
      '      "strokeLineJoin": "miter",\n' +
      '      "strokeMiterLimit": 10,\n' +
      '      "scaleX": 1,\n' +
      '      "scaleY": 1,\n' +
      '      "angle": 0,\n' +
      '      "flipX": false,\n' +
      '      "flipY": false,\n' +
      '      "opacity": 1,\n' +
      '      "shadow": null,\n' +
      '      "visible": true,\n' +
      '      "clipTo": null,\n' +
      '      "backgroundColor": "",\n' +
      '      "fillRule": "nonzero",\n' +
      '      "globalCompositeOperation": "source-over",\n' +
      '      "transformMatrix": null,\n' +
      '      "text": "click to enter text",\n' +
      '      "fontSize": 14,\n' +
      '      "fontWeight": "normal",\n' +
      '      "fontFamily": "Times New Roman",\n' +
      '      "fontStyle": "",\n' +
      '      "lineHeight": 1.16,\n' +
      '      "textDecoration": "",\n' +
      '      "textAlign": "left",\n' +
      '      "textBackgroundColor": "",\n' +
      '      "styles": {},\n' +
      '      "minWidth": 20\n' +
      '    }\n' +
      '  ],\n' +
      '  "background": "lightgray"\n' +
      '}');

    // locks items so they cant be moved or text changed.
    canvas.forEachObject(obj => {
      obj.lockMovementY = true;
      obj.lockMovementX = true;
      obj.lockScalingX = true;
      obj.hasControls = false;
      obj.lockRotation = true;
      obj.hasRotatingPoint = false;
      obj.editable = false;
    });
  };

  const findNewPos = (distX, distY, target, obj) => {
    // See whether to focus on X or Y axis
    if(Math.abs(distX) > Math.abs(distY)) {
      if (distX > 0) {
        target.setLeft(obj.getLeft() - target.getWidth());
      } else {
        target.setLeft(obj.getLeft() + obj.getWidth());
      }
    } else {
      if (distY > 0) {
        target.setTop(obj.getTop() - target.getHeight());
      } else {
        target.setTop(obj.getTop() + obj.getHeight());
      }
    }
  };

  if(canvas) {
    canvas.on('object:moving', (options) => {
      // Sets corner position coordinates based on current angle, width and height
      options.target.setCoords();

      // Don't allow objects off the canvas
      if (options.target.getLeft() < snap) {
        options.target.setLeft(margin);
      }

      if (options.target.getTop() < snap) {
        options.target.setTop(margin);
      }

      if ((options.target.getWidth() + options.target.getLeft()) > (canvasWidth - snap)) {
        options.target.setLeft(canvasWidth - options.target.getWidth() - margin);
      }

      if ((options.target.getHeight() + options.target.getTop()) > (canvasHeight - snap)) {
        options.target.setTop(canvasHeight - options.target.getHeight() - margin);
      }

      // Loop through objects
      canvas.forEachObject(function (obj) {
        if (obj === options.target) return;

        // If objects intersect
        if (options.target.isContainedWithinObject(obj) || options.target.intersectsWithObject(obj) || obj.isContainedWithinObject(options.target)) {

          var distX = ((obj.getLeft() + obj.getWidth()) / 2) - ((options.target.getLeft() + options.target.getWidth()) / 2);
          var distY = ((obj.getTop() + obj.getHeight()) / 2) - ((options.target.getTop() + options.target.getHeight()) / 2);

          // Set new position
          findNewPos(distX, distY, options.target, obj);
        }

        // Snap objects to each other horizontally
        // If bottom points are on same Y axis
        if (Math.abs((options.target.getTop() + options.target.getHeight()) - (obj.getTop() + obj.getHeight())) < snap) {
          // Snap target BL to object BR
          if (Math.abs(options.target.getLeft() - (obj.getLeft() + obj.getWidth())) < snap) {
            options.target.setLeft(obj.getLeft() + obj.getWidth());
            options.target.setTop(obj.getTop() + obj.getHeight() - options.target.getHeight());
          }

          // Snap target BR to object BL
          if (Math.abs((options.target.getLeft() + options.target.getWidth()) - obj.getLeft()) < snap) {
            options.target.setLeft(obj.getLeft() - options.target.getWidth());
            options.target.setTop(obj.getTop() + obj.getHeight() - options.target.getHeight());
          }
        }

        // If top points are on same Y axis
        if (Math.abs(options.target.getTop() - obj.getTop()) < snap) {
          // Snap target TL to object TR
          if (Math.abs(options.target.getLeft() - (obj.getLeft() + obj.getWidth())) < snap) {
            options.target.setLeft(obj.getLeft() + obj.getWidth());
            options.target.setTop(obj.getTop());
          }

          // Snap target TR to object TL
          if (Math.abs((options.target.getLeft() + options.target.getWidth()) - obj.getLeft()) < snap) {
            options.target.setLeft(obj.getLeft() - options.target.getWidth());
            options.target.setTop(obj.getTop());
          }
        }

        // Snap objects to each other vertically
        // If right points are on same X axis
        if (Math.abs((options.target.getLeft() + options.target.getWidth()) - (obj.getLeft() + obj.getWidth())) < snap) {
          // Snap target TR to object BR
          if (Math.abs(options.target.getTop() - (obj.getTop() + obj.getHeight())) < snap) {
            options.target.setLeft(obj.getLeft() + obj.getWidth() - options.target.getWidth());
            options.target.setTop(obj.getTop() + obj.getHeight());
          }

          // Snap target BR to object TR
          if (Math.abs((options.target.getTop() + options.target.getHeight()) - obj.getTop()) < snap) {
            options.target.setLeft(obj.getLeft() + obj.getWidth() - options.target.getWidth());
            options.target.setTop(obj.getTop() - options.target.getHeight());
          }
        }

        // If left points are on same X axis
        if (Math.abs(options.target.getLeft() - obj.getLeft()) < snap) {
          // Snap target TL to object BL
          if (Math.abs(options.target.getTop() - (obj.getTop() + obj.getHeight())) < snap) {
            options.target.setLeft(obj.getLeft());
            options.target.setTop(obj.getTop() + obj.getHeight());
          }

          // Snap target BL to object TL
          if (Math.abs((options.target.getTop() + options.target.getHeight()) - obj.getTop()) < snap) {
            options.target.setLeft(obj.getLeft());
            options.target.setTop(obj.getTop() - options.target.getHeight());
          }
        }
      });

      options.target.setCoords();

      // If objects still overlap
      var outerAreaLeft = null,
        outerAreaTop = null,
        outerAreaRight = null,
        outerAreaBottom = null;

      canvas.forEachObject(function (obj) {
        if (obj === options.target) return;

        if (options.target.isContainedWithinObject(obj) || options.target.intersectsWithObject(obj) || obj.isContainedWithinObject(options.target)) {

          var intersectLeft = null,
            intersectTop = null,
            intersectWidth = null,
            intersectHeight = null,
            intersectSize = null,
            targetLeft = options.target.getLeft(),
            targetRight = targetLeft + options.target.getWidth(),
            targetTop = options.target.getTop(),
            targetBottom = targetTop + options.target.getHeight(),
            objectLeft = obj.getLeft(),
            objectRight = objectLeft + obj.getWidth(),
            objectTop = obj.getTop(),
            objectBottom = objectTop + obj.getHeight();

          // Find intersect information for X axis
          if (targetLeft >= objectLeft && targetLeft <= objectRight) {
            intersectLeft = targetLeft;
            intersectWidth = obj.getWidth() - (intersectLeft - objectLeft);

          } else if (objectLeft >= targetLeft && objectLeft <= targetRight) {
            intersectLeft = objectLeft;
            intersectWidth = options.target.getWidth() - (intersectLeft - targetLeft);
          }

          // Find intersect information for Y axis
          if (targetTop >= objectTop && targetTop <= objectBottom) {
            intersectTop = targetTop;
            intersectHeight = obj.getHeight() - (intersectTop - objectTop);

          } else if (objectTop >= targetTop && objectTop <= targetBottom) {
            intersectTop = objectTop;
            intersectHeight = options.target.getHeight() - (intersectTop - targetTop);
          }

          // Find intersect size (this will be 0 if objects are touching but not overlapping)
          if (intersectWidth > 0 && intersectHeight > 0) {
            intersectSize = intersectWidth * intersectHeight;
          }

          // Set outer snapping area
          if (obj.getLeft() < outerAreaLeft || outerAreaLeft == null) {
            outerAreaLeft = obj.getLeft();
          }

          if (obj.getTop() < outerAreaTop || outerAreaTop == null) {
            outerAreaTop = obj.getTop();
          }

          if ((obj.getLeft() + obj.getWidth()) > outerAreaRight || outerAreaRight == null) {
            outerAreaRight = obj.getLeft() + obj.getWidth();
          }

          if ((obj.getTop() + obj.getHeight()) > outerAreaBottom || outerAreaBottom == null) {
            outerAreaBottom = obj.getTop() + obj.getHeight();
          }

          // If objects are intersecting, reposition outside all shapes which touch
          if (intersectSize) {
            var distX = (outerAreaRight / 2) - ((options.target.getLeft() + options.target.getWidth()) / 2);
            var distY = (outerAreaBottom / 2) - ((options.target.getTop() + options.target.getHeight()) / 2);

            // Set new position
            findNewPos(distX, distY, options.target, obj);
          }
        }
      });
    });
  }

  return (
    <Fragment>
      <canvas id='canvas' ref={ c => (context = c) } width={ width } height={ height }/>
      { canvas && children }
      <button onClick={ e => {
        e.preventDefault();
        console.log(canvas.toJSON())
      } }>To JSON</button>
      <button onClick={load}>Load</button>
      <button onClick={makeGroup}>Group all</button>
      <button onClick={ e => {
        e.preventDefault();
        Textbox(canvas);
      } }>Add new Textbox</button>
    </Fragment>
  )
};

export default Canvas
