import React, { Fragment } from "react";
import { useEffect, useState } from "react";
import Textbox from "./textbox";
import Rectangle from "./rectangle";

const fabric = window.fabric;

const Canvas = ({width = 600, height = 400, margin = 10, ...props}) => {
  let [canvas, setCanvas] = useState(null);
  let context;
  let snap = margin; // number of pixels before it snaps to closest objects

  useEffect(() => {
    setCanvas(new fabric.Canvas(context, {backgroundColor: 'white'}));
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
      '      "type": "rect",\n' +
      '      "originX": "left",\n' +
      '      "originY": "top",\n' +
      '      "left": 636,\n' +
      '      "top": 300,\n' +
      '      "width": 100,\n' +
      '      "height": 100,\n' +
      '      "fill": "rgba(72,253,162, 0.75)",\n' +
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
      '      "rx": 0,\n' +
      '      "ry": 0\n' +
      '    },\n' +
      '    {\n' +
      '      "type": "rect",\n' +
      '      "originX": "left",\n' +
      '      "originY": "top",\n' +
      '      "left": 341,\n' +
      '      "top": 57,\n' +
      '      "width": 100,\n' +
      '      "height": 100,\n' +
      '      "fill": "rgba(187,109,207, 0.75)",\n' +
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
      '      "rx": 0,\n' +
      '      "ry": 0\n' +
      '    },\n' +
      '    {\n' +
      '      "type": "rect",\n' +
      '      "originX": "left",\n' +
      '      "originY": "top",\n' +
      '      "left": 51,\n' +
      '      "top": 279,\n' +
      '      "width": 100,\n' +
      '      "height": 100,\n' +
      '      "fill": "rgba(72,71,38, 0.75)",\n' +
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
      '      "rx": 0,\n' +
      '      "ry": 0\n' +
      '    },\n' +
      '    {\n' +
      '      "type": "rect",\n' +
      '      "originX": "left",\n' +
      '      "originY": "top",\n' +
      '      "left": 353,\n' +
      '      "top": 541,\n' +
      '      "width": 100,\n' +
      '      "height": 100,\n' +
      '      "fill": "rgba(116,252,218, 0.75)",\n' +
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
      '      "rx": 0,\n' +
      '      "ry": 0\n' +
      '    }\n' +
      '  ],\n' +
      '  "background": "white"\n' +
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
    if (Math.abs(distX) > Math.abs(distY)) {
      if (distX > 0) {
        target.setLeft(obj.getLeft() - target.getWidth() - margin);

        // pushed out left side of canvas
        if (target.getLeft() < snap) {
          target.setLeft(obj.getLeft() + target.getWidth() - (margin * 2));
        }
      } else {
        target.setLeft(obj.getLeft() + target.getWidth() + margin);

        // pushed out right side of canvas
        if ((target.getWidth() + target.getLeft()) > (width - snap)) {
          target.setLeft(obj.getLeft() - target.getWidth() + margin);
        }
      }
    } else {
      if (distY > 0) {
        target.setTop(obj.getTop() - target.getHeight() - margin);

        // pushed out top of canvas
        if (target.getTop() < snap) {
          target.setTop( obj.getTop() + target.getHeight() - (margin * 2));
        }
      } else {
        target.setTop(obj.getTop() + obj.getHeight() + margin);

        // pushed out bottom of canvas
        if ((target.getHeight() + target.getTop()) > (height - snap)) {
          target.setTop(obj.getTop() - target.getHeight() + margin);
        }
      }
    }
  };

  if (canvas) {
    canvas.on('object:moving', (options) => {
      // Sets corner position coordinates based on current angle, width and height
      options.target.setCoords();

      // Don't allow objects off the canvas
      // canvas left
      if (options.target.getLeft() < snap) {
        options.target.setLeft(margin);
      }

      // canvas top
      if (options.target.getTop() < snap) {
        options.target.setTop(margin);
      }

      // canvas right
      if ((options.target.getWidth() + options.target.getLeft()) > (width - snap)) {
        options.target.setLeft(width - options.target.getWidth() - margin);
      }

      // canvas bottom
      if ((options.target.getHeight() + options.target.getTop()) > (height - snap)) {
        options.target.setTop(height - options.target.getHeight() - margin);
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

        /** target = moving element, object = static element */
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
            options.target.setTop(obj.getTop() + obj.getHeight() + margin);
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
      } }>To JSON
      </button>
      <button onClick={ load }>Load</button>
      <button onClick={ makeGroup }>Group all</button>
      <button onClick={ e => {
        e.preventDefault();
        Textbox({canvas, margin});
      } }>Add new Textbox
      </button>
      <button onClick={ e => {
        e.preventDefault();
        Rectangle({canvas});
      } }>Add new Rect
      </button>
    </Fragment>
  )
};

export default Canvas;
