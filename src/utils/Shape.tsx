import * as joint from 'jointjs';

 const Shape = new joint.shapes.devs.Model({
      position: { x: 100, y: 100 },
      size: { width: 120, height: 90 },
      inPorts: [],
      outPorts: [],
      ports: {
        groups: {
          in: {
            attrs: {
              '.port-body': {
                fill: '#16A085',
              },
            },
          },
          out: {
            attrs: {
              '.port-body': {
                fill: '#E74C3C',
              },
            },
          },
        },
      },
      attrs: {
        '.label': { text: 'New Model', 'ref-x': 0.5, 'ref-y': 0.2 },
        rect: { fill: '#c0c0c0' },
      },
    });

export default Shape;

