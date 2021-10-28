import React, { Component } from 'react'

import Draggable from 'react-draggable'; // The default
import {DraggableCore} from 'react-draggable'; // <DraggableCore>
export class Meme extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    render() {
        return (
            <div>
                <div className="meme">
                    <img src={this.props.url} height={this.props.height} width={this.props.width}/>
                </div>
            </div>
        )
    }
}

export default Meme
