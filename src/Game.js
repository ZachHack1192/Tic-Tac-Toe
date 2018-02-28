import React, { Component } from 'react';
import './App.css';
import BlankPiece from './BlankPiece'
import XPiece from "./XPiece";
import OPiece from './OPiece'

class Game extends Component {
  render() {
    return (
      <div>
          <div className='flex'>
              <div className='upper-left'><BlankPiece/></div>
              <div className='upper-middle'></div>
              <div className='upper-right'></div>
          </div>
          <div className='flex'>
              <div className='middle-left'><XPiece/></div>
              <div className='middle-middle'></div>
              <div className='middle-right'></div>
          </div>
          <div className='flex'>
              <div className='lower-left'><OPiece/></div>
              <div className='lower-middle'></div>
              <div className='lower-right'></div>
          </div>
      </div>
    );
  }
}

export default Game;
