import React, { Component } from 'react'

export class SideBar extends Component {
    constructor(props){
        super(props);
        this.state={
            h:(this.props.height/(this.props.height+this.props.width)) * 200,
            w:(this.props.width/(this.props.height+this.props.width)) *200,
        }
    }
    render() {
        return (
            <button onClick={this.props.handleSideClick} className="sidebar-btn">
               <span> {this.props.meme}</span>  <img src={this.props.img} height={this.state.h} width={this.state.w}/>
            </button>
        )
    }
}

export default SideBar
