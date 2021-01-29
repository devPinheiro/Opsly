import React, { FormEvent } from 'react';
import * as joint from 'jointjs';

// utils
import Shape from '../utils/Shape'



class DesignLab extends React.PureComponent {
  shape: joint.shapes.devs.Model;
  initializeGraph: joint.dia.Graph;
  paper!: joint.dia.Paper;
  paperElement: React.RefObject<HTMLDivElement> = React.createRef();

  constructor(props: any) {
    super(props);
    // creates a new instance of 
    this.initializeGraph = new joint.dia.Graph();

    this.handleAddPort = this.handleAddPort.bind(this);
    
    // new instance of a joint Model (Element)
    this.shape = Shape;
  
  }

  state = {
    port: '',
  };

  componentDidMount() {
    // initial joint Paper for a new graph
    this.paper = new joint.dia.Paper({
      ...({
        el: this.paperElement.current,
        width: 800,
        height: 300,
        model: this.initializeGraph,
      } as joint.dia.Paper.Options),
    });

    // add node to Graph by passing it an Element
    this.addNode(this.shape);
  }

   /**
   * Add Node to an initialized graph
   *
   * @param {Element} joint.shapes.devs.Model Joint element model
   *
   * @returns {void}
   */

  addNode(element: joint.shapes.devs.Model) {
    this.initializeGraph.addCells([element]);
  }

  /**
   * Handles input field change
   *
   * @param {React.ChangeEvent} e Input change event
   *
   * @returns {void}
   */
  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ [e.target.name]: e.target.value });
  }

  /**
   * Handles form submission and add port to element
   *
   * @param {FormEvent} e Form event
   *
   * @returns {void}
   */
  handleAddPort(e: FormEvent) {
    e.preventDefault();
    const id = Math.floor(Math.random() * 10);
    if (this.state.port === 'inPort') {
      this.shape.addInPort(`in_${id}`);
    }  
    if (this.state.port === 'outPort') {
      this.shape.addOutPort(`out_${id}`);
    }
  }

  render() {
    return (
      <>
        <div className='main'>
         
            <form onSubmit={this.handleAddPort} className='form'>
              <label className="label">Enter Port Type </label>
              <input
                name='port'
                onChange={(e) => this.handleChange(e)}
                placeholder='e.g inPort, outPort'
              />
              <input type='submit' value='Submit' />
            </form>

             <div id='playground' ref={this.paperElement}></div>
        
        </div>
       
      </>
    );
  }
}

export default DesignLab;
