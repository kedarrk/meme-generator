import React, { Component } from 'react';
import Meme from './Meme.js'
export class MemeBody extends Component {
    constructor(props){
        super(props);
        this.state={
        }
    }
    // async componentDidMount(){
    //     const res= await fetch("https://api.imgflip.com/get_memes");
    //     const datas= await res.json();
    //     this.setState({memeArray:datas.data.memes , loaded:true,length:datas.data.memes.length});
    // }
    // handleClick(){
    //     var x= this.state.num;
    //     x=x+1;
    //     if(x===this.state.length){
    //         x=0;
    //     }
    //     this.setState({num:x});
    //     var h= this.state.memeArray[x].height;
    //     var w= this.state.memeArray[x].width;
    //     var rH= (h/(h+w));
    //     var rW=(w/(h+w));
    //     this.setState({heightRatio:rH , widthRatio:rW});
    //     console.log(rH , " "  , rW);
    // }
    render() {
       return (
            <div>
                   <div >
                        <Meme name={this.props.name} url={this.props.url}
                        height={this.props.height} width={this.props.height}/>
                       
                    </div>
                
            </div>
        )
    
    }
}

export default MemeBody
