import React, { Component } from 'react'

export class InputBox extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    render() {
        // if(this.props.num===2){
        //     return (
        //         <div>
        //             <input type="text" onChange={this.props.handleInput}></input>
        //         </div>
        //     )
        // }
        return (
            <div>
            <textarea type="text" onChange={this.props.handleInput} className="input-box" className={this.props.num} placeholder="#text" value={this.props.value}/>
            </div>
        )
                // if(this.props.num===1){
                //     return (<div>
                //     <input type="text" onChange={this.props.handleInput}></input>
                //     </div> )
                // }else if(this.props.num===2){
                //    return ( <div>
                        
                //     <input type="text" onChange={this.props.handleInput}></input>
                    
                //     <input type="text" onChange={this.props.handleInput}></input>
                //    </div> )
                // }else if(this.props.num===3){
                //     return (<div>
                //     <input type="text" onChange={this.props.handleInput}></input>
                    
                //     <input type="text" onChange={this.props.handleInput}></input>
                    
                //     <input type="text" onChange={this.props.handleInput}></input>
                //     </div>)
                // }else if(this.props.num===4){
                //     return (<div>
                //     <input type="text" onChange={this.props.handleInput}></input>
                    
                //     <input type="text" onChange={this.props.handleInput}></input>
                    
                //     <input type="text" onChange={this.props.handleInput}></input>
                //     <input type="text" onChange={this.props.handleInput}></input>
                //     </div> ) 
                // }else if(this.props.num===5){
                //     return <div> <input type="text" onChange={this.props.handleInput}></input>
                    
                //     <input type="text" onChange={this.props.handleInput}></input>
                    
                //     <input type="text" onChange={this.props.handleInput}></input>
                //     <input type="text" onChange={this.props.handleInput}></input>
                //     <input type="text" onChange={this.props.handleInput}></input>
                //      </div>
                // }
        
    }
}

export default InputBox
